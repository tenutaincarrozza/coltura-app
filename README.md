# Coltura – Studio di Emilia

App di studio gamificata (stile Duolingo) per **Malattie infettive** (20 capitoli) e **Dermatologia** (13 capitoli), pensata per iPad.

## Cosa contiene
- **Studia**: schede per argomento con “Trucco per ricordare” e interruttore *Copri i dettagli*.
- **Flashcard**, **Quiz** a risposta multipla, **Esercizi** (completa la frase, abbinamenti), **Domande aperte** con parole chiave e risposta modello, **Recap** di fine capitolo.
- **Tracking degli errori**: ogni errore finisce in *Da rivedere* finché non viene recuperato.
- **Piano verso l’esame**: si inserisce la data e l’app distribuisce i capitoli nei giorni disponibili, con ripasso finale.
- **Gamification**: XP, 8 livelli, serie di giorni 🔥, forzieri, scudi, traguardi e badge.
- **🎓 Interrogazione col professore**: un professore vocale (agente ElevenLabs) interroga su una materia, più materie, alcuni capitoli o tutto il programma. Si sceglie quante domande e se correggere subito o alla fine; se non sai una risposta ti dà un indizio e poi la risposta corretta. Alla fine fa il resoconto e dà un voto in trentesimi, salvato nello storico.

## Dove finiscono i progressi
Solo nel browser del dispositivo (`localStorage`), nessun server. Da ⚙︎ → *Backup dei progressi* si può copiare un codice o scaricare un file e reimportarlo su un altro dispositivo.

Su iPad: apri il sito in Safari → Condividi → **Aggiungi alla schermata Home**.

## File
| File | Contenuto |
|---|---|
| `index.html` | Pagina e stile |
| `contenuti-infettive.js` | Capitoli di Malattie infettive |
| `contenuti-dermatologia.js` | Capitoli di Dermatologia |
| `app.js` | Logica dell’app |
| `elevenlabs-client.js` | SDK ElevenLabs (incluso nel repo, nessun CDN) |

Per correggere o aggiungere domande basta modificare i file `contenuti-*.js`: Vercel ripubblica da solo a ogni modifica e i progressi restano intatti.

Sito statico: nessuna build necessaria.

L’interrogazione richiede connessione internet e il permesso del microfono; consuma crediti ElevenLabs dell’account che possiede l’agente.
