function selamlama(){
    console.log("merhaba");
}

selamlama();
selamlama();
selamlama();
selamlama();

function selamlasma(msg){
    console.log(msg);
}

selamlasma("merhabalar");
selamlasma("selam");
selamlasma("iyi günler");
selamlasma();

function yasHesapla(dogumyili){
    //console.log(new Date().getFullYear() - dogumyili);
    return new Date().getFullYear() - dogumyili;
}
console.log(yasHesapla(1996));
let yasYavuzhan = yasHesapla(1997);
console.log(yasYavuzhan);

function emeklilikeKacYilKaldi(dogumyili, isim){
    let yas19 = yasHesapla(dogumyili);
    let kalan_sene = 58 - yas19;

    if(kalan_sene > 0){
        console.log(`${isim}, emekliliğinize ${kalan_sene} sene kaldı.`);
    }
    else{
        console.log("zaten emekli oldunuz.");
    }
}
emeklilikeKacYilKaldi(1996 , "Naime");
emeklilikeKacYilKaldi(1960 , "Naim");
