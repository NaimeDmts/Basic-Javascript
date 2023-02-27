console.log(1);
console.log(2);
console.log(3);
//..
console.log(100);

for(let i=0; i<10; i++){
    console.log(i);
}

let toplam_i = 0;

for(let j=0; j<=10; j++){

    toplam_i += j;
    console.log(toplam_i);

}

console.log(toplam_i);

let sayilar17 = [1,4,5,8,4,3];

console.log(sayilar17[0] + sayilar17[1] + sayilar17[2] + sayilar17[3] + sayilar17[4] + sayilar17[5]);

let toplam17 = 0 ;

for(let k = 0; k< sayilar17.length; k++){

    toplam17 += sayilar17[k];

}

console.log(toplam17);

let toplam_17 = 0;

for(let l in sayilar17){

    toplam_17 +=sayilar17[l];

}

console.log(toplam_17);

let toplam_m = 0;

for(let m of sayilar17){

    toplam_m += m;
    
}

console.log(toplam_m);

let user17 = {

    "name": "Naime Damataşı",
    "username": "Ndmts",
    "password": "1234",
    "email":"info@naimedmts.com"
    
};

for(let key in user17){

    console.log(key);
    console.log(user17[key]);

}