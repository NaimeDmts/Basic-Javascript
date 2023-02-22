let ogrenciler = ["çınar","yiğit","ada"];

let sonuc = ogrenciler.length;

// array to string
sonuc = ogrenciler.toString();
sonuc = ogrenciler.join(" ");
sonuc = ogrenciler.join("-");

// eleman silme
sonuc = ogrenciler.pop();               // son eleman silinir ve silinen eleman yazılır
sonuc = ogrenciler.shift();

// eleman ekleme
sonuc = ogrenciler.push("sena");        //dizinin sonuna eleman eklenir
sonuc = ogrenciler.unshift("naime"); 

console.log(sonuc);
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






