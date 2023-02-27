let sayilar18 = [1,5,7,15,3,25,12,24];

// 1- sayilar listesindeki her bir elemanın karesini yazdırınız.
for(let kare of sayilar18){
    console.log(Math.pow(kare , 2));
}

// 2- sayilar listesindeki hangi sayılar 5' in katıdır?
for(let beskat of sayilar18){
    console.log( beskat%5==0 );
}

// 3- sayilar listesindeki çift sayıların toplamını bulunuz.
let ciftsayi = 0;
for(let cift of sayilar18){
    if(cift%2==0){
       console.log(ciftsayi +=cift);
    }
    
}

let urunler18 = ["iphone 12","samsung s22","iphone 13","samsung s23","samsung s20"];
// 4- urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.
for(let buyuk in urunler18){
    console.log(urunler18[buyuk].toUpperCase());
    urunler18[buyuk].toLowerCase();
}

// 5- urunler listesinde samsung geçen kaç ürün vardır?
let stopla = 0;
for(let samsung of urunler18){
    if(samsung.includes("samsung")){
        console.log( stopla++);
        
    }
}


let ogrenciler18 = [
    {"ad":"yiğit", "soyad": "bilgi", "notlar": [60,70,60]},
    {"ad":"ada", "soyad": "bilgi", "notlar": [80,70,80]},
    {"ad":"çınar", "soyad": "turan", "notlar": [10,0,60]}
];
// 6- ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.

for(let ogr18 of ogrenciler18){
    let ogr18_not_toplam = 0;
    let ogr18_ortalama = 0;
    let ogr18_adet = 0;
   
    for(let ogr18_notlar of ogr18.notlar){
        ogr18_not_toplam += ogr18_notlar;
        ogr18_adet++;
    }
    ogr18_ortalama = ogr18_not_toplam / ogr18_adet;
   
    console.log(`${ogr18.ad} ${ogr18.soyad}: ${ogr18_ortalama}. `);
    if(ogr18_ortalama >= 50){
        console.log("Başarılı");
    }
    else{
        console.log("Başarısız");
    }
}
