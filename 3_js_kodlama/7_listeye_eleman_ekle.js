let sonuc_7;

let gorevlistesi7 = [
    {"id": 1, "gorevAdi":"Görev 1"},
    {"id": 2, "gorevAdi":"Görev 2"},
    {"id": 3, "gorevAdi":"Görev 3"},
    {"id": 4, "gorevAdi":"Görev 4"},
];

displayTask();

function displayTask(){
    ul = document.getElementById("task-list");
    ul.innerHTML="";

    for(let gorev7 of gorevlistesi7 ){

        let li = `
            <li class="task list-group-item"> 
                 <div class="form-check">
                     <input type="checkbox" id="${gorev7.id}" class="form-check-input">
                     <label for="${gorev7.id}" class="form-check-label"> ${gorev7.gorevAdi}</label>
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
    }
   else{
        gorevlistesi7.push({"id": gorevlistesi7.length + 1, "gorevAdi":newInput.value});
        newInput.value="";
        displayTask();
    }

    //    let li =`
    //         <li class="task list-group-item"> 
    //             <div class="form-check">
    //                 <input type="checkbox" id="5" class="form-check-input">
    //                 <label for="5" class="form-check-label"> ${newInput.value}</label>
    //             </div>                        
    //         </li>
    //     `
    //     ul.insertAdjacentHTML("beforeend", li)
   
    event.preventDefault();
}

