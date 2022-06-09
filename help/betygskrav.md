För G så ska följande krav uppfyllas:

# klart ApiZoo.vue
Webbanrop görs information från en eller flera webbtjänster visas i webbapplikationen (Undvik CORS-problem och använd HTTPS, för applikationen ska fungera bra som publicerad; Visa åtminstone tio värden; Använd inte Cities-tjänsten eller någon annan webbtjänst som har tagits upp som ett exempel)

# klart header.vue
<!-- Textinterpolering ({{ och }}) används --> se ZooView.vue 5+5

<!-- Attributinterpolering (v-bind eller dess kortform) används (key-props (relaterade till v-for) räknas inte)  --> se ZooView.vue där statsk bild används

Villkorlig rendering (v-if) används

# klart ApiZoo.vue
Listrendering (v-for) används

Händelser (v-on eller dess kortform) används

v-model (och värdet som matas in) används

En Single Page Application, bestående av minst två webbsidor, ska skapas med Vue Router (Använd både router-link och router-view)

# klart
Minst en icke-Vue-Router-.vue-komponent ska skapas (App.vue räknas inte)

Minst en komponent ska ta emot, och använda, minst en prop (via props-nyckeln)

Webbapplikationen ska nyttja ett Web App Manifest, som ska vara genererad via Vite:s PWA-plugin – webbapplikationen ska, via detta manifest, ha ett eget appnamn, en egen temafärg, och egna ikoner (inklusive en favicon)

Webbapplikationen ska fungera offline och information (inklusive informationen som hämtats med GET-anropen) måste gå att se även när användaren är offline – använd en Service Worker för detta, som är genererad via Vite:s PWA-plugin, och konfigurerad via ett anrop till registerSW i src/main.js

Källkoden för projektet publiceras på GitHub (eller liknande)

Webbapplikationen ska publiceras på GitHub Pages (eller liknande)

Inlämningen ska bestå av ett dokument som innehåller adresserna till två separata Git repositories: 1) ett repository för källkoden (till exempel vite.config.js, main.js och .vue-filerna) och 2) ett repository för den publicerade “produktionsvarianten” av projektet (GitHub Pages-filerna)
Om ditt repository är privat, bjud då in användaren "jonkri" på GitHub/GitLab

Minst en komponent använder Sass, via style-elementet, i sin .vue-fil
