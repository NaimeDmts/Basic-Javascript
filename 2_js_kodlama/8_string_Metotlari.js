let kursAdi = "Komple Uygulamalı Web Geliştirme Eğitimi";

let sonucu;

sonucu = kursAdi.toLowerCase();
sonucu = kursAdi.toUpperCase();

sonucu = kursAdi.length;

sonucu = kursAdi[0];

sonucu = kursAdi.slice(0 , 18);
sonucu = kursAdi.slice(7);
sonucu = kursAdi.slice(-7);
sonucu = kursAdi.slice(-18 , -7);

sonucu = kursAdi.substring(0,6);
sonucu = kursAdi.substring(6);

sonucu= kursAdi.replace("Eğitimi","Kursu");

sonucu = kursAdi.trim();
sonucu = kursAdi.trimEnd();
sonucu = kursAdi.trimStart();

sonucu = kursAdi.indexOf("Komple");
sonucu = kursAdi.split(" ");
sonuc = kursAdi.split(" ")[0];
sonucu = kursAdi.split(" ")[4];

console.log(sonucu);