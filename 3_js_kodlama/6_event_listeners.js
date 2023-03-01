//let btnEkle = 
// document.querySelector("#btnAddNewTask").addEventListener("click", function(event){
//     console.log("click event: Ekle");
//     event.preventDefault();

// });
// document.querySelector("#btnClear").addEventListener("click", function(event){
//     console.log("click event: Sil");
//     event.preventDefault();
// });

document.querySelector("#btnAddNewTask").addEventListener("click", newTask);

function newTask(event){
    // console.log("click event: Ekle");
    // console.log(event.target);
    console.log(event.target.classList.add("btn-lg"));
    event.preventDefault();
}

// btnEkle.addEventListener("click", function(event){
//     console.log("click event");
//     event.preventDefault();
// });

