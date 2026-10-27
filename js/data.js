/* Ehl-i Kebap. Alle Inhalte nur hier pflegen.
   Quelle der Infos und der Speisekarte: ehli-kebap.de (Stand 25.10.2026), Tippfehler korrigiert, Mengen in Litern.
   DISHES: die fotografierten Gerichte (Shooting 25.10.2026). price: Text mit Euro oder null, wenn das Gericht
   nicht auf der bestehenden Karte steht. Annahme bis zur Freigabe: Tee 14 ist Grüner Tee, Tee 15 Lindenblütentee. */
window.INFO = {
  name: "Ehl-i Kebap",
  slogan: "Lezzetin manevi güvencesi",
  telefon: "030 98455364",
  telefonLink: "tel:+493098455364",
  strasse: "Gerichtstraße 45-46",
  ort: "13347 Berlin",
  karte: "https://maps.app.goo.gl/rnJmpAF9qQbVjjB96",
  zeiten: "Täglich 11 bis 24 Uhr",
  instagram: "https://www.instagram.com/ehlikebapberlin/",
  facebook: "https://www.facebook.com/ehlikebapberlin/",
  impressum: "https://ehli-kebap.de/impressum/",
  datenschutz: "https://ehli-kebap.de/datenschutz/"
};

window.DISHES = [
  { id: "koefte", de: "Köfte mit Käse", tr: "Kaşarlı Köfte", kurz: "Vom Grill, mit Ezme und Pommes", flat: "koefte", side: "koefte", price: null },
  { id: "garnelen", de: "Garnelen Teller", tr: "Karides", kurz: "Mit Kirschtomaten, Kräutern und Knoblauch", flat: "garnelen", side: "garnelen", price: null },
  { id: "fischplatte", de: "Spezial Fischplatte", tr: "Balık Tabağı", kurz: "Fisch, Lachs, Calamari, Garnelen", flat: "fischplatte", side: "fischplatte", price: null },
  { id: "dorade", de: "Dorade vom Grill", tr: "Çipura Izgara", kurz: "Ganz gegrillt, mit Zitrone", flat: "dorade", side: "dorade", price: null },
  { id: "wolfsbarsch", de: "Wolfsbarsch vom Grill", tr: "Levrek Izgara", kurz: "Ganz gegrillt, mit Rucola", flat: "wolfsbarsch", side: "wolfsbarsch", price: null },
  { id: "wolfsbarsch-offen", de: "Wolfsbarsch aufgeklappt", tr: "Kelebek Levrek", kurz: "Kross vom Grill", flat: "wolfsbarsch-offen", side: "wolfsbarsch-offen", price: null },
  { id: "lachsfilet", de: "Lachsfilet", tr: "Somon Izgara", kurz: "Mit Calamari und Spargel", flat: "lachsfilet", side: "lachsfilet", price: null },
  { id: "meerbarben", de: "Meerbarben", tr: "Barbunya Tava", kurz: "Knusprig gebraten", flat: "meerbarben", side: "meerbarben", price: null },
  { id: "beilagensalat", de: "Season Salat", tr: "Mevsim Salatası", kurz: "Bunt, frisch, mit Granatapfel", flat: "beilagensalat", side: "beilagensalat", price: "6,90 €" },
  { id: "gemuese", de: "Gebratenes Gemüse", tr: "Sebze Sote", kurz: "Brokkoli, Bohnen, Champignons", flat: "gemuese", side: "gemuese", price: null },
  { id: "rote-zwiebel-kartoffeln", de: "Bratkartoffeln mit Zwiebeln", tr: "Soğanlı Patates", kurz: "Mit roten Zwiebeln", flat: "rote-zwiebel-kartoffeln", side: "rote-zwiebel-kartoffeln", price: "5,90 €" },
  { id: "bratkartoffeln", de: "Bratkartoffeln", tr: "Kızarmış Patates", kurz: "Goldbraun aus der Pfanne", flat: "bratkartoffeln", side: "bratkartoffeln", price: null },
  { id: "rosmarin-kartoffeln", de: "Rosmarinkartoffeln", tr: "Biberiyeli Patates", kurz: "Mit Rosmarin und Pfeffer", flat: "rosmarin-kartoffeln", side: "rosmarin-kartoffeln", price: "5,90 €" },
  { id: "kuerbis-dessert", de: "Kabak Tatlısı", tr: "Kürbis Dessert", kurz: "Mit Sesampaste und Walnuss", flat: "kuerbis-dessert", side: "kuerbis-dessert", price: "5,00 €" },
  { id: "quitten-dessert", de: "Ayva Tatlısı", tr: "Quitten Dessert", kurz: "Mit Kaymak und Pistazie", flat: "quitten-dessert", side: "quitten-dessert", price: null },
  { id: "trilece", de: "Trileçe", tr: "Drei Milch Kuchen", kurz: "Mit Karamell", flat: "trilece", side: "trilece", price: null },
  { id: "baklava", de: "Baklava", tr: "Fıstıklı Baklava", kurz: "Mit Pistazie", flat: null, side: "baklava", price: null },
  { id: "kindermenue", de: "Kinderteller", tr: "Çocuk Menüsü", kurz: "Würstchen mit Pommes", flat: "kindermenue", side: "kindermenue", price: null },
  { id: "schwarztee", de: "Schwarztee aus der Türkei", tr: "Çaykur Rize Altınbaş", kurz: "In der Glaskanne", flat: "schwarztee", side: "schwarztee", price: "3,00 €" },
  { id: "kraeutertee", de: "Grüner Tee", tr: "Yeşil Çay", kurz: "In der Glaskanne", flat: "kraeutertee", side: "kraeutertee", price: "4,50 €" },
  { id: "fruechtetee", de: "Lindenblütentee", tr: "Ihlamur Çayı", kurz: "In der Glaskanne", flat: "fruechtetee", side: "fruechtetee", price: "4,50 €" },
  { id: "kamillentee", de: "Kamillentee", tr: "Papatya Çayı", kurz: "In der Glaskanne", flat: "kamillentee", side: "kamillentee", price: "4,50 €" },
  { id: "manuka", de: "Manuka Honig Tee", tr: "Manuka Ballı", kurz: "Mit Zitrone", flat: "manuka", side: "manuka", price: "7,00 €" },
  { id: "pfefferminze", de: "Pfefferminztee", tr: "Nane Çayı", kurz: "In der Glaskanne", flat: "pfefferminze", side: "pfefferminze", price: "4,50 €" },
  /* Shooting 27.10.2026 (Fotos 25 bis 34). Namen nach den Dateinamen und der bestehenden Karte, bis der Kunde sie freigibt. */
  { id: "kebab-taschen", de: "Kebab Taschen", tr: "Aus der Kupferpfanne", kurz: "Überbacken, mit Joghurt und gegrillter Peperoni", flat: "kebab-taschen", side: "kebab-taschen", price: null },
  { id: "kebab-taschen-adana", de: "Kebab Taschen Adana", tr: "Aus der Kupferpfanne", kurz: "Überbacken, mit Joghurt und gegrillter Peperoni", flat: "kebab-taschen-adana", side: "kebab-taschen-adana", price: null },
  { id: "sucuk-pide", de: "Sucuk Pide", tr: "Sucuklu Kaşarlı Pide", kurz: "Mit Knoblauchwurst und Edamer", flat: "sucuk-pide", side: "sucuk-pide", price: "10,00 €" },
  { id: "pide-kaese", de: "Käse Pide", tr: "Kaşarlı Pide", kurz: "Mit Edamer überbacken", flat: "pide-kaese", side: "pide-kaese", price: "6,90 €" },
  { id: "pide-hack", de: "Pide mit Hackfleisch", tr: "Kıymalı Pide", kurz: "Mit würzigem Hackfleisch", flat: "pide-hack", side: "pide-hack", price: "6,90 €" },
  { id: "pide-hack-kaese", de: "Pide mit Hackfleisch und Käse", tr: "Kıymalı Kaşarlı Pide", kurz: "Hackfleisch und Edamer", flat: "pide-hack-kaese", side: "pide-hack-kaese", price: "8,90 €" },
  { id: "adana-kebap", de: "Adana Kebap", tr: "Lammhackspieße", kurz: "Mit Bulgur, Ezme und gegrillter Tomate", flat: "adana-kebap", side: "adana-kebap", price: "16,90 €" },
  { id: "lamm-reis", de: "Lamm mit Reis", tr: "Vom Grill", kurz: "Mit Ezme, Zwiebelsalat und Tomate", flat: "lamm-reis", side: "lamm-reis", price: null },
  { id: "lamm-reis-geschnitten", de: "Lamm mit Reis, geschnitten", tr: "Rosa gebraten", kurz: "In Scheiben, mit Ezme und Reis", flat: "lamm-reis-geschnitten", side: "lamm-reis-geschnitten", price: null },
  { id: "vorspeisenplatte", de: "Vorspeisen Platte", tr: "Warm und knusprig", kurz: "İçli Köfte, Halloumi, Würstchen, Zwiebelringe", flat: "vorspeisenplatte", side: "vorspeisenplatte", price: null },
  /* Shooting 27.10.2026 (Fotos 35 bis 45). Zuordnung nach Aussehen und der echten Karte, bis der Kunde sie bestätigt. */
  { id: "karides-guvec", de: "Karides Güveç", tr: "Garnelen in der Tonschale", kurz: "Tomatensauce, Broccoli, Champignons, Paprika", flat: "karides-guvec", side: "karides-guvec", price: "24,90 €" },
  { id: "karides-guvec-ueberbacken", de: "Karides Güveç überbacken", tr: "Mit Käse überbacken", kurz: "Garnelen in Tomatensauce, goldbraun mit Edamer", flat: "karides-guvec-ueberbacken", side: "karides-guvec-ueberbacken", price: null },
  { id: "haehnchensuppe", de: "Hähnchensuppe", tr: "Tavuk Suyu", kurz: "Klar und kräftig, mit Karotte", flat: "haehnchensuppe", side: "haehnchensuppe", price: "6,00 €" },
  { id: "duerum-doener", de: "Dürüm Döner", tr: "Döner in der Teigrolle", kurz: "Mit Salat, Zwiebeln und Soße", flat: "duerum-doener", side: "duerum-doener", price: "9,90 €" },
  { id: "adana-duerum", de: "Adana Dürüm", tr: "Lammhackspieß im Brot", kurz: "Mit Salat und gegrillter Peperoni", flat: "adana-duerum", side: "adana-duerum", price: "10,90 €" },
  { id: "pide-pilz", de: "Pide mit Champignons", tr: "Mantarlı Kaşarlı Pide", kurz: "Frische Champignons und Edamer", flat: "pide-pilz", side: "pide-pilz", price: "8,00 €" },
  { id: "pide-salami", de: "Salami Pide", tr: "Salamlı Pide", kurz: "Mit Salami und Edamer", flat: "pide-salami", side: "pide-salami", price: "10,00 €" },
  { id: "pide-kusbasi", de: "Pide mit Rinderfilet", tr: "Kuşbaşılı Pide", kurz: "Rinderfiletgeschnetzeltes", flat: "pide-kusbasi", side: "pide-kusbasi", price: "14,90 €" },
  { id: "pide-doener", de: "Döner Pide", tr: "Döner Etli Pide", kurz: "Dönerfleisch und Edamer", flat: "pide-doener", side: "pide-doener", price: "13,90 €" },
  { id: "konya-etli-ekmek", de: "Konya Etli Ekmek", tr: "Nach Konya Art", kurz: "Grob gehacktes Fleisch auf dünnem Teig", flat: "konya-etli-ekmek", side: "konya-etli-ekmek", price: "7,90 €" },
  { id: "zwiebelringe", de: "Zwiebelringe", tr: "Soğan Halkası", kurz: "Knusprig frittiert, mit zwei Dips", flat: "zwiebelringe", side: "zwiebelringe", price: "7,00 €" }
];
window.DISH = (id) => window.DISHES.find((d) => d.id === id);

