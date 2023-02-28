let sonuc_1;

sonuc_1 = document.getElementById("title");
sonuc_1 = document.getElementById("title").id;
sonuc_1 = document.getElementById("title").className;
sonuc_1 = document.getElementById("title").classList;

document.getElementById("title").style.fontSize = "30px";
document.getElementById("title").style.color = "green";
// document.getElementById("title").style.display = "none";
document.getElementById("title").innerText = "Todo App";
document.getElementById("title").innerHTML = "<p>Todo App</p>";

sonuc_1 = document.querySelector("#title");
sonuc_1 = document.querySelector(".card-header");
sonuc_1 = document.querySelector("div"); 

sonuc_1 = document.querySelector("li");
sonuc_1 = document.querySelector("li:first-child");
sonuc_1 = document.querySelector("li:last-child");
sonuc_1 = document.querySelector("li:nth-child(1)");
sonuc_1 = document.querySelector("li:nth-child(2)");








console.log(sonuc_1);