let url = "https://www.sadikturan.com";
let kursAdi1 = "Komple Web Geliştirme Kursu";

// 1- url kaç karakterlidir?

let url_uzunluk;
url_uzunluk = url.length;
console.log(url_uzunluk);

// 2- kursAdi kaç kelimeden oluşmaktadır?

let kursAdi_kelime;
kursAdi_kelime = kursAdi1.split(" ").length;
console.log(kursAdi_kelime);

// 3- url https ile mi başlıyor?

let url_https;
url_https = url.startsWith("https");
console.log(url_https);

// 4- kursAdi içerisinde eğitimi kelimesi var mı?

let kursAdi_Egitimi;
kursAdi_Egitimi = kursAdi1.includes("Eğitimi");
console.log(kursAdi_Egitimi);

// 5- url ve kursAdi değişkenlerini kullanarak aşağıdaki sring bilgiyi oluşturunuz.
    // https://www.sadikturan.com/komple-web-geliştirme-kursu

let kursadi = kursAdi1.toLowerCase();
let yeni_kursadi = kursadi.replaceAll(" ","-").replaceAll("ş" , "s");
console.log(yeni_kursadi);
let birlestir = `${url}/${yeni_kursadi}`;
console.log(birlestir);



