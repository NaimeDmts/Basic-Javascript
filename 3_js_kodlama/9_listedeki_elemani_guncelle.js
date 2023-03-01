let sonuc_9;

let gorevlistesi9 = [
    {"id": 1, "gorevAdi":"Görev 1"},
    {"id": 2, "gorevAdi":"Görev 2"},
    {"id": 3, "gorevAdi":"Görev 3"},
    {"id": 4, "gorevAdi":"Görev 4"},
];

let editId;
let isEditTask = false;
let newInput = document.querySelector("#txtTaskName");


displayTask();

function displayTask(){
    ul = document.getElementById("task-list");
    ul.innerHTML="";

    for(let gorev9 of gorevlistesi9 ){

        let li = `
            <li class="task list-group-item"> 
                 <div class="form-check">
                     <input type="checkbox" id="${gorev9.id}" class="form-check-input">
                     <label for="${gorev9.id}" class="form-check-label"> ${gorev9.gorevAdi}</label>
                 </div>  
                 <div class="dropdown">

                <div class="dropdown">
                    <button class="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa-solid fa-ellipsis"></i>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a onclick="deletTask(${gorev9.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash-can"></i> Sil </a></li>
                        <li><a onclick='editTask(${gorev9.id},"${gorev9.gorevAdi}")' class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Düzenle </a></li>
                    </ul>
                </div>                     
            </li>
         `
        ul.insertAdjacentHTML("beforeend", li)
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
            gorevlistesi9.push({"id": gorevlistesi9.length + 1, "gorevAdi":newInput.value});
        }else{
            for(let editGorev of gorevlistesi9){
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
     for(let index9 in gorevlistesi9){
       if(gorevlistesi9[index9].id == id){
            silId = index9;
        }
    }

    gorevlistesi9.splice(silId , 1);
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

