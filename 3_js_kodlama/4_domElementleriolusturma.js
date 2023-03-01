let sonuc_4;

// let gorevlistesi = ["Görev 1", "Görev 2", "Görev 3"];

let gorevlistesi = [
    {"id": 1, "gorevAdi":"Görev 1"},
    {"id": 2, "gorevAdi":"Görev 2"},
    {"id": 3, "gorevAdi":"Görev 3"},
    {"id": 4, "gorevAdi":"Görev 4"},
];

ul = document.getElementById("task-list");

// let count = ul.children.length;

// for(let index4 in gorevlistesi ){

// let li = `
//     <li class="task list-group-item"> 
//         <div class="form-check">
//             <input type="checkbox" id="${index4 + 1}" class="form-check-input">
//             <label for="${index4 + 1}" class="form-check-label"> ${gorevlistesi[index4]}</label>
//         </div>                        
//     </li>
// `
// ul.insertAdjacentHTML("beforeend", li)
// }
for(let gorev4 of gorevlistesi ){

    let li = `
        <li class="task list-group-item"> 
            <div class="form-check">
                <input type="checkbox" id="${gorev4.id}" class="form-check-input">
                <label for="${gorev4.id}" class="form-check-label"> ${gorev4.gorevAdi}</label>
            </div>                        
        </li>
    `
    ul.insertAdjacentHTML("beforeend", li)
    }
// console.log(li);