// 1- "Elma, Armut, Muz, Çilek" elemanlarına sahip bir dizi oluşturunuz.

let meyva = ["Elma","Armut","Muz","Çilek"];
console.log(meyva);

// 2- Dizi kaç elemanlıdır?

let meyvasayi = meyva.length;
console.log(meyvasayi);

//3- Dizinin ilk ve son elemanı nedir?

let meyva_ilk = meyva[0];
let meyva_son = meyva[meyva.length-1];
console.log(meyva_ilk +" , " +meyva_son);

//4- Elma dizinin bir elemanı mıdır?
let elma_elemanimi = meyva.includes("Elma");
console.log(elma_elemanimi);

//5- Kiraz meyvesini listenin sonuna ekleyiniz.
let yeni_meyva = meyva.push("Kiraz");
console.log(meyva);

//6- Dizinin son iki elemanını siliniz.

//meyva.pop();
//meyva.pop();
meyva.splice(meyva.length-2, 2);
console.log(meyva);

//7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.

let ogr1 = ["Yiğit", "Bilgi", 2010, [70,60,80]];
let ogr2 = ["Ada", "Bilgi", 2012, [60,60,70]];
let ogr3 = ["Naime", "Damataşı", 1996, [90,90,80]];
let simdiyil = new Date();

let ogr1_yas = simdiyil.getFullYear() - ogr1[2];
console.log(ogr1_yas);
let ogr2_yas = simdiyil.getFullYear() - ogr2[2];
console.log(ogr2_yas);
let ogr3_yas = simdiyil.getFullYear() - ogr3[2];
console.log(ogr3_yas);

let ogrenciler_not = [ogr1 ,ogr2,ogr3];
let ogr1_orta = (ogr1[3][0]+ogr1[3][1] + ogr1[3][2])/3;
let ogr2_orta = (ogr2[3][0]+ogr2[3][1] + ogr2[3][2])/3;
let ogr3_orta = (ogr3[3][0]+ogr3[3][1] + ogr3[3][2])/3;
console.log(ogr1_orta.toFixed(1), ogr2_orta.toFixed(1), ogr3_orta.toFixed(1) );