/* Hero (der eine 360 Grad Moment), Auswahl "Aus unserer Küche", Galerie Seitenansichten, Menüboard */
window.AUSWAHL = {
  hero: "koefte",
  kueche: ["garnelen", "fischplatte", "dorade", "lachsfilet", "kuerbis-dessert", "quitten-dessert"],
  galerie: ["koefte", "garnelen", "fischplatte", "dorade", "wolfsbarsch", "wolfsbarsch-offen", "lachsfilet", "meerbarben", "beilagensalat", "gemuese", "kuerbis-dessert", "quitten-dessert", "trilece", "baklava"],
  tee: ["schwarztee", "kraeutertee", "fruechtetee", "kamillentee", "manuka", "pfefferminze"]
};

/* Komplette Speisekarte von ehli-kebap.de. p: Liste aus [Zusatz, Preis]. foto: Gericht aus DISHES. */
window.KARTE = [
  { id: "suppen", name: "Suppen", tr: "Çorbalar", items: [
    { n: "Linsensuppe", tr: "Mercimek", p: [["", "6,00 €"]] },
    { n: "Hähnchensuppe", tr: "Tavuk Suyu", p: [["", "6,00 €"]], foto: "haehnchensuppe" },
    { n: "Pansensuppe", tr: "İşkembe", p: [["", "7,00 €"]] },
    { n: "Kopf- und Kollagensuppe", tr: "Kelle Paça", p: [["", "7,00 €"]] }
  ]},
  { id: "salate", name: "Salate", tr: "Salatalar", items: [
    { n: "Season Salat", p: [["", "6,90 €"]], foto: "beilagensalat" },
    { n: "Hirtensalat", tr: "Çoban Salata", p: [["klein", "3,50 €"], ["groß", "6,90 €"]] },
    { n: "Thunfischsalat", d: "Gemischter Salat mit Thunfisch", p: [["", "8,90 €"]] },
    { n: "Weißkäse Salat", d: "Gemischter Salat mit Weißkäse", p: [["", "8,90 €"]] },
    { n: "Caesar Salat", d: "Römersalat, Caesarsauce, Parmesan, Croutons, Pinienkerne", p: [["", "12,90 €"]] },
    { n: "Halloumi Salat", d: "Gemischter Salat mit Halloumi", p: [["", "10,90 €"]] },
    { n: "Caesar Hähnchensalat", d: "Hähnchenbrustfilet, Croutons, Parmesan, Pinienkerne, Trüffelöl", p: [["", "13,90 €"]] },
    { n: "Ehl-i Kebap Salat", d: "Mix Salat mit Rinderfiletstreifen, Croutons, Parmesan, Pinienkerne, Trüffelöl", p: [["", "14,90 €"]] },
    { n: "Caesar Garnelen Salat", d: "Garnelen, Croutons, Parmesan, Pinienkerne, Trüffelöl", p: [["", "14,90 €"]] }
  ]},
  { id: "vorspeisen", name: "Vorspeisen", tr: "Mezeler", items: [
    { n: "Tarator", d: "Möhren, Sahnejoghurt, Walnuss, Safran, Knoblauch", p: [["", "6,90 €"]] },
    { n: "Haydari", d: "Sahnejoghurt, Knoblauch, Dill, Weißkäse, Butter", p: [["", "6,90 €"]] },
    { n: "Hummus", d: "Kichererbsenpüree, Sesampaste, Olivenöl, Knoblauch", p: [["", "6,90 €"]] },
    { n: "Acı Ezme", tr: "Tartar scharf", d: "Tomaten, Petersilie, Paprikapüree, Chili", p: [["", "7,50 €"]] },
    { n: "Patlıcan Ezmesi", d: "Auberginenpaste, Knoblauch, Joghurt", p: [["", "7,50 €"]] },
    { n: "Cacık", tr: "Zaziki", d: "Joghurt mit Gurken, Dill, Minze, Knoblauch", p: [["", "6,90 €"]] },
    { n: "Karışık Meze für 2", d: "Gemischte Vorspeisen mit Ballonbrot", p: [["", "13,90 €"]] },
    { n: "Karışık Meze für 4", d: "Gemischte Vorspeisen mit zwei Ballonbroten", p: [["", "24,90 €"]] },
    { n: "Joghurt natur", tr: "Yoğurt", p: [["", "4,90 €"]] },
    { n: "Ballonbrot", tr: "Puf Ekmek", d: "Mit Dorfkäse und Butter", p: [["", "9,90 €"]] },
    { n: "Ballonbrot natur", tr: "Kuver", p: [["", "4,00 €"]] }
  ]},
  { id: "imbrot", name: "Im Brot", tr: "Ekmek Arası", items: [
    { n: "Sandwich Köfte", d: "Mit Zwiebeln, Römersalat und Tomaten", p: [["", "7,90 €"]] },
    { n: "Knoblauchwurst im Brot", d: "Nach Wunsch mit Römersalat und Soßen", p: [["", "7,90 €"]] },
    { n: "Döner Kebap im Brot", d: "Mit Salat und Soße", p: [["", "8,00 €"], ["groß", "10,00 €"]] },
    { n: "Dürüm Döner", d: "Döner in der Teigrolle mit Salat und Soße", p: [["", "9,90 €"], ["groß", "11,90 €"]], foto: "duerum-doener" },
    { n: "Adana Dürüm", d: "Lammhackspieße in der Teigrolle mit Salat und Soße", p: [["", "10,90 €"]], foto: "adana-duerum" },
    { n: "Tavuk Şiş Dürüm", d: "Hähnchenbrustfilet mit Salat in der Teigrolle", p: [["", "10,90 €"]] },
    { n: "Kuzu Şiş Dürüm", d: "Lammspieße mit Salat in der Teigrolle", p: [["", "11,90 €"]] },
    { n: "Kuzu Ciğer Şiş Dürüm", d: "Lammleber mit Salat in der Teigrolle", p: [["", "9,90 €"]] },
    { n: "Falafel im Brot", d: "Hausgemacht, vegetarisch, mit Salat und Soße", p: [["", "7,90 €"]] },
    { n: "Falafel Dürüm", d: "Hausgemacht, vegetarisch, mit Salat und Soße", p: [["", "8,90 €"]] },
    { n: "Halloumi im Brot", d: "Vegetarisch, mit Salat und Soße", p: [["", "8,90 €"]] },
    { n: "Halloumi Dürüm", d: "Vegetarisch, mit Salat und Soße", p: [["", "9,90 €"]] }
  ]},
  { id: "inegol", name: "İnegöl Köfte", tr: "Bouletten nach İnegöl Art", items: [
    { n: "İnegöl Köfte", d: "Bouletten, Bulgur, Zwiebeln, scharfe Chilisauce, gegrillte Peperoni und Tomaten", p: [["", "16,90 €"]] },
    { n: "Çökertme İnegöl Köfte", d: "Bouletten, Streichholzpommes, Knoblauchjoghurt, Tomatensauce, Butter", p: [["", "22,90 €"]] },
    { n: "İnegöl Köfte nach Kayhan Art", d: "Auf gerösteten Brotstücken, heiße Tomatensoße, Joghurt, Butternote", p: [["", "16,90 €"]] },
    { n: "İnegöl Köfte kiloweise", p: [["500 g", "24,90 €"], ["1000 g", "39,90 €"]] }
  ]},
  { id: "doener", name: "Döner", tr: "Döner Kebap", items: [
    { n: "Döner Kebap mit Reis", p: [["150 g", "14,90 €"], ["220 g", "20,90 €"]] },
    { n: "Döner Teller", d: "Mit Reis, Steak Pommes, gebratenen Tomaten und Peperoni", p: [["150 g", "17,50 €"], ["220 g", "24,90 €"]] },
    { n: "Bursa İskender Kebap", d: "Döner auf gerösteten Brotstücken, Tomatensoße, Joghurt, geschmolzene Butter", p: [["", "19,90 €"], ["1,5 Port.", "28,90 €"]] },
    { n: "Çökertme İskender Kebap", d: "Dönerfleisch, Streichholzpommes, Knoblauchjoghurt, Tomatensauce, Butter", p: [["", "22,90 €"]] },
    { n: "Dönerfleisch", d: "Mit gebratenen Tomaten und Peperoni", p: [["100 g", "8,00 €"], ["250 g", "18,50 €"], ["1000 g", "69,00 €"]] }
  ]},
  { id: "grill", name: "Grill", tr: "Izgara", items: [
    { n: "Hähnchenspieß", d: "Bulgur, scharfe Chilisauce, Zwiebeln, gegrillte Peperoni und Tomaten", p: [["", "16,90 €"], ["1,5 Port.", "24,90 €"]] },
    { n: "Chicken Wings", tr: "Hähnchenflügel", d: "Bulgur, scharfe Chilisauce, Zwiebeln, gegrillte Peperoni und Tomaten", p: [["", "16,90 €"], ["1,5 Port.", "24,90 €"]] },
    { n: "Hähnchensteak", d: "Bulgur, scharfe Chilisauce, Zwiebeln, gegrillte Peperoni und Tomaten", p: [["", "16,90 €"], ["1,5 Port.", "24,90 €"]] },
    { n: "Lammspieß", d: "Bulgur, scharfe Chilisauce, Zwiebeln, gegrillte Peperoni und Tomaten", p: [["", "22,90 €"], ["1,5 Port.", "33,90 €"]] },
    { n: "Lammleberspieß", d: "Zwiebeln, Bulgur, gegrillte Paprika und Tomaten", p: [["", "16,90 €"]] },
    { n: "Lammfleischspieß mit Joghurt", d: "Geröstete Brotstücke, Tomatensauce, Joghurt, Butter", p: [["", "24,90 €"]] },
    { n: "Adana Kebap", d: "Lammhackspieß, Bulgur, scharfe Chilisauce, gegrillte Peperoni und Tomaten", p: [["", "16,90 €"], ["1,5 Port.", "24,90 €"]], foto: "adana-kebap" },
    { n: "Adana Kebap mit Joghurt", d: "Lammhackspieß, geröstete Brotstücke, Tomatensauce, Joghurt, Butter", p: [["", "22,90 €"]] },
    { n: "Osmanlı Sucuk Teller", d: "Knoblauchwurst mit Zwiebeln, gebratenen Tomaten und Peperoni", p: [["", "16,90 €"]] },
    { n: "Lammrippchen", d: "Bulgur, scharfe Chilisauce, Zwiebeln, gegrillte Peperoni und Tomaten", p: [["", "22,90 €"], ["1,5 Port.", "33,90 €"]] },
    { n: "Ehl-i Kebap Beyti", d: "Lammhackspieße in der Teigrolle mit Tomatensauce und Joghurt", p: [["", "22,90 €"]] },
    { n: "Ehl-i Sac Tava", d: "Rinderfiletgeschnetzeltes mit Reis, Paprika, Knoblauch und Zwiebeln", p: [["", "24,90 €"]] },
    { n: "Lammkotelett", d: "Bulgur, scharfe Chilisauce, Zwiebeln, gegrillte Peperoni und Tomaten", p: [["", "24,90 €"], ["1,5 Port.", "37,90 €"]] },
    { n: "Gemischter Fleischteller", d: "Rindersteak, Lammkotelett, Lammspieß, Hähnchen, Lammhack, Fındık Lahmacun, Bulgur", p: [["1 Person", "29,90 €"], ["2 Personen", "59,00 €"]] },
    { n: "Ehl-i Kebap Spezial", d: "Fleischteller ohne Hähnchen, mit Bouletten und Fındık Lahmacun", p: [["1 Person", "37,90 €"], ["2 Personen", "75,00 €"]] },
    { n: "Ali Nazik aus der Lammkeule", d: "Auberginenpaste, Joghurt, Knoblauch, gebratene Peperoni und Tomaten", p: [["", "24,90 €"]] },
    { n: "Ali Nazik Hähnchen", d: "Hähnchenbrustfilet, Auberginenpaste, Joghurt, Knoblauch", p: [["", "19,90 €"]] },
    { n: "Ali Nazik Adana", d: "Lammhack, Auberginenpaste, Joghurt, Knoblauch", p: [["", "24,90 €"]] },
    { n: "Extra Pommes", p: [["", "3,00 €"]] }
  ]},
  { id: "kinder", name: "Kinder", tr: "Çocuk", items: [
    { n: "Kinder Döner Teller", d: "Pommes und Dönerfleisch", p: [["", "9,90 €"]] },
    { n: "Kinder Bouletten Teller", d: "Pommes und Bouletten", p: [["", "10,90 €"]] },
    { n: "Kinder Pasta", d: "Penne in Sahnesauce oder Tomatensauce", p: [["", "9,90 €"]] },
    { n: "Kinder Hamburger", d: "Hackfleisch", p: [["", "9,90 €"]] },
    { n: "Kinder Cheeseburger Steak", d: "Rinderfilet (Lokum)", p: [["", "14,90 €"]] }
  ]},
  { id: "burger", name: "Burger", tr: "Hamburger", items: [
    { n: "Hamburger", d: "Hackfleisch, dazu Steak Pommes oder Curly Fries", p: [["ca. 250 g", "15,90 €"]] },
    { n: "Cheeseburger Steak", d: "Dry Aged Rinderfilet, Cheddar, dazu Steak Pommes oder Curly Fries", p: [["ca. 200 g", "19,90 €"]] },
    { n: "Spezial Hamburger Steak", d: "Dry Aged Rinderfilet mit Trüffelöl, dazu Steak Pommes oder Curly Fries", p: [["ca. 200 g", "21,90 €"]] },
    { n: "Extra Bacon", p: [["", "4,50 €"]] },
    { n: "Extra Cheddar", p: [["", "2,50 €"]] },
    { n: "Zwiebelringe", p: [["", "7,00 €"]], foto: "zwiebelringe" }
  ]},
  { id: "steaks", name: "Steaks", tr: "Master & Special Cuts", items: [
    { n: "Tomahawk Steak", p: [["ca. 1 kg", "70,00 €"]] },
    { n: "Porterhouse Steak", p: [["ca. 750 g", "70,00 €"]] },
    { n: "T-Bone Steak", p: [["ca. 750 g", "65,00 €"]] },
    { n: "Chateaubriand", p: [["ca. 500 g", "70,00 €"], ["ca. 1000 g", "130,00 €"]] },
    { n: "Bone-In Steak", p: [["ca. 400 g", "45,00 €"]] },
    { n: "Lammkarree Rib", tr: "Kuzu Kafes", p: [["ca. 1,1 kg", "100,00 €"]] },
    { n: "Rinderfilet", tr: "Lokum", p: [["ca. 200 g", "30,00 €"], ["ca. 300 g", "40,00 €"]] },
    { n: "Entrecôte", p: [["ca. 300 g", "35,00 €"], ["ca. 500 g", "45,00 €"]] },
    { n: "Rumpsteak", p: [["ca. 300 g", "35,00 €"], ["ca. 500 g", "45,00 €"]] },
    { n: "Rumpsteak Parmesan", d: "Mit Parmesankruste und grünen Bohnen", p: [["ca. 300 g", "44,90 €"], ["ca. 500 g", "54,90 €"]] },
    { n: "Lammkarree", p: [["ca. 500 g", "55,00 €"]] },
    { n: "Lammfilet", tr: "Küşleme", p: [["ca. 300 g", "35,00 €"]] },
    { n: "Mix Grillteller", d: "Rinderfilet, Kalbsfilet, Hähnchenbrustfilet, Gemüse und Bratkartoffeln", p: [["", "38,90 €"]] },
    { n: "Gegrilltes Hähnchenbrustfilet", d: "Mit Champignonsauce und Bratkartoffeln", p: [["", "23,90 €"]] },
    { n: "Karides Güveç", d: "Garnelen in Tomatensahnesauce mit Broccoli, Champignons, Paprika und Knoblauch", p: [["", "24,90 €"]], foto: "karides-guvec" },
    { n: "Mix Beilagen und Saucen", d: "Ballonbrot, grüne Bohnen, Broccoli, Rosmarinkartoffeln, Kräuterbutter, Saucen", p: [["", "24,99 €"]] }
  ]},
  { id: "kalb", name: "Vom Kalb", tr: "Dana", items: [
    { n: "Gegrilltes Medaillon", d: "Mit gebratenem Gemüse und Rosmarinkartoffeln", p: [["ca. 200 g", "25,00 €"]] },
    { n: "Medaillon Gorgonzola", d: "Mit Gorgonzolasauce und Rosmarinkartoffeln", p: [["ca. 200 g", "26,90 €"]] },
    { n: "Medaillon Rahmspinat", d: "Mit Rahmspinat und Rosmarinkartoffeln", p: [["ca. 200 g", "26,90 €"]] },
    { n: "Medaillon Grüner Pfeffer", d: "Mit tasmanischem Bergpfeffer und Rosmarinkartoffeln", p: [["ca. 200 g", "26,90 €"]] },
    { n: "Medaillon Steinpilze", d: "Steinpilze, Bacon und Trüffelöl", p: [["ca. 200 g", "30,00 €"]] }
  ]},
  { id: "beilagen", name: "Beilagen", tr: "Garnitür", items: [
    { n: "Rosmarinkartoffeln", p: [["", "5,90 €"]], foto: "rosmarin-kartoffeln" },
    { n: "Bratkartoffeln mit Zwiebeln", p: [["", "5,90 €"]], foto: "rote-zwiebel-kartoffeln" },
    { n: "Kartoffelpüree", p: [["", "6,90 €"], ["mit Trüffelöl", "12,90 €"]] },
    { n: "Gebratener Broccoli", p: [["", "5,90 €"]] },
    { n: "Grüne Bohnen", p: [["", "4,90 €"]] },
    { n: "Gebratene Steinpilze", p: [["", "5,90 €"]] },
    { n: "Steak Pommes", p: [["", "5,00 €"]] },
    { n: "Süßkartoffel Pommes", p: [["", "6,90 €"]] },
    { n: "Streichholz Pommes", tr: "Kibrit Patates", p: [["", "7,00 €"]] },
    { n: "Curly Fries", p: [["", "6,00 €"]] },
    { n: "Reis", tr: "Pirinç Pilavı", p: [["", "4,50 €"]] },
    { n: "Bulgur", p: [["", "4,50 €"]] },
    { n: "İçli Köfte", d: "1 Stück", p: [["", "3,00 €"]] },
    { n: "Champignonsauce", p: [["", "5,90 €"]] },
    { n: "Gorgonzolasauce", p: [["", "5,90 €"]] },
    { n: "Grüne Pfeffersauce", p: [["", "5,90 €"]] },
    { n: "BBQ Sauce", p: [["", "5,90 €"]] },
    { n: "Chimichurri", p: [["", "4,90 €"]] },
    { n: "Kräuterbutter", p: [["", "3,90 €"]] },
    { n: "Scharfe Paprika gegrillt", p: [["", "5,00 €"]] },
    { n: "Gegrillte Paprika oder Tomaten", p: [["", "2,00 €"]] },
    { n: "Zwiebeln, Petersilie, Tomatenscheiben", p: [["je", "2,00 €"]] },
    { n: "Dorfkäse oder Butter", p: [["je", "2,00 €"]] },
    { n: "Fladenbrot oder Lavaş", p: [["je", "1,00 €"]] }
  ]},
  { id: "pasta", name: "Pasta", tr: "Taze Makarna", items: [
    { n: "Tagliolini", d: "Sahnesauce, Parmesan", p: [["", "12,00 €"]] },
    { n: "Tagliolini Rinderfilet", d: "Mit Sahnesauce oder Gorgonzolasauce", p: [["", "18,00 €"]] },
    { n: "Tagliolini Hähnchen", d: "Hähnchenbruststreifen, Champignons, Sahnesauce, Parmesan", p: [["", "16,00 €"]] },
    { n: "Spaghetti Bolognese", d: "Bolognese und Parmesan", p: [["", "15,00 €"]] },
    { n: "Spaghetti Napoli", d: "Tomatensauce und Parmesan", p: [["", "10,00 €"]] },
    { n: "Penne", d: "Sahnesauce, Parmesan", p: [["", "10,00 €"]] },
    { n: "Penne Pollo", d: "Hähnchenbruststreifen, Champignons, Sahnesauce, Parmesan", p: [["", "14,90 €"]] },
    { n: "Penne Ehli", d: "Rinderfiletstreifen, Broccoli, Zucchinisahnesauce, Parmesan", p: [["", "18,90 €"]] },
    { n: "Penne Gorgonzola", d: "Gorgonzolasauce, Parmesan", p: [["", "13,90 €"]] }
  ]},
  { id: "pide", name: "Lahmacun & Pide", tr: "Fırından", items: [
    { n: "Lahmacun", d: "Natur, mit Salat und Soße, oder mit Dönerfleisch", p: [["natur", "2,50 €"], ["mit Salat", "3,50 €"], ["mit Döner", "9,50 €"]] },
    { n: "Fındık Lahmacun", d: "5 Stück", p: [["", "7,90 €"]] },
    { n: "Konya Etli Ekmek", d: "Nach Konya Art mit grob gehacktem Fleisch", p: [["1 Stück", "7,90 €"], ["1,5 Stück", "11,90 €"]], foto: "konya-etli-ekmek" },
    { n: "Kıymalı Pide", d: "Mit Hackfleisch", p: [["", "6,90 €"]], foto: "pide-hack" },
    { n: "Kaşarlı Pide", d: "Mit Edamer", p: [["", "6,90 €"]], foto: "pide-kaese" },
    { n: "Kıymalı Kaşarlı Pide", d: "Mit Hackfleisch und Edamer", p: [["", "8,90 €"]], foto: "pide-hack-kaese" },
    { n: "Döner Etli Pide", d: "Mit Dönerfleisch und Edamer", p: [["", "13,90 €"]], foto: "pide-doener" },
    { n: "Sucuklu Kaşarlı Pide", d: "Mit Knoblauchwurst und Edamer", p: [["", "10,00 €"]], foto: "sucuk-pide" },
    { n: "Mantarlı Kaşarlı Pide", d: "Mit frischen Champignons und Edamer", p: [["", "8,00 €"]], foto: "pide-pilz" },
    { n: "Kuşbaşılı Pide", d: "Mit Rinderfiletgeschnetzeltem", p: [["", "14,90 €"]], foto: "pide-kusbasi" },
    { n: "Salamlı Pide", d: "Mit Salami und Edamer", p: [["", "10,00 €"]], foto: "pide-salami" },
    { n: "Bio Ei nach Wunsch", p: [["", "1,50 €"]] }
  ]},
  { id: "veggie", name: "Vegetarisch", tr: "Vejetaryen", items: [
    { n: "Falafel Teller", d: "Hausgemacht, mit Pommes, Salat und Hummus", p: [["", "11,90 €"]] },
    { n: "Halloumi Teller", d: "Mit Pommes, Salat und Hummus", p: [["", "11,90 €"]] },
    { n: "Falloumi Teller", d: "Falafel und Halloumi mit Pommes, Salat und Hummus", p: [["", "14,90 €"]] }
  ]},
  { id: "desserts", name: "Desserts", tr: "Tatlılar", items: [
    { n: "Kabak Tatlısı", d: "Kürbis Dessert mit Sesampaste und Walnuss", p: [["", "5,00 €"]], foto: "kuerbis-dessert" },
    { n: "Fırın Sütlaç", d: "Überbackener Milchreis", p: [["", "5,00 €"]] },
    { n: "Künefe", p: [["", "6,90 €"], ["mit Kaymak", "8,00 €"], ["mit Maraş Eis", "9,90 €"]] },
    { n: "Havuç Dilimi", d: "Baklava in Form einer Karotte", p: [["", "6,90 €"], ["mit Eis", "9,90 €"]] },
    { n: "Soğuk Baklava", d: "Kaltes Baklava mit Milch und Pistazien", p: [["", "6,90 €"], ["mit Eis", "9,90 €"]] },
    { n: "Maraş Dondurma", d: "Eis", p: [["", "3,00 €"]] }
  ]},
  { id: "heiss", name: "Heiße Getränke", tr: "Sıcak İçecekler", items: [
    { n: "Türkischer Tee", p: [["klein", "1,00 €"], ["groß", "2,00 €"]] },
    { n: "Schwarztee aus der Türkei", tr: "Çaykur Rize Altınbaş", p: [["", "3,00 €"]], foto: "schwarztee" },
    { n: "Grüner Tee", tr: "Yeşil Çay", p: [["", "4,50 €"]], foto: "kraeutertee" },
    { n: "Pfefferminztee", tr: "Nane Çayı", p: [["", "4,50 €"]], foto: "pfefferminze" },
    { n: "Lindenblütentee", tr: "Ihlamur Çayı", p: [["", "4,50 €"]], foto: "fruechtetee" },
    { n: "Kamillentee", tr: "Papatya Çayı", p: [["", "4,50 €"]], foto: "kamillentee" },
    { n: "Manuka Honig Tee", p: [["", "7,00 €"]], foto: "manuka" },
    { n: "Türk Kahvesi", p: [["", "2,00 €"]] },
    { n: "Espresso", p: [["", "2,10 €"]] },
    { n: "Kaffee Crema oder Americano", p: [["", "2,20 €"]] },
    { n: "Cappuccino oder Espresso Macchiato", p: [["", "2,80 €"]] },
    { n: "Latte Macchiato oder Milchkaffee", p: [["", "3,80 €"]] },
    { n: "Filterkaffee", p: [["", "3,90 €"]] },
    { n: "Heiße Schokolade", p: [["", "3,50 €"]] }
  ]},
  { id: "kalt", name: "Kalte Getränke", tr: "Soğuk İçecekler", items: [
    { n: "Ayran", p: [["0,2 l", "2,50 €"], ["0,4 l", "4,00 €"]] },
    { n: "Limonade hausgemacht", p: [["0,25 l", "2,50 €"]] },
    { n: "Orangensaft oder Apfelsaft", p: [["0,2 l", "2,50 €"], ["0,4 l", "4,00 €"]] },
    { n: "Şalgam Suyu", tr: "Rübensaft", p: [["0,33 l", "3,00 €"]] },
    { n: "Türk Soda", p: [["0,2 l", "2,50 €"]] },
    { n: "Wasser still oder sprudelnd", p: [["0,25 l", "2,50 €"], ["0,75 l", "5,90 €"]] },
    { n: "fritz-kola, Super Zero, Mischmasch", p: [["0,2 l", "2,50 €"], ["0,33 l", "3,50 €"]] },
    { n: "fritz-limo Orange oder Honigmelone", p: [["0,2 l", "2,50 €"], ["0,33 l", "3,50 €"]] },
    { n: "fritz-spritz Bio Apfelschorle", p: [["0,2 l", "2,50 €"], ["0,33 l", "3,50 €"]] },
    { n: "Elephant Bay Cola, Cola Zero, Limonaden", p: [["0,33 l", "3,50 €"]] },
    { n: "Eistee Zitrone oder Pfirsich", d: "Franz Rauch oder Elephant Bay", p: [["0,33 l", "3,50 €"]] },
    { n: "Cola Turka", p: [["0,3 l", "3,00 €"]] },
    { n: "Uludağ Gazoz, auch Zero", p: [["0,33 l", "3,00 €"]] },
    { n: "Spezi Original", p: [["0,5 l", "3,50 €"]] },
    { n: "Spezi Energy oder Club-Mate", p: [["0,33 l", "3,50 €"]] },
    { n: "Christinen Multivitamin", p: [["0,33 l", "3,50 €"]] },
    { n: "Ginger Ale", d: "Thomas Henry", p: [["0,2 l", "3,00 €"]] },
    { n: "Capri-Sun Safari Fruits", p: [["0,2 l", "1,50 €"]] }
  ]},
  { id: "cocktails", name: "Cocktails & Frozen", tr: "Kokteyller", items: [
    { n: "Mojito", d: "Minze, Zitrone, Zucker, Mineralwasser", p: [["", "8,50 €"]] },
    { n: "Afifa Sling", d: "Beeren, süß und sauer", p: [["", "9,90 €"]] },
    { n: "Alaya Lahab", d: "Maracuja und Kirsche mit Limette", p: [["", "9,90 €"]] },
    { n: "Halal Colada", d: "Ananas und Kokos", p: [["", "9,90 €"]] },
    { n: "Ehli Squash", d: "Maracujasaft, Limejuice, Ginger Ale", p: [["", "9,90 €"]] },
    { n: "Coco Dream", d: "Ananassaft, Kirschsaft, Kokossirup", p: [["", "9,90 €"]] },
    { n: "Frozen Erdbeer Daiquiri", d: "Frische Erdbeeren, Vanille, Limette", p: [["", "8,50 €"]] },
    { n: "Frozen Pfirsich", d: "Reife Pfirsiche, Zitrone, Grenadine, Ahornsirup", p: [["", "8,50 €"]] },
    { n: "Frozen Honigmelone", p: [["", "8,50 €"]] },
    { n: "Frozen Wassermelone", p: [["", "8,50 €"]] },
    { n: "Frozen Mix", d: "Erdbeere, Honigmelone, Wassermelone, Pfirsich", p: [["", "10,00 €"]] }
  ]}
];

