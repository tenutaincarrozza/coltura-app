// Coltura – Tutor: risponde alle domande sulla materia attiva usando gli appunti del modulo.
// Richiede un utente loggato (verify_jwt) e il secret GEMINI_API_KEY.
import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (o: unknown, status = 200) =>
  new Response(JSON.stringify(o), { status, headers: { ...CORS, "Content-Type": "application/json" } });

const MODELS = (Deno.env.get("GEMINI_MODEL") || "gemini-flash-latest,gemini-2.5-flash").split(",").map((s) => s.trim());

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "method" }, 405);
  const key = Deno.env.get("GEMINI_API_KEY");
  if (!key) return json({ error: "nokey" }, 503);

  let body: { materia?: string; capitolo?: string; appunti?: string; nome?: string; messages?: { role: string; text: string }[] };
  try { body = await req.json(); } catch { return json({ error: "badjson" }, 400); }
  const materia = String(body.materia || "").slice(0, 80);
  const capitolo = String(body.capitolo || "").slice(0, 160);
  const appunti = String(body.appunti || "").slice(0, 120000);
  const nome = String(body.nome || "").slice(0, 40);
  const msgs = (Array.isArray(body.messages) ? body.messages : []).slice(-12)
    .map((m) => ({ role: m.role === "model" ? "model" : "user", parts: [{ text: String(m.text || "").slice(0, 2000) }] }))
    .filter((m) => m.parts[0].text.trim());
  if (!materia || !msgs.length || msgs[msgs.length - 1].role !== "user") return json({ error: "input" }, 400);

  const system = `Sei il tutor di "${materia}" dentro Coltura, l'app con cui ${nome || "una studentessa"} di Medicina prepara l'esame.
Rispondi sempre in italiano, in modo chiaro e da tutor paziente: spiega, fai esempi clinici, dai trucchi per ricordare.
Resta sulla materia "${materia}" (e sulle basi di medicina che servono a capirla). Se la domanda è su tutt'altro, dillo con gentilezza e riporta la conversazione sulla materia.
Basati prima di tutto sugli APPUNTI del corso qui sotto, che sono il programma d'esame. Se qualcosa non è negli appunti, puoi rispondere con le conoscenze mediche standard ma dillo ("negli appunti non c'è, in generale…").
Non inventare valori, classificazioni o cut-off: se non sei sicuro, dillo.
Risposte brevi e ben organizzate (al massimo 150-200 parole salvo richiesta), elenchi puntati quando aiutano, niente tabelle larghe. Testo semplice, puoi usare **grassetto**.
Se la studentessa lo chiede, puoi farle 2-3 domande per verificare se ha capito.
${capitolo ? `In questo momento sta guardando il capitolo: ${capitolo}.` : ""}

APPUNTI DEL CORSO:
${appunti}`;

  let lastErr = "";
  for (const model of MODELS) {
    const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": key },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: system }] },
        contents: msgs,
        generationConfig: { temperature: 0.4, maxOutputTokens: 1200 },
      }),
    });
    if (r.status === 404) { lastErr = "model " + model; continue; }
    const d = await r.json().catch(() => ({}));
    if (r.status === 429) return json({ error: "quota" }, 429);
    if (!r.ok) return json({ error: "upstream", status: r.status, detail: d?.error?.message || "" }, 502);
    const text = (d?.candidates?.[0]?.content?.parts || []).map((p: { text?: string }) => p.text || "").join("").trim();
    if (!text) return json({ error: "empty", reason: d?.candidates?.[0]?.finishReason || d?.promptFeedback?.blockReason || "" }, 502);
    return json({ text, model });
  }
  return json({ error: "nomodel", detail: lastErr }, 502);
});
