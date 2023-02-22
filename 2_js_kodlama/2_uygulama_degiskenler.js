/*
1- İki öğrencinin aşağıdaki bilgilerini değişkenler içerisinde saklayınız.
    Öğrenci 1:
        isim                : ada bilgi
        doğum tarihi        : 2012
        matematik notları   : 70, 70, 80

    Öğrenci 1:
        isim                : yiğit bilgi
        doğum tarihi        : 2010
        matematik notları   : 40, 40, 50

2- Öğrencilerin yaş bilgilerini değişkende tutunuz.
3- Öğrencilerin ders ortalama notonu değişkende saklayınız.
4- Öğrencilerin 50 geçme notuna göre başarı durumlarını değişkende saklayınız.
*/

let ogr1_Ad = "Ada";
let ogr1_dogumTarihi = "2012";
let ogr1_matematik1 = 70;
let ogr1_matematik2 = 70;
let ogr1_matematik3 = 80;

let ogr_Soyad = "Bilgi";

let ogr2_Ad = "Yiğit";
let ogr2_dogumTarihi = "2010";
let ogr2_matematik1 = 40;
let ogr2_matematik2 = 40;
let ogr2_matematik3 = 50;

let suankiYil = new Date().getFullYear();

let ogr1_yas = suankiYil - parseInt(ogr1_dogumTarihi);
console.log(ogr1_yas);

let ogr2_yas = suankiYil - parseInt(ogr2_dogumTarihi);
console.log(ogr2_yas);

let ogr1_ortalama = (ogr1_matematik1 + ogr1_matematik2 + ogr1_matematik3) / 3;
console.log(parseFloat(ogr1_ortalama));

let ogr2_ortalama = (ogr2_matematik1 + ogr2_matematik2 + ogr2_matematik3) / 3;
console.log(parseFloat(ogr2_ortalama));

console.log(ogr1_ortalama >= 50);

console.log(ogr2_ortalama >= 50);