/* Galerie: Gruppen für den Filter. Reihenfolge der Gerichte wie hier. kiFlat: Draufsicht ist KI erzeugt (es gibt kein Flatlay Foto). */
window.GALERIE = {
  gruppen: [
    { id: "fisch", name: "Fisch & Meer", ids: ["fischplatte", "dorade", "wolfsbarsch", "wolfsbarsch-offen", "lachsfilet", "meerbarben", "garnelen", "karides-guvec", "karides-guvec-ueberbacken"] },
    { id: "grill", name: "Vom Grill", ids: ["koefte", "adana-kebap", "lamm-reis", "lamm-reis-geschnitten", "kebab-taschen", "kebab-taschen-adana", "duerum-doener", "adana-duerum", "kindermenue"] },
    { id: "pide", name: "Pide", ids: ["sucuk-pide", "pide-kaese", "pide-hack", "pide-hack-kaese", "pide-pilz", "pide-salami", "pide-kusbasi", "pide-doener", "konya-etli-ekmek"] },
    { id: "beilagen", name: "Beilagen & Vorspeisen", ids: ["vorspeisenplatte", "haehnchensuppe", "zwiebelringe", "beilagensalat", "gemuese", "rote-zwiebel-kartoffeln", "bratkartoffeln", "rosmarin-kartoffeln"] },
    { id: "desserts", name: "Desserts", ids: ["kuerbis-dessert", "quitten-dessert", "trilece", "baklava"] },
    { id: "tee", name: "Tee", ids: ["schwarztee", "kraeutertee", "fruechtetee", "kamillentee", "manuka", "pfefferminze"] }
  ],
  kiFlat: ["schwarztee", "kraeutertee", "fruechtetee", "kamillentee", "manuka", "pfefferminze"]
};

/* Downloads der Galerie: PNG mit Transparenz in voller Auflösung (4800 px), je Bild und als ZIP. Die Dateien liegen als GitHub Release
   "fotos" (Entwurf bis zur Freigabe, Anleitung im README). Erst wenn das Release veröffentlicht ist, aktiv auf true setzen.
   Zum Ansehen vorab: galerie.html?dl=1 */
window.DOWNLOADS = {
  aktiv: false,
  basis: "https://github.com/nadercbz/ehli-kebap/releases/download/fotos/",
  zip: { colorgraded: "ca. 1,0 GB", original: "ca. 0,5 GB" }
};
