let sonuc_5;

let gorevlistesi5 = [
    {"id": 1, "gorevAdi":"Görev 1"},
    {"id": 2, "gorevAdi":"Görev 2"},
    {"id": 3, "gorevAdi":"Görev 3"},
    {"id": 4, "gorevAdi":"Görev 4"},
];

ul = document.getElementById("task-list");

for(let gorev5 of gorevlistesi5 ){

    let li = `
        <li class="task list-group-item"> 
            <div class="form-check">
                <input type="checkbox" id="${gorev5.id}" class="form-check-input">
                <label for="${gorev5.id}" class="form-check-label"> ${gorev5.gorevAdi}</label>
            </div>                        
        </li>
    `
    ul.insertAdjacentHTML("beforeend", li)
}

// document.querySelector("#task-list").remove();
// document.querySelector("#task-list").parentElement.remove();

// document.querySelector("#task-list").children[0].remove();
// document.querySelector("#task-list").children[1].remove();

// document.querySelector("#task-list").removeAttribute("class");

// sonuc_5 = document.querySelector("#task-list").children[1].getAttribute("class");
// sonuc_5 = document.querySelector("#task-list").children[1].setAttribute("class", "aaa");
sonuc_5 = document.querySelector("#task-list").children[1].classList.add("bg-danger");
// sonuc_5 = document.querySelector("#task-list").children[1].classList.remove("bg-danger");
sonuc_5 = document.querySelector("#task-list").children[1].classList.contains("bg-danger");

console.log(sonuc_5);



