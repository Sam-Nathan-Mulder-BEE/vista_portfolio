# Testplan – Website Cultuurwerkplaats Wageningen (versie 1)

| **Project**            | Website Cultuurwerkplaats Wageningen         |
| ---------------------- | -------------------------------------------- |
| **Doel testplan**      | Vastleggen wat, hoe en wanneer getest wordt om de kwaliteit van de website te waarborgen, met focus op functionaliteiten voor bezoekers. |
| **Auteur**             | [Jouw naam]                                  |
| **Datum**              | [Huidige datum]                              |
| **Versie**             | 1.0                                          |
| **Referentiedocument** | Functionele beschrijving website (geen formeel SRS, maar gebaseerd op observatie van [www.cultuurwerkplaats.nl](https://www.cultuurwerkplaats.nl)) |

---

## 1. Wat ga ik testen?

De testscope is gebaseerd op de kernfunctionaliteiten voor bezoekers, zoals beschreven in het eerdere document. De testen zijn gegroepeerd per functioneel gebied en aangevuld met niet-functionele eisen.

### 1.1 Functionele gebieden

| Functionaliteit           | Wat test ik?                                                                                             | Waarom?                                                                                      |
| ------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **Lid worden**            | Het volledige aanmeldformulier: velden, validatie, foutmeldingen, doorklikken tot de betaalstap (zonder te betalen). | Dit is een primaire manier voor bezoekers om actief te worden en inkomsten te genereren.    |
| **Zaal huren**            | De interface om een ruimte te huren: beschikbaarheidsweergave, selectie, formulier, doorklikken tot reservering. | Eveneens een belangrijke inkomstenbron en directe gebruikersinteractie.                     |
| **Interactieve agenda**   | Filteren, sorteren, klikken op items, doorklikken naar detail, correcte weergave van datum/activiteit/locatie. | Bezoekers vinden hier de activiteiten; een foutieve agenda leidt tot gemiste deelnames.     |
| **Uitgelicht evenement**  | De uitgelichte banner werkt, de knop “Kijk verder” leidt naar de juiste detailpagina.                   | Dit element trekt aandacht en moet correct doorverwijzen.                                   |
| **Online rondleiding**    | De knop start de rondleiding (bijv. video of interactieve tour) en deze werkt zonder fouten.            | Verhoogt de betrokkenheid en geeft een goed beeld van de locatie.                           |
| **Contact & adres**       | Adres, telefoon, e-mail worden correct getoond; eventuele kaartfunctionaliteit werkt.                   | Bezoekers moeten de locatie kunnen vinden of contact opnemen.                               |

### 1.2 Niet-functionele eisen

| Aspect                 | Wat test ik?                                                                                                 | Waarom?                                                                                                       |
| ---------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| **Usability**          | Kwalitatieve beoordeling van navigatie, leesbaarheid, begrijpelijkheid van labels en knoppen.               | Een gebruiksvriendelijke site houdt bezoekers vast en zet hen aan tot actie.                                 |
| **Veiligheid**         | HTTPS-afdwinging, geen mixed content, basisbescherming tegen SQL-injectie (bij invoervelden).                | Vertrouwelijke gegevens (namen, e-mail) moeten beschermd worden; kwetsbaarheden kunnen leiden tot datalekken. |
| **Performance**        | Laadtijd van de homepage en kernpagina’s, met name de **Largest Contentful Paint (LCP)**.                    | Trage websites jagen bezoekers weg; Google stelt een LCP van < 2,5 seconden als norm.                         |
| **Toegankelijkheid**   | Controle van kleurcontrast, alt-teksten bij afbeeldingen, toetsenbordnavigatie, koppenstructuur (WCAG 2.1 niveau AA). | Cultuur moet voor iedereen toegankelijk zijn, ook voor mensen met een beperking.                              |
| **Cross-browser**      | Weergave en functionaliteit in Chrome, Edge, Safari, Firefox (desktop) en Samsung Internet (mobiel).         | Bezoekers gebruiken uiteenlopende browsers; de site moet overal consistent werken.                            |
| **Mobiel**             | Responsive gedrag op een klein scherm (smartphone), touch-functionaliteit, leesbaarheid.                     | Steeds meer bezoekers gebruiken een mobiel apparaat.                                                          |

### 1.3 Wat test ik **niet**?

- Esthetiek / vormgeving (geen expertisedomein)
- Inloggen / beheerdersfunctionaliteiten
- Blog (niet kern)
- Preview van activiteiten (onderdeel van niet-kern)
- Daadwerkelijk versturen van aanmeldingen of betalingen (test stopt voor de betalingsstap)
- Tablets (niet beschikbaar in testomgeving)
- Besturingssystemen Linux / macOS (niet beschikbaar)

---

## 2. Hoe ga ik testen?

### 2.1 Testmethoden

- **Handmatig testen** – voor usability, toegankelijkheid, veiligheid (HTTPS, SQL-injectie) en cross-browser checks.
- **Geautomatiseerd testen met Playwright** – voor de functionele eisen (formulieren, agenda, knoppen) en performance (LCP-meting). Playwright voert scripts uit die gebruikershandelingen nabootsen en controleren of de verwachte resultaten optreden.

### 2.2 Testcases

De concrete testgevallen worden uitgewerkt in een apart testcases-document (bijlage A). Hier een overzicht van de hoofdgroepen:

- **TC-LID** – Lid worden formulier
  - Invoeren geldige gegevens → doorloop tot bevestigingsscherm.
  - Onvolledige/ongeldige invoer → controle foutmeldingen.
- **TC-ZAAL** – Zaal huren
  - Doorloop stappen van ruimte kiezen, datum/tijd selecteren, persoonsgegevens invullen.
  - Testen op verplichte velden.
- **TC-AGENDA** – Agenda functionaliteit
  - Filteren op maand/soort activiteit.
  - Klikken op een item → detailpagina toont juiste info.
- **TC-KNOPPEN** – Uitgelicht evenement en online rondleiding
  - Knoppen leiden naar de juiste URL of starten de juiste actie.
- **TC-PERF** – Performance
  - Meten van LCP met Playwright (5 runs, gemiddelde berekenen).
- **TC-TOEG** – Toegankelijkheid
  - Handmatige WCAG-checklist (contrast, alt, koppen, toetsenbord).

### 2.3 Volgorde van testen

1. **Handmatige sneltest** (usability, eerste indruk) – om grote blokkerende fouten vroeg te vinden.
2. **Geautomatiseerde functionele tests** (Playwright) – herhaalbaar en snel.
3. **Performance-meting** (Playwright) – na functionele check, omdat de site dan stabiel is.
4. **Veiligheid** – handmatige controle op HTTPS en eenvoudige SQL-injectiepogingen.
5. **Toegankelijkheid** – handmatig, aan de hand van een checklist.
6. **Cross-browser en mobiel** – handmatig in verschillende browsers/emulators.

### 2.4 Gebruikersrollen

De website kent voor bezoekers geen verschillende rollen (inloggen is uitgesloten). Alle testen worden uitgevoerd vanuit het perspectief van een **anonieme bezoeker**.

---

## 3. Planning

| Week | Activiteit                                                                                     | Tijdsinvestering |
| :--- | :--------------------------------------------------------------------------------------------- | :--------------- |
| Week 1 | Opzetten testomgeving, schrijven Playwright-scripts voor TC-LID, TC-ZAAL, TC-AGENDA, TC-KNOPPEN. | 4 uur            |
| Week 1 | Eerste handmatige usability-check, noteren van observaties.                                    | 1 uur            |
| Week 2 | Uitvoeren geautomatiseerde tests, analyseren resultaten, eventueel hertesten na fixes.         | 2 uur            |
| Week 2 | Performance-metingen (LCP) met Playwright, rapportage.                                         | 1 uur            |
| Week 2 | Handmatige veiligheidstesten (HTTPS, SQL-injectie).                                            | 1 uur            |
| Week 3 | Toegankelijkheidstest (WCAG-checklist).                                                        | 2 uur            |
| Week 3 | Cross-browser testen (desktop: Chrome, Edge, Safari, Firefox; mobiel: Samsung Internet via emulator of eigen toestel). | 2 uur |
| Week 3 | Rapportage samenstellen en testplan afronden.                                                  | 1 uur            |
| **Totaal** |                                                                                                | **13 uur**       |

*Opmerking: de tijden zijn indicatief en kunnen variëren afhankelijk van bevindingen en eventuele hersteltests.*

---

## 4. Benodigdheden

### 4.1 Testomgeving

- **URL:** [https://www.cultuurwerkplaats.nl](https://www.cultuurwerkplaats.nl) (productieomgeving, omdat er geen testomgeving beschikbaar is).
- **Lokale verbinding:** ca. 100 Mbit/s (zoals beschreven).

### 4.2 Testdata

- **Formuliergegevens:** Gebruik fictieve maar realistische namen, e-mailadressen (bv. via `test@example.com` of tijdelijke e-maildienst) en telefoonnummers.
- **Agenda:** Ervan uitgaande dat de agenda gevuld is met echte activiteiten. Indien leeg, kan ik geen filter/detail testen; dan noteer ik dit als risico.
- **Ruimte huren:** Ik selecteer een willekeurige toekomstige datum/tijd die beschikbaar lijkt.

### 4.3 Tools

- **Browser** Chrome (primair), Edge, Firefox, Safari (via fysieke Mac of BrowserStack), Samsung Internet (via BrowserStack of eigen Android toestel).
- **Playwright** (Node.js-bibliotheek) voor geautomatiseerde tests.
- **Lighthouse** (in Chrome DevTools) als alternatieve LCP-controle, maar Playwright-meting is leidend.
- **WCAG-checklist** (bijv. van [Digitaal Toegankelijk](https://digitaaltoegankelijk.nl/wcag-uitgelegd/)).
- **Screenshot tool** (bv. Lightshot of ingebouwde OS-tools) voor vastleggen van bevindingen.
- **Notitieapp** (bv. Word, Google Docs) voor rapportage.

### 4.4 Mensen

- Geen hulp nodig van anderen; alle testen worden zelfstandig uitgevoerd. Wel is het handig om bij twijfel over een bevinding een second opinion te vragen aan een mede-bezoeker van de schrijfgroep.

---

## 5. Risico’s en oplossingen

| Risico                                                             | Oplossing                                                                                                                                                |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Website is tijdelijk niet bereikbaar.                              | Test uitstellen tot de site weer online is. Neem contact op met de beheerder als de storing lang duurt.                                                 |
| Formulieren versturen echt (bijv. betaling).                       | Test stopt voor de definitieve verzending; ik gebruik geen echte betaalgegevens en annuleer voor de laatste stap.                                       |
| Agenda bevat geen items (toevallig leeg).                          | Dit kan ik niet testen; in rapport vermelden dat agenda niet gevuld was op moment van testen.                                                           |
| Geen toegang tot bepaalde browsers (Safari).                       | Gebruik BrowserStack (gratis proefversie) of leen een Mac van een vriend. Alternatief: test alleen in beschikbare browsers en noteer beperking.        |
| Playwright-scripts falen door wijzigingen in de website.           | Scripts onderhouden tijdens het testen; bij grote wijzigingen de verwachtingen bijstellen en opnieuw testen.                                            |
| SQL-injectie test kan per ongeluk data beschadigen.                | Gebruik alleen veilige, niet-destructieve invoer (bijv. `' OR '1'='1` in zoekvelden) en voer dit alleen uit op invoervelden die geen kritieke acties uitvoeren. |
| Beperkte tijd door onverwachte bevindingen.                        | Prioriteiten stellen: eerst de kernfunctionaliteiten (lid worden, zaal huren, agenda) testen, daarna de niet-functionele aspecten.                      |

---

## 6. Bijlagen

- **Bijlage A – Gedetailleerde testcases** (wordt apart opgesteld, bevat stap-voor-stap beschrijvingen per testcase).
- **Bijlage B – Rapportage** (na afloop van testen, bevat resultaten, gevonden issues, aanbevelingen).

---

*Dit testplan is goedgekeurd en vormt de basis voor de uitvoering van de testwerkzaamheden voor versie 1 van de website Cultuurwerkplaats Wageningen.*

**Handtekening auteur:** __________________

**Datum:** __________________