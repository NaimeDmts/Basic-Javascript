let simdi = new Date(); // şimdiki tarih - saat 

// Get Metot
sonuc = simdi;
sonuc = simdi.getDate();        // gün
sonuc = simdi.getDay();         // 0: pazar 1: pazartesi ... 6: cumartesi
sonuc = simdi.getFullYear();    // yıl
sonuc = simdi.getHours();       // saat
sonuc = simdi.getTime();        

console.log(sonuc);
console.log(typeof sonuc);

// Set Metot

simdi.setFullYear(2025);
simdi.setMonth(7);              // 0: Ocak
simdi.setDate(15);
gitTarih = simdi;

console.log(gitTarih);
console.log(typeof gitTarih);

simdi.setFullYear(2023);
let dogumTarihi = new Date(1996, 10, 27);
yas = simdi.getFullYear() - dogumTarihi.getFullYear();

console.log(yas);
console.log(typeof yas);

let milisecond = simdi - dogumTarihi;
let saniye = milisecond / 1000;
let dakika = saniye / 60;
let saat = dakika / 60;
let gun = saat / 24;

console.log(milisecond);
console.log(saniye);
console.log(dakika);
console.log(saat);
console.log(gun);