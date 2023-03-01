let sonuc_10;

let gorevlistesi10 = [
    {"id": 1, "gorevAdi":"Görev 1"},
    {"id": 2, "gorevAdi":"Görev 2"},
    {"id": 3, "gorevAdi":"Görev 3"},
    {"id": 4, "gorevAdi":"Görev 4"},
];

let editId;
let isEditTask = false;
const newInput = document.querySelector("#txtTaskName");
const btnClear = document.querySelector("#btnClear");


displayTask();

function displayTask(){
    ul = document.getElementById("task-list");
    ul.innerHTML="";

    if(gorevlistesi10.length == 0){
        ul.innerHTML="<p class='p-3 m-0'>Görev Listeniz Boş.</p>"
    }else{
        for(let gorev10 of gorevlistesi10 ){

            let li = `
                <li class="task list-group-item"> 
                     <div class="form-check">
                         <input type="checkbox" id="${gorev10.id}" class="form-check-input">
                         <label for="${gorev10.id}" class="form-check-label"> ${gorev10.gorevAdi}</label>
                     </div>  
                     <div class="dropdown">
    
                    <div class="dropdown">
                        <button class="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-ellipsis"></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a onclick="deletTask(${gorev10.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash-can"></i> Sil </a></li>
                            <li><a onclick='editTask(${gorev10.id},"${gorev10.gorevAdi}")' class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Düzenle </a></li>
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
            gorevlistesi10.push({"id": gorevlistesi10.length + 1, "gorevAdi":newInput.value});
        }else{
            for(let editGorev of gorevlistesi10){
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
     for(let index10 in gorevlistesi10){
       if(gorevlistesi10[index10].id == id){
            silId = index10;
        }
    }

    gorevlistesi10.splice(silId , 1);
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
    gorevlistesi10.splice(0, gorevlistesi10.length);
    displayTask();
});
