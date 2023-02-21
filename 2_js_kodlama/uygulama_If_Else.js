// 1- Bir sayının 10-50 arasında olup olmadığını kontrol ediniz.

let sayi = 21;
if(sayi>10 && sayi<50){
    console.log("Sayı 10-50 arasındadır.");
}
else{
    console.log("Sayı 10-50 arasında değildir.");
}

// 2- Bir sayının pozitiftek sayı olup olmadığını kontrol ediniz.

if(sayi > 0 && sayi%2 == 1){
    console.log("Sayı pozitiftir tek sayıdır");
}
else{
    console.log("Sayı pozitif çift sayıdır");
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
else{
    console.log("Sayılar eşit");
}

// 4- 2 vize ve 1 final notuna göre hesaplanan ortalama için;
    // a- Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın.
    // b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.
    // c-Finalden 70 alındığında ortalama 50'nin altında  olsa bile dersten geçilsin.

let vize1 = 70, vize2 = 65, final = 50, 
ortalama = (((vize1 + vize2)/2)*0.4) + final*0.6;
console.log("Ortalamanız:" + ortalama);
if((ortalama >=50 && final >= 50)|| final >= 70){
    console.log("Geçti");
}
else{
    console.log("Kaldı");
}