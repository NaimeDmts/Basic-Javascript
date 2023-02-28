let sonuc_3;

ul = document.getElementById("task-list");

//children

sonuc_3 = ul.children;
sonuc_3 = ul.children[0];

//firstElementChild, lastElementChild

sonuc_3 = ul.firstElementChild;
sonuc_3 = ul.lastElementChild;

// parentElement
sonuc_3 = document.getElementById("title").parentElement;

//nextElementSibling
sonuc_3 = document.querySelector(".task").nextElementSibling;
sonuc_3 = document.querySelector(".task").nextElementSibling.nextElementSibling;

//previousElementSibling
sonuc_3 = document.querySelector(".task").nextElementSibling.previousElementSibling;

sonuc_3 = ul.children;
ul.children[0].children[0].children[0].checked = true;
ul.children[0].nextElementSibling.children[0].children[0].checked = true;
ul.children[0].nextElementSibling.nextElementSibling.children[0].children[0].checked = true;


 
console.log(sonuc_3);  