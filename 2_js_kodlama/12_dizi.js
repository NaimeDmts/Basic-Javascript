let urun1 = "iphone 12";
let urun2 = "iphone 13";
let urun3 = "iphone 13 pro";

let urunler = ["iphone 12","iphone 13","iphone 13 pro"];
let fiyatlar = [9000, 12000, 20000];
let renkler = ["gold","siyah","beyaz"];

console.log(urunler[0]);
console.log(urunler[1]);
console.log(urunler[2]);

console.log(`${urunler[0]} - ${fiyatlar[0]} - ${renkler[0]}`);
console.log(`${urunler[1]} - ${fiyatlar[1]} - ${renkler[1]}`);
console.log(`${urunler[2]} - ${fiyatlar[2]} - ${renkler[2]}`);

let kursAdi = "Komple Web Geliştirme Eğitimi";
console.log(kursAdi[5]);

let urunler1 = ["iphone 12", 9000, "gold"];

let urunler2 = [];
urunler2[0] = "iphone 13";
urunler2[1] = 12000;
urunler2[2] = "siyah";

let urunler3 = [
    "iphone 13 pro",
     20000, 
     "beyaz"
    ];

urunler3[2] = "mavi";

let urunler4 = [
    "iphone 13 pro",
     20000, 
     ["beyaz", "siyah" ,"mavi"]
];

console.log(urunler4[2]);
console.log(urunler4[2][0]);
console.log(urunler4[2][1]);
console.log(urunler4[2][2]);

console.log(typeof urunler4[2]);

console.log(kursAdi.split(" "));
console.log(kursAdi.split(" ")[3]);
