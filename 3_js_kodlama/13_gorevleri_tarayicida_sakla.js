let sonuc_13;

let gorevlistesi13 = [];

if(localStorage.getItem("gorevListesi13") !== null){
    gorevlistesi13 = JSON.parse(localStorage.getItem("gorevListesi13"));
}

let editId;
let isEditTask = false;
const newInput = document.querySelector("#txtTaskName");
const btnClear = document.querySelector("#btnClear");
const filters =document.querySelectorAll(".filters span");

displayTask(document.querySelector("span.active").id);

function displayTask(filter){
    ul = document.getElementById("task-list");
    ul.innerHTML="";

    if(gorevlistesi13.length == 0){
        ul.innerHTML="<p class='p-3 m-0'>Görev Listeniz Boş.</p>"
    }else{
        for(let gorev13 of gorevlistesi13 ){
            
            let completed = gorev13.durum == "completed" ? "checked" :"";

            if(filter == gorev13.durum || filter == "all"){
                let li = `
                    <li class="task list-group-item"> 
                        <div class="form-check">
                            <input type="checkbox" onclick="updateStatus(this)" id="${gorev13.id}" class="form-check-input" ${completed}>
                            <label for="${gorev13.id}" class="form-check-label ${completed}"> ${gorev13.gorevAdi}</label>
                        </div>  
                        <div class="dropdown">
    
                        <div class="dropdown">
                            <button class="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                             <i class="fa-solid fa-ellipsis"></i>
                         </button>
                         <ul class="dropdown-menu">
                             <li><a onclick="deletTask(${gorev13.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash-can"></i> Sil </a></li>
                             <li><a onclick='editTask(${gorev13.id},"${gorev13.gorevAdi}")' class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Düzenle </a></li>
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

            gorevlistesi13.push({"id": gorevlistesi13.length + 1, "gorevAdi":newInput.value, "durum":"pending"});

        }else{
            for(let editGorev of gorevlistesi13){
                if(editGorev.id == editId){
                    editGorev.gorevAdi = newInput.value;
                }
            }
            isEditTask = false;
        }
        
        newInput.value="";
        displayTask(document.querySelector("span.active").id);
        localStorage.setItem("gorevListesi13", JSON.stringify(gorevlistesi13));
    }   
    event.preventDefault();
}

function deletTask(id){

    let silId;
     for(let index13 in gorevlistesi13){
       if(gorevlistesi13[index13].id == id){
            silId = index13;
        }
    }
    gorevlistesi13.splice(silId , 1);
    displayTask(document.querySelector("span.active").id);
    localStorage.setItem("gorevListesi13", JSON.stringify(gorevlistesi13));
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
    gorevlistesi13.splice(0, gorevlistesi13.length);
    localStorage.setItem("gorevListesi13", JSON.stringify(gorevlistesi13));
    displayTask("all");
});

function updateStatus(selectedTask){

    let label = selectedTask.nextElementSibling;
    let durum;
    if(selectedTask.checked){
        label.classList.add("checked");
        durum = "completed";
    }else{
        label.classList.remove("checked");
        durum = "pending";
    }

    for(let grv of gorevlistesi13){
        if(grv.id == selectedTask.id){
            grv.durum = durum;
        }
    }

    displayTask(document.querySelector("span.active").id);
    localStorage.setItem("gorevListesi13", JSON.stringify(gorevlistesi13));
}
