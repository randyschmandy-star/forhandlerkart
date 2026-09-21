/*
  ====================================================================
  FIREBASE-OPPSETT — dette er den ENESTE filen du trenger å endre på
  for at kartet og admin-siden skal snakke med din egen database.
  ====================================================================

  Slik finner du disse verdiene:
  1. Gå til https://console.firebase.google.com og opprett et nytt
     prosjekt (f.eks. "graabein-forhandlerkart").
  2. I venstremenyen: klikk på "Databases & Storage" -> "Firestore" ->
     "Create database". Velg en region i Europa (f.eks. europe-west).
     Start i "test mode" (vi bytter til de riktige reglene senere med
     filen firestore.rules).
  3. I venstremenyen: klikk på "Security" -> "Authentication" ->
     "Get started". Under fanen "Sign-in method", slå på
     "Email/Password". Gå så til fanen "Users" og trykk "Add user" —
     legg til DEG selv med en e-post og et passord. Dette blir
     innloggingen din til admin-siden.
  4. Gå til prosjektinnstillinger (tannhjulet øverst til venstre ->
     "Project settings"). Scroll ned til "Your apps" og klikk på
     web-ikonet (</>) for å registrere en ny nettapp ("Add app"). Gi
     den et navn, f.eks. "forhandlerkart".
  5. Firebase viser deg da en kodeblokk som ligner den under — kopier
     tallene/tekstene dine inn i objektet nedenfor, og lagre filen.

  Du trenger ALDRI å røre noe annet i kart.html eller admin.html for
  dette oppsettet — alt leser fra denne ene filen.
*/

const firebaseConfig = {
  apiKey: "AIzaSyC1-VT0EwLk7DU-legzq_na-AaNWBp4F8o",
  authDomain: "graabein-forhandlerkart.firebaseapp.com",
  projectId: "graabein-forhandlerkart",
  storageBucket: "graabein-forhandlerkart.firebasestorage.app",
  messagingSenderId: "103915064718",
  appId: "1:103915064718:web:c6a3f03a7893b7102a68df"
};

/*
  ====================================================================
  VALGFRITT: penere kartbunn-farger (lys/mørk/voyager)
  ====================================================================
  Kartet fungerer helt fint uten dette — det bruker da vanlig
  OpenStreetMap, som alltid er gratis og krever ingen nøkkel.

  Vil du ha de litt penere, dempede fargevariantene fra CARTO, er det
  gratis, men krever en rask registrering:
  1. Gå til https://carto.com/basemaps/apikey/
  2. Opprett en gratis konto og hent en API-nøkkel
  3. Lim nøkkelen inn under, mellom anførselstegnene
*/
const CARTO_API_KEY = "";
