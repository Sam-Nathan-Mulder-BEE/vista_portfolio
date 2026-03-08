# Testplan website Cultuurwerkplaats Wageningen

Mijn link met de [cultuurwerkplaats website](https://www.cultuurwerkplaats.nl) is dat ik twee keer per maand met veel plezier een **schrijfgroep** bezoek. Deze groep, *Schrijfgroep Wageningen*, wordt sinds kort in de cultuurwerkplaats gehouden. Ik ben de organisatie heel dankbaar dat ik mijn geliefde hobby uit kan blijven oefenen, want het is lastig om een goede, betaalbare locatie in Wageningen te vinden.

## Het doel van de website

De website heeft verschillende doeleinden. Op de voorpagina zie je als eerste drie kopjes: "Lid worden", "Huur ruimte", en "Cultuurloket". Bij het Cultuurloket kun je binnenlopen om een vraag te stellen. De andere twee opties gaan over het lid worden of huren van een ruimte. Dit brengt geld binnen voor de organisatie en brengt activiteiten en levendigheid in de cultuurwerkplaats.

Verder naar beneden vind je:
- Een **agenda** met datum, activiteit en plaats, zodat bezoekers kunnen zien aan welke activiteiten (zoals schrijftafel of open atelier) ze mee willen doen.
- Een **uitgelicht evenement** met een grotere afbeelding en een knop "Kijk verder".
- Een knop voor een **online rondleiding**.
- Het **adres en contactgegevens**.

**Voor bezoekers** zijn de hoofdfunctionaliteiten: lid worden, een ruimte huren en de activiteitenkalender bekijken. Hieromheen ga ik mijn testplan structureren.

## Wat ga ik testen?

- Werkt het **"Lid worden"-formulier**?
- Werkt de **"Zaal huren"-interface**?
- Werkt de **interactieve agenda**?
- Is de **usability** van de website voldoende?
- Is de website **veilig**?
- Is de **performance** van de website voldoende?
- Is de website **toegankelijk**?
- Werkt de website in verschillende **browsers**?
- Werkt de website op **mobiel**?

## Wat ga ik niet testen?

- **De esthetiek van de website**: Hoewel belangrijk voor een creatieve website, is dit niet mijn specialiteit.
- **De "Log in"-functionaliteit**: Ik test als bezoeker, niet als lid.
- **De Blog**: Dit hoort niet bij de kernfunctionaliteiten.
- **De activiteiten-preview**: Ook dit behoort niet tot de kern.
- **Het daadwerkelijk versturen van verzoeken** om lid te worden of een kamer te huren (tot aan de betaalstap).
- **Besturingssystemen**: Linux en Mac OS (niet beschikbaar).
- **Tablet-weergave** (niet beschikbaar).
- **Beheerdersopties** (geen toegang toe).

### Usability

De **usability** (gebruiksvriendelijkheid) test ik kwalitatief door de website handmatig te observeren en te beoordelen. Hiermee begin ik, omdat het een grote impact heeft op hoe je de site navigeert. Een goede usability kan bezoekers aantrekken terwijl een slechte usability bezoekers kan afstoten.

### Functionele eisen

De functionele eisen (aanmeldformulier, "zaal huren"-interface, interactieve agenda) test ik met een **geautomatiseerd Playwright-script**. Dit script checkt elke handeling op uitvoerbaarheid. Deze eisen vormen de kernfunctionaliteiten van de website als bezoeker.

### Veiligheid

De veiligheid test ik handmatig door te controleren op **HTTPS-gebruik** voor alle communicatie en of het systeem **beschermd is tegen SQL-injectie**. Veiligheid is een van de belangrijkste eisen van elke website. 

### Performance

De performance meet ik door de **"Largest Contentful Paint" (LCP)** waarde te meten tegen de Google-standaard. Ook meet ik de laadtijden meerdere keren met een **Playwright-script**, vanaf mijn lokale verbinding (circa 100Mb/s). Performance is een cruciale niet-functionele eis omdat een slechte performace bezoekers wegjaagt van de website.

### Toegankelijkheid

De toegankelijkheid van de website word handmatig en visueel getest naar de [WCAG richtlijnen](https://digitaaltoegankelijk.nl/wcag-uitgelegd/). Toegankelijkheid is een belangrijke basis, zeker voor een website die mensen toegang geeft tot culturele activiteiten. Dit moet voor zoveel mogelijk mensen beschikbaar zijn, ongeacht eventuele beperkingen.

### Browsers en mobiel

Op de volgende browsers ga ik testen, op basis van het marktaandeel in Nederland. 

**Desktop**:
| Browser | Marktaandeel |
| :------ | :----------: |
| Chrome  |    62,59%    |
| Edge    |    15,53%    |
| Safari  |    8,77%     |
| Firefox |    6,94%     |

**Mobiel** (aanvullend getest):
| Browser          | Marktaandeel |
| :--------------- | :----------: |
| Samsung Internet |    8,09%     |


