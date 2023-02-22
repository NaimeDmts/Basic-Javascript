let ad = "Naime";
let soyadi = "Damataşı";
let yasim = 26;
let sehir = "İstanbul";

let mesaj = "Benim adım " + ad + " ve soyadım " + soyadi + ". " + sehir + "'da yaşıyorum. " + "Emekliliğime " + (65-yasim) + " yıl kaldı.";

//bactick
mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'da yaşıyorum.  Emekliliğime ${65-yasim} yıl kaldı.`;

// ternary operators
let emeklilik = (65 - yasim > 0) ? "Emekliliğime " + (65-yasim) + " yıl kaldı." : "Zaten emekli oldunuz.";
mesaj = `Benim adım ${ad} ve soyadım ${soyadi}. ${sehir}'da yaşıyorum. ${emeklilik}`;

console.log(mesaj);

