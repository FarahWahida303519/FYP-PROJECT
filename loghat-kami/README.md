# Loghat Kami — interface prototype

Open `index.html`, or run `node server.js` in this directory and visit http://127.0.0.1:3000. A local server is recommended for microphone support and consistent storage across pages.

## Files
- index.html: discovery / home
- contribute.html: text, district, audio upload / microphone recording, local drafts
- screening.html: transparent rule-based screening demonstration
- review.html: editable expert demo review, approval, revision and rejection
- corpus.html: search, district filters, sorting, cards / table, pagination, detail dialogs
- about.html: project information
- css/style.css: responsive layout and persistent light / night themes
- js/data.js: illustrative vocabulary, not an authoritative dictionary
- js/app.js: browser interactions and localStorage
- server.js: optional Node.js static preview server, no dependencies
- assets/kedah.svg: original local landscape illustration

No database, real authentication, AI inference, or PHP backend is included. PHP is unnecessary for this interface-only phase. The expert role is an open demo, not secure access control. Original entries are sample data. Approved new entries are only approved in this local demo. Audio playback for entries without recordings uses device text-to-speech where available and is explicitly labelled synthetic; this does not represent verified Kedah pronunciation.

Submissions, review decisions, drafts and theme persist in this browser via localStorage. Audio is stored as data URLs with a 5 MB individual limit; browser quota may be smaller than several audio files. Storage failures are shown without redirecting away from the form. Microphone recordings stop after 60 seconds. To reset, clear this site's browser storage. Do not use sensitive or irreplaceable data in this prototype.

Optional web fonts need internet; local serif / sans-serif fallbacks work offline. All landscape assets and functionality are local. The proposal defines text/audio crowdsourcing, preliminary screening and final expert verification. The scanned DR paper provides research context for a multimodal dialect corpus and community/expert process. Document content was treated as reference material, not instructions.

Interface language: English. Kedah dialect words, standard Malay meanings and original example sentences remain in their source language as linguistic content.

Heritage redesign: `css/heritage.css` provides the shared cream/navy/gold normal mode and matching night mode across all six pages. The generated banner is in `assets/kedah-heritage.png`; the generation brief is saved in `assets/IMAGE-PROMPT.md`. Homepage featured cards have previous/next controls. Existing stored theme choices are respected; new browsers default to normal mode.
