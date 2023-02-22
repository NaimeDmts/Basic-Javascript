let ad = "Naime";
let soyad = "Damataşı";
let yas = 26;
let sehir = "İstanbul";

let mesaj = "Benim adım " + ad + " ve soyadım " + soyad + ". " + sehir + "'da yaşıyorum. " + "Emekliliğime " + (65-yas) + " yıl kaldı.";

//bactick
mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'da yaşıyorum.  Emekliliğime ${65-yas} yıl kaldı.`;

// ternary operators
let emeklilik = (65 - yas > 0) ? "Emekliliğime " + (65-yas) + " yıl kaldı." : "Zaten emekli oldunuz.";
mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'da yaşıyorum. ${emeklilik}`;

console.log(mesaj);

