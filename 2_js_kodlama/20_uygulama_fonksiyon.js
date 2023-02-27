// 1- Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yapınız.
function Belirt(kelime20, kackez20){
   for(let i20 = 0;i20 < kackez20; i20++){
        console.log(kelime20);
    }
}
Belirt("Sev", 5);

// 2- Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız.
function alanCevre(a ,b){
    let alan20 = a * b;
    let cevre20 = (a+b)*2;
    return `Alan: ${alan20} çevre: ${cevre20}`;
}
console.log(alanCevre(10,30));

// 3- Yazı tura uygulamasını fonksiyon kullanarak yapınız.
function yaziTura(){
    let random = Math.random();
    if(random<0.5){
        console.log("Yazı");
    }else{
        console.log("Tura");
    }
}
yaziTura();

// 4- Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu yazınız.
function tamBolen(sayi20){
    let sayilar20 = [];
    for(let i_20 =2; i_20< sayi20;i_20++){
        if(sayi20 %i_20 ==0){
            sayilar20.push(i_20);
        }
    }
    return sayilar20;
}
console.log(tamBolen(20));

// 5- Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız.
function degiskenTopla(){
    let degiskenSonuc = 0;
    for (let d = 0; d <arguments.length; d++){
        degiskenSonuc +=arguments[d];
    }
    return degiskenSonuc;
}
console.log(degiskenTopla(2,5,7));
console.log(degiskenTopla(2,5,7,15));