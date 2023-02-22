let kursAdi = "Komple Uygulamalı Web Geliştirme Eğitimi";

let sonuc;

sonuc = kursAdi.toLowerCase();
sonuc = kursAdi.toUpperCase();

sonuc = kursAdi.length;

sonuc = kursAdi[0];

sonuc = kursAdi.slice(0 , 18);
sonuc = kursAdi.slice(7);
sonuc = kursAdi.slice(-7);
sonuc = kursAdi.slice(-18 , -7);

sonuc = kursAdi.substring(0,6);
sonuc = kursAdi.substring(6);

sonuc = kursAdi.replace("Eğitimi","Kursu");

sonuc = kursAdi.trim();
sonuc = kursAdi.trimEnd();
sonuc = kursAdi.trimStart();

sonuc = kursAdi.indexOf("Komple");
sonuc = kursAdi.split(" ");
sonuc = kursAdi.split(" ")[0];
sonuc = kursAdi.split(" ")[4];

console.log(sonuc);