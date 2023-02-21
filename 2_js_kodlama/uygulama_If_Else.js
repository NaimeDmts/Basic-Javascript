// 1- Bir sayının 10-50 arasında olup olmadığını kontrol ediniz.

let sayi = 20;
if(sayi>10 && sayi<50){
    console.log("Sayı 10-50 arasındadır.");
}
else{
    console.log("Sayı 10-50 arasında değildir.");
}

// 2- Bir sayının pozitif tek sayı olup olmadığını kontrol ediniz.

if(sayi > 0){
    console.log("Sayı pozitiftir.");
}
else{
    console.log("Sayı negatiftir.");
}

// 3- x, y, z sayılarının büyüklük karşılaştırmasını yapınız.

let x = 10 , y = 15, z = 25;

if(x > y && x > z ){
    console.log("x en büyük sayı");
}
else if(y > x && y > z ){
    console.log("y en büyük sayı");
}
else if(z > x && z > y){
    console.log("z en büyük sayı");
}

// 4- 2 vize ve 1 final notuna göre hesaplanan ortalama için;
    // a- Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın.
    // b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.
    // c-Finalden 70 alındığında ortalama 50'nin altında  olsa bile dersten geçilsin.

let vize1 = 70, vize2 = 65, final = 50, 
ortalama = (vize1 + vize2 + final)/3;

if((ortalama >=50 && final >= 50)|| final == 70){
    console.log("Geçti");
}
else{
    console.log("Kaldı");
}