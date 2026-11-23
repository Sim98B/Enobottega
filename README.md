# Enobottega Amiata — demo e-commerce

Una vetrina e-commerce statica e responsive per un'enoteca ad Abbadia San Salvatore. È un prototipo: prodotti, prezzi, immagini, condizioni di vendita, spedizioni, contatti e pagamenti sono tutti dimostrativi o marcati come segnaposto.

## Riferimento e scelte progettuali

Il sito di riferimento è un negozio one-page: una fascia di servizio e un menu ad ancore introducono un hero molto grafico; seguono categorie scorrevoli, sezioni di catalogo, ricerca, selettori di variante, pulsanti rapidi di aggiunta e carrello laterale. Chiude con spedizioni, storia, contatti e pagine legali.

Questo progetto conserva quella navigazione rapida e il catalogo immediato, sostituendo l'estetica pop ad alto contrasto con una palette da carta, vetro e paesaggio. La struttura è pensata per l'enoteca: selezione per tipologia, dati di vitigno/regione/formato, una cassa tematica e un carrello persistente nel browser. Il checkout è esplicitamente simulato, così da non rappresentare come attivi servizi che devono ancora essere definiti.

## Avvio

Non servono dipendenze. Apri `index.html` in un browser oppure, dalla cartella del progetto, avvia un server statico:

```sh
python3 -m http.server 8000
```

Poi visita `http://localhost:8000`.

## Dove personalizzare

- `index.html`: struttura, testi, prodotti demo e segnaposto operativi.
- `styles.css`: palette, tipografia, layout e breakpoint responsive.
- `products.js`: catalogo di prodotti; è il solo file da modificare per nomi, prezzi e caratteristiche delle bottiglie.
- `app.js`: ricerca, filtri, carrello e riepilogo ordine.

### Aggiungere un prodotto

In `products.js`, copia uno dei blocchi compresi tra `{` e `}` e aggiornane i campi. L'`id` deve essere unico, `price` deve essere un numero senza simbolo `€`, e `color` può essere uno tra `red`, `brick`, `gold`, `amber`, `rose`, `lime`, `honey`, `forest` e `plum`. Le categorie attualmente disponibili sono `Rossi`, `Bianchi`, `Rosati`, `Bollicine`, `Dolci e meditazione` e `Aperitivo`.

Ogni prodotto include `producer` (produttore), `denomination` (denominazione), `vintage` (annata), `format` (formato della bottiglia) e `alcohol` (gradazione alcolica). Mantieni questi valori distinti: il sito li visualizza separatamente nella scheda. `note` resta disponibile per una breve annotazione, come affinamento o altra caratteristica utile.

Per collegare il sito a un e-commerce reale, sostituisci l'array `products` in `app.js` con dati da CMS/API e collega il pulsante di checkout a un provider di pagamento e a un backend per ordini, disponibilità e spedizioni.

## Nota legale e commerciale

Prima della pubblicazione inserire dati dell'attività, contatti, condizioni di vendita, privacy/cookie policy, regole di consegna, verifica dell'età e integrazioni di pagamento/spedizione reali.
