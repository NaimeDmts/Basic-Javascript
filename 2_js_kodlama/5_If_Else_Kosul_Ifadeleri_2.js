// yas >= 18
// mezuniyet == "lise" ya da mezuniyet == "üniversite"

let yasi = 20;
let mezuniyet = "Üniversite";

if(yasi >= 18 && (mezuniyet == "lise" || mezuniyet == "Üniversite")){
    console.log("Ehliyet alabilir.")
}
else{
    console.log("Ehliyet şartları tutmuyor.")
}
// and
// true , true => true
// true , false => false

// or 
// true , true => true
// true , false => true
// false , false => false