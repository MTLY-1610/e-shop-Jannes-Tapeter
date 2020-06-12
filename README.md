# Jannes tapeter

Janne stora passion i livet är tapeter, därför har han bestämt sig för att skapa en e-handel som säljer dom finaste tapeterna i världen. Dessa exklusiva produkter är indelade i kategorierna: mönstertapeter, fototapeter och barnrum.

## Presentation

För denna skoluppgift har vi har byggt en webbshops-applikation inkluderande en klient och en server. Servern är kopplad till en mongodb databas via mongoDB atlas och är strukturerad och baserad på ett REST-API med resurser. Klient delen är uppbyggd med React.js.

### Länk till mockup:
https://xd.adobe.com/view/5d5f3a56-fc28-4f96-554c-772fbb1a44ec-2b6e/?fullscreen&hints=off

## Kravlistan

Kravspecifikation på projektet:
Alla sidor skall vara responsiva. (G)  
Arbetet ska implementeras med en React frontend och en Express backend. (G)  
Skapa ett ER diagram och koddiagram, detta ska lämnas in vid idégodkännandet G)  
Beskriv er företagsidé i en kort textuell presentation, detta ska lämnas in vid idégodkännandet (G)  
All data som programmet utnyttjar ska vara sparat i en Mongo-databas (produkter, beställningar, konton mm) (G)  
Man ska kunna logga in som administratör i systemet (G)  
Man ska kunna registrera sig som administratör på sidan, nya användare ska sparas i databasen (VG)  
En administratör behöver godkännas av en tidigare administratör innan man kan logga in fösta gången (VG)  
Inga Lösenord får sparas i klartext i databasen (G)  
En besökare ska kunna beställa produkter från sidan, detta ska uppdatera lagersaldot i databasen (G)  
Administratörer ska kunna uppdatera antalet produkter i lager från admin delen av sidan (G)  
Administratörer ska kunna se en lista på alla gjorda beställningar (G)  
Administratörer ska kunna markera beställningar som skickade (VG)  
Sidans produkter ska delas upp i kategorier, en produkt ska tillhöra minst en kategori, men kan tillhöra flera (G)  
Från hemsidan ska man kunna se en lista över alla produkter, och man ska kunna lista bara dom produkter som tillhör en kategori (G)  
Besökare ska kunna lägga produkterna i en kundkorg, som är sparad i local-storage på klienten (G)  
En besökare som gör en beställning ska få möjligheten att registrera sig samt logga in och måste vara inloggad som kund innan beställningen skapas (G)  
När man är inloggad som kund ska man kunna se sina gjorda beställning och om det är skickade eller inte (VG)  
Besökare ska kunna välja ett av flera fraktalternativ (G)  
Tillgängliga fraktalternativ ska vara hämtade från databasen (G)  
Administratörer ska kunna redigera vilka kategorier en produkt tillhör (VG)  
Administratörer ska kunna lägga till och ta bort produkter (VG)  
Backendapplikationen måste ha en fungerande global felhantering (VG)  
Checkoutflödet i frontendapplikationen ska ha validering på samtliga fält (G)

Vi i gruppen anser att vi har uppfyllt alla krav, både G och VG. 

## Hur vi har byggt projektet

Först skapade vi ett ER-diagram och kod-diagram för servern och dess filer. Vi skapade en mockup för de olika sidorna som skulle skapas på klient delen av applikationen.
Alla filer för backend sparades i en server-mapp, alla filer för forntend sparades i en client-mapp. Vi har en .gitignore fil som ignorerar våra node_modules mappar.

### Server

Vi har installerat och använt:  
 "bcrypt": "^4.0.1",  
 "cookie-session": "^1.4.0",  
 "express": "^4.17.1",  
 "express-async-errors": "^3.1.1",  
 "express-router": "^0.0.1",  
 "mongoose": "^5.9.15",  
 "multer": "^1.4.2"

### Klient

Vi har installerat och använt:  
 "@material-ui/core": "^4.10.1",  
 "@material-ui/icons": "^4.9.1",  
 "@testing-library/jest-dom": "^4.2.4",  
 "@testing-library/react": "^9.5.0",  
 "@testing-library/user-event": "^7.2.1",  
 "axios": "^0.19.2",  
 "dom": "0.0.3",  
 "fontsource-roboto": "^2.1.3",  
 "i": "^0.3.6",  
 "lodash": "^4.17.15",  
 "material-icons": "^0.3.1",  
 "material-ui-icons": "^1.0.0-beta.36",  
 "npm": "^6.14.5",  
 "react": "^16.13.1",  
 "react-dom": "^16.13.1",  
 "react-material-ui-form": "^1.1.7",  
 "react-router-dom": "^5.2.0",  
 "react-scripts": "3.4.1",  
 "react-typekit": "^1.1.4",  
 "router": "^1.3.5"

## Hur projektet körs

1. Öppna upp terminalen, gå in i server mappen och kör kommando: "npm install"
2. Om du har nodemon installerat globalt använd "nodemon server.js". Annars använd "node server.js"
3. Öppna upp ett annat fönster i terminalen och gå in i klient mappen och kör kommando: "npm install"
4. Efter det, kör kommando: "npm start"

## Data för att testa applikationen

För att fullt kunna utforska applikationen behövs en användare med admin behörighet. Använd någon av dessa:

Epost: david.jensen@dota.se
Lösenord: 123456

Epost: victor.olsson@dota.se
Lösenord: 123456

## Gruppmedlemmar som har skapat applicationen

Fredrik Thelin https://github.com/FThelin  
Mattin Atai Najaf https://github.com/MattinNajafi  
Mathieu Larrouy https://github.com/MTLY-1610  
Embla Jonsson https://github.com/emmbla  
Ellinor Carlberg https://github.com/Ellinor-Carlberg

### Länk till github repot

https://github.com/Ellinor-Carlberg/jannes-tapeter/graphs/contributors
