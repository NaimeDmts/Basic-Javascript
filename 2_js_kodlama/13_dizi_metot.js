let ogrenciler = ["çınar","yiğit","ada"];

let sonuc2 = ogrenciler.length;

// array to string
sonuc2 = ogrenciler.toString();
sonuc2 = ogrenciler.join(" ");
sonuc2 = ogrenciler.join("-");

// eleman silme
sonuc2 = ogrenciler.pop();               // son eleman silinir ve silinen eleman yazılır
sonuc2 = ogrenciler.shift();

// eleman ekleme
sonuc2 = ogrenciler.push("sena");        //dizinin sonuna eleman eklenir
sonuc2 = ogrenciler.unshift("naime"); 

console.log(sonuc2);
console.log(ogrenciler);

let markalar1 = ["mazda","toyota"];
let markalar2 = ["opel","renault"];
let markalar3 = ["mercedes"];

let araba = markalar1.concat(markalar3);
console.log(araba);

let arabalar = markalar1.splice(0, 0, markalar2);
console.log(arabalar);
console.log(markalar1);

let arabalar1 = markalar1.splice(0, 1, "bwm", "audi");
console.log(arabalar1);
console.log(markalar1);






