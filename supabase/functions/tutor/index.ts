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

const MODELS = (Deno.env.get("GEMINI_MODEL") || "gemini-2.5-flash,gemini-flash-latest,gemini-2.5-flash-lite,gemini-flash-lite-latest").split(",").map((s) => s.trim());

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

  const call = (model: string) => fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-goog-api-key": key },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: system }] },
      contents: msgs,
      generationConfig: { temperature: 0.4, maxOutputTokens: 1200 },
    }),
  });

  // Prova i modelli in ordine; se uno è sovraccarico (503/500), senza quota (429) o non esiste (404) passa al successivo.
  // Se falliscono tutti per sovraccarico, aspetta un attimo e ritenta una volta.
  let lastErr = "", busy = 0, quota = 0;
  for (let pass = 0; pass < 2; pass++) {
    if (pass === 1) { if (!busy) break; await new Promise((r) => setTimeout(r, 2000)); }
    for (const model of MODELS) {
      let r: Response;
      try { r = await call(model); } catch (e) { lastErr = model + " fetch " + String(e); busy++; continue; }
      const d = await r.json().catch(() => ({}));
      if (!r.ok) {
        const msg = String(d?.error?.message || "");
        console.error("gemini", model, r.status, msg.slice(0, 300));
        lastErr = model + " " + r.status + " " + msg;
        if (r.status === 503 || r.status === 500 || r.status === 504) { busy++; continue; }
        if (r.status === 429) { quota++; continue; }
        if (r.status === 404 || /not found|not supported/i.test(msg)) continue;
        return json({ error: "upstream", status: r.status, detail: msg.slice(0, 300) }, 502);
      }
      const text = (d?.candidates?.[0]?.content?.parts || []).map((p: { text?: string }) => p.text || "").join("").trim();
      if (!text) { console.error("gemini empty", model, JSON.stringify(d).slice(0, 400)); lastErr = model + " empty"; continue; }
      return json({ text, model });
    }
  }
  console.error("gemini all failed", lastErr);
  if (busy) return json({ error: "busy", detail: "I server di Google sono sovraccarichi in questo momento." }, 503);
  if (quota) return json({ error: "quota" }, 429);
  return json({ error: "nomodel", detail: lastErr.slice(0, 300) }, 502);
});
