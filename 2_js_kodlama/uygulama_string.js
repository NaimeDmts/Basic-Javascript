let url = "https://www.sadikturan.com/";
let kursAdi = "Komple Web Geliştirme Kursu";

// 1- url kaç karakterlidir?

let url_uzunluk;
url_uzunluk = url.length;
console.log(url_uzunluk);

// 2- kursAdi kaç kelimeden oluşmaktadır?

let kursAdi_kelime;
kursAdi_kelime = kursAdi.split(" ");
console.log(kursAdi_kelime);

// 3- url https ile mi başlıyor?

let url_https;
url_https = url.slice(0,5)== "https" ? "true":"false";
console.log(url_https);

// 4- kursAdi içerisinde eğitimi kelimesi var mı?

let kursAdi_Egitimi;
kursAdi_Egitimi = kursAdi.includes("Eğitimi");
console.log(kursAdi_Egitimi);

// 5- url ve kursAdi değişkenlerini kullanarak aşağıdaki sring bilgiyi oluşturunuz.
    // https://www.sadikturan.com/komple-web-geliştirme-kursu

let kursadi = kursAdi.toLowerCase();
let yeni_kursadi = kursadi.replace(/ /g,"-");
console.log(yeni_kursadi);
let birlestir = url+yeni_kursadi;
console.log(birlestir);



