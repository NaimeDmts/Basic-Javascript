let sonuc_12;

let gorevlistesi12 = [
    {"id": 1, "gorevAdi":"Görev 1", "durum": "completed"},
    {"id": 2, "gorevAdi":"Görev 2", "durum": "pending"},
    {"id": 3, "gorevAdi":"Görev 3", "durum": "pending"},
    {"id": 4, "gorevAdi":"Görev 4", "durum": "pending"},
];

let editId;
let isEditTask = false;
const newInput = document.querySelector("#txtTaskName");
const btnClear = document.querySelector("#btnClear");
const filters =document.querySelectorAll(".filters span");


displayTask(document.querySelector("span.active").id);

function displayTask(filter){
    ul = document.getElementById("task-list");
    ul.innerHTML="";

    if(gorevlistesi12.length == 0){
        ul.innerHTML="<p class='p-3 m-0'>Görev Listeniz Boş.</p>"
    }else{
        for(let gorev12 of gorevlistesi12 ){
            
            let completed = gorev12.durum == "completed" ? "checked" :"";

            if(filter == gorev12.durum || filter == "all"){
                let li = `
                    <li class="task list-group-item"> 
                        <div class="form-check">
                            <input type="checkbox" onclick="updateStatus(this)" id="${gorev12.id}" class="form-check-input" ${completed}>
                            <label for="${gorev12.id}" class="form-check-label ${completed}"> ${gorev12.gorevAdi}</label>
                        </div>  
                        <div class="dropdown">
    
                        <div class="dropdown">
                            <button class="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                             <i class="fa-solid fa-ellipsis"></i>
                         </button>
                         <ul class="dropdown-menu">
                             <li><a onclick="deletTask(${gorev12.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash-can"></i> Sil </a></li>
                             <li><a onclick='editTask(${gorev12.id},"${gorev12.gorevAdi}")' class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Düzenle </a></li>
                          </ul>
                        </div>                     
                    </li>
                `
                ul.insertAdjacentHTML("beforeend", li)
            }
          
        }
    }

   
}

document.querySelector("#btnAddNewTask").addEventListener("click", newTask);
document.querySelector("#btnAddNewTask").addEventListener("keypress", function(){
    if(event.key == "Enter"){
        document.getElementById("#btnAddNewTask").click;
    }
});

for(let span of filters){
    span.addEventListener("click", function(){
        document.querySelector("span.active").classList.remove("active");
        span.classList.add("active");
        displayTask(span.id);
    })
}

function newTask(event){

   if(newInput.value ==""){
        alert ("Görev girmelisiniz!");
    }else{
        if(!isEditTask){
            gorevlistesi12.push({"id": gorevlistesi12.length + 1, "gorevAdi":newInput.value});
        }else{
            for(let editGorev of gorevlistesi12){
                if(editGorev.id == editId){
                    editGorev.gorevAdi = newInput.value;
                }
            }
            isEditTask = false;
        }
        
        newInput.value="";
        displayTask(document.querySelector("span.active").id);
    }   

    event.preventDefault();
}

function deletTask(id){

    let silId;
     for(let index12 in gorevlistesi12){
       if(gorevlistesi12[index12].id == id){
            silId = index12;
        }
    }

    gorevlistesi12.splice(silId , 1);
    displayTask(document.querySelector("span.active").id);

}

function editTask(taskId, taskName){

    editId = taskId;
    isEditTask = true;
    newInput.value = taskName;
    newInput.focus();
    newInput.classList.add("active");

    console.log("Edit Id:" + editId);
    console.log("Durum:" + isEditTask);
}

btnClear.addEventListener("click", function(){
    gorevlistesi12.splice(0, gorevlistesi12.length);
    displayTask("all");
});

function updateStatus(selectedTask){
    // console.log(selectedTask);
    // console.log(selectedTask.parentElement.lastElementChild);

    let label = selectedTask.nextElementSibling;
    let durum;
    if(selectedTask.checked){
        label.classList.add("checked");
        durum = "completed";
    }else{
        label.classList.remove("checked");
        durum = "pending";
    }

    for(let grv of gorevlistesi12){
        if(grv.id == selectedTask.id){
            grv.durum = durum;
        }
    }

}
