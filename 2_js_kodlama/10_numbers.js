let sonuc1;

sonuc1 = 10;
sonuc1 = "10";
sonuc1 = Number("10");
sonuc1 = parseInt("10.6");
sonuc1 = parseFloat("10.6");
sonuc1 = parseInt("10a");
sonuc1 = parseInt("a10");

sonuc1 = isNaN("10a");
sonuc1=isNaN("10");

let say = 15.12345667;
sonuc1 = say.toPrecision(5);
sonuc1 = say.toFixed(5);

sonuc1 = Math.round(2.4);
sonuc1 = Math.round(2.6);
sonuc1 = Math.ceil(2.2);
sonuc1 = Math.floor(2.6);
sonuc1 = Math.sqrt(25);
sonuc1 = Math.pow(2,3);
sonuc1 = Math.abs(-10);
sonuc1 = Math.min(4,6,8,3,9);
sonuc1 = Math.max(4,6,8,3,9);
sonuc1= Math.random()*10;
sonuc1 = Math.floor(Math.random()*10);
sonuc1 = Math.floor(Math.random()*10) + 1;
sonuc1 = Math.floor(Math.random()*100) + 50;

console.log(typeof sonuc1);
console.log(sonuc1);