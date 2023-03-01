let sonuc_8;

let gorevlistesi8 = [
    {"id": 1, "gorevAdi":"Görev 1"},
    {"id": 2, "gorevAdi":"Görev 2"},
    {"id": 3, "gorevAdi":"Görev 3"},
    {"id": 4, "gorevAdi":"Görev 4"},
];

displayTask();

function displayTask(){
    ul = document.getElementById("task-list");
    ul.innerHTML="";

    for(let gorev8 of gorevlistesi8 ){

        let li = `
            <li class="task list-group-item"> 
                 <div class="form-check">
                     <input type="checkbox" id="${gorev8.id}" class="form-check-input">
                     <label for="${gorev8.id}" class="form-check-label"> ${gorev8.gorevAdi}</label>
                 </div>  
                 <div class="dropdown">

                <div class="dropdown">
                    <button class="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa-solid fa-ellipsis"></i>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a onclick="deletTask(${gorev8.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash-can"></i> Sil </a></li>
                        <li><a class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Düzenle </a></li>
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

   let newInput = document.querySelector("#txtTaskName");

   if(newInput.value ==""){
        alert ("Görev girmelisiniz!");
    }else{
        gorevlistesi8.push({"id": gorevlistesi8.length + 1, "gorevAdi":newInput.value});
        newInput.value="";
        displayTask();
    }   

    event.preventDefault();
}
function deletTask(id){

    let silId;
     for(let index8 in gorevlistesi8){
       if(gorevlistesi8[index8].id == id){
            silId = index8;
       }
    }

    // silId = gorevlistesi8.findIndex(function(list8){
    //         return list8.id == id;
    // });

    //arrow function
    // silId = gorevlistesi8.findIndex(list8 => list8.id == id);

    gorevlistesi8.splice(silId , 1);
    displayTask();

}

