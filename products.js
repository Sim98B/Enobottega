/*
  CATALOGO PRODOTTI — Enobottega Amiata

  Per aggiungere una bottiglia, copia un blocco tra { } e compilane i campi.
  Mantieni l'id unico e usa un prezzo come numero, senza il simbolo €.

  Categorie disponibili nel menu: Rossi, Bianchi, Rosati, Bollicine,
  Dolci e meditazione, Aperitivo.

  Colori disponibili per l'illustrazione della bottiglia: red, brick, gold,
  amber, rose, lime, honey, forest, plum.
*/
const products = [
  {
    id: 'donna_claudia_la_ciarliana',
    name: 'Donna Claudia',
    category: 'Rosati',
    region: 'Toscana',
    producer: 'La Ciarliana',
    denomination: 'IGT',
    variety: 'Sangiovese',
    vintage: '2025',
    format: '750 ml',
    alcohol: '12.5%',
    price: 19,
    color: 'rose',
    note: 'Prodotto dimostrativo'
  },
  {
    id: 'rosso_di_montepulciano_la_ciarliana',
    name: 'Rosso di Montepulciano',
    category: 'Rossi',
    region: 'Toscana',
    producer: 'La Ciarliana',
    denomination: 'Rosso di Montepulciano DOC',
    variety: 'Merlot',
    vintage: '2024',
    format: '750 ml',
    alcohol: '13.5%',
    price: 19,
    color: 'brick',
    note: 'Prodotto dimostrativo'
  },
  {
    id: 'nobile_di_montepulciano_la_ciarliana',
    name: 'Vino Nobile di Montepulciano',
    category: 'Rossi',
    region: 'Toscana',
    producer: 'La Ciarliana',
    denomination: 'Vino Nobile di Montepulciano DOCG',
    variety: 'Sangiovese',
    vintage: '2021',
    format: '750 ml',
    alcohol: '14.5%',
    price: 24,
    color: 'red',
    note: 'Prodotto dimostrativo'
  },
  {
    id: 'santo_pellegrino_la_ciarliana',
    name: 'Santo Pellegrino',
    category: 'Rossi',
    region: 'Toscana',
    producer: 'La Ciarliana',
    denomination: 'IGT',
    variety: 'Sangiovese, Shyraz, Merlot, Cabernet Sauvignon',
    vintage: '2019',
    format: '750 ml',
    alcohol: '14%',
    price: 36,
    color: 'red',
    note: 'Prodotto dimostrativo'
  },
  {
    id: 'chianti_ravazzi',
    name: 'Chianti',
    category: 'Rossi',
    region: 'Toscana',
    producer: 'Ravazzi',
    denomination: 'Chianti DOCG',
    variety: 'Sangiovese, Ciliegiolo, Canaiolo Nero',
    vintage: '2025',
    format: '750 ml',
    alcohol: '13%',
    price: 14,
    color: 'brick',
    note: 'Prodotto dimostrativo'
  },
  {
    id: 'borioso_chianti_riserva_ravazzi',
    name: 'Borioso Chianti Riserva',
    category: 'Rossi',
    region: 'Toscana',
    producer: 'Ravazzi]',
    denomination: 'Chianti DOCG',
    variety: 'Sangiovese, Canaiolo Nero',
    vintage: '2022',
    format: '750 ml',
    alcohol: '13.5%',
    price: 20,
    color: 'red',
    note: 'Prodotto dimostrativo'
  },
  {
    id: 'prezioso_ravazzi',
    name: 'Prezioso',
    category: 'Rossi',
    region: 'Toscana',
    producer: 'Ravazzi',
    denomination: 'IGT',
    variety: 'Sangiovese, Merlot',
    vintage: '2022',
    format: '750 ml',
    alcohol: '15%',
    price: 40,
    color: 'red',
    note: 'brick'
  },
  {
    id: 'iroso_ravazzi',
    name: 'Iroso',
    category: 'Rossi',
    region: 'Toscana',
    producer: 'Ravazzi',
    denomination: 'IGT',
    variety: 'Sangiovese, Merlot, Cabernet Sauvignon',
    vintage: '2023',
    format: '750 ml',
    alcohol: '14%',
    price: 25,
    color: 'brick',
    note: 'Prodotto dimostrativo'
  },
  {
    id: 'smorfiosa_ravazzi',
    name: 'Smorfiosa',
    category: 'Bianchi',
    region: 'Toscana',
    producer: 'Ravazzi',
    denomination: 'IGT',
    variety: 'Vermentino, Viognier, Malvasia',
    vintage: '2025',
    format: '750 ml',
    alcohol: '12.5%',
    price: 19,
    color: 'amber',
    note: 'Prodotto dimostrativo'
  },
  {
    id: 'smorfiosa_in_rosa_ravazzi',
    name: 'Smorfiosa in Rosa',
    category: 'Rosati',
    region: 'Toscana',
    producer: 'Ravazzi',
    denomination: 'IGT',
    variety: 'Sangiovese, Viognier',
    vintage: '2025',
    format: '750 ml',
    alcohol: '12.5%',
    price: 19,
    color: 'rose',
    note: 'Prodotto dimostrativo'
  }
];
