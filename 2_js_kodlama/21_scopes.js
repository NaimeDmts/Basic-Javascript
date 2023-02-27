var isim21 = "Naime";
const adress21 ="İstanbul";
adress21 ="Kocaeli";

function yazdir21(){
    var isim21 = "Yavuzhan";
    var yas = 25;
    console.log("Function scope:", isim21, yas);
}
yazdir21();
console.log(isim21);

if(true){
    var isim21 = "Damataşı";
    console.log(isim21);
}

console.log(isim21);
if(true){
    let cinsiyet = "Erkek";
    let isim21 = "Tepebaşı";
    console.log(isim21);
}
console.log(isim21);
// console.log(cinsiyet);