let sonuc_11;

let gorevlistesi11 = [
    {"id": 1, "gorevAdi":"Görev 1", "durum": "completed"},
    {"id": 2, "gorevAdi":"Görev 2", "durum": "pending"},
    {"id": 3, "gorevAdi":"Görev 3", "durum": "pending"},
    {"id": 4, "gorevAdi":"Görev 4", "durum": "pending"},
];

let editId;
let isEditTask = false;
const newInput = document.querySelector("#txtTaskName");
const btnClear = document.querySelector("#btnClear");


displayTask();

function displayTask(){
    ul = document.getElementById("task-list");
    ul.innerHTML="";

    if(gorevlistesi11.length == 0){
        ul.innerHTML="<p class='p-3 m-0'>Görev Listeniz Boş.</p>"
    }else{
        for(let gorev11 of gorevlistesi11 ){
            
            let completed = gorev11.durum == "completed" ? "checked" :"";
            let li = `
                <li class="task list-group-item"> 
                     <div class="form-check">
                         <input type="checkbox" onclick="updateStatus(this)" id="${gorev11.id}" class="form-check-input" ${completed}>
                         <label for="${gorev11.id}" class="form-check-label ${completed}"> ${gorev11.gorevAdi}</label>
                     </div>  
                     <div class="dropdown">
    
                    <div class="dropdown">
                        <button class="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-ellipsis"></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a onclick="deletTask(${gorev11.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash-can"></i> Sil </a></li>
                            <li><a onclick='editTask(${gorev11.id},"${gorev11.gorevAdi}")' class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Düzenle </a></li>
                        </ul>
                    </div>                     
                </li>
             `
            ul.insertAdjacentHTML("beforeend", li)
        }
    }

   
}

document.querySelector("#btnAddNewTask").addEventListener("click", newTask);
document.querySelector("#btnAddNewTask").addEventListener("keypress", function(){

    if(event.key == "Enter"){
        document.getElementById("#btnAddNewTask").click;
    }

});

function newTask(event){

   if(newInput.value ==""){
        alert ("Görev girmelisiniz!");
    }else{
        if(!isEditTask){
            gorevlistesi11.push({"id": gorevlistesi11.length + 1, "gorevAdi":newInput.value});
        }else{
            for(let editGorev of gorevlistesi11){
                if(editGorev.id == editId){
                    editGorev.gorevAdi = newInput.value;
                }
            }
            isEditTask = false;
        }
        
        newInput.value="";
        displayTask();
    }   

    event.preventDefault();
}

function deletTask(id){

    let silId;
     for(let index11 in gorevlistesi11){
       if(gorevlistesi11[index11].id == id){
            silId = index11;
        }
    }

    gorevlistesi11.splice(silId , 1);
    displayTask();

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
    gorevlistesi11.splice(0, gorevlistesi11.length);
    displayTask();
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

    for(let grv of gorevlistesi11){
        if(grv.id == selectedTask.id){
            grv.durum = durum;
        }
    }
console.log(gorevlistesi11);
}
