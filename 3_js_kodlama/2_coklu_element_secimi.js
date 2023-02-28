let sonuc_2;

sonuc_2 = document.getElementsByClassName("task");
sonuc_2 = document.getElementsByClassName("task")[0];
sonuc_2 = document.getElementsByClassName("task")[1];

// taskList = document.getElementsByClassName("task");
// ul = document.getElementById("task-list");
// taskList = ul.getElementsByTagName("li");
taskList = document.querySelectorAll("#task-list li");


for(let i_2=0 ; i_2 < taskList.length; i_2++){
    console.log(taskList[i_2]);
}

for(let task of taskList){
    console.log(task);
    task.style.color = "red";
    task.style.fontSize = "20px";
    // task.innerText = "Item";
}
for(let taskindex in taskList){
    console.log(taskindex);
}

// console.log(sonuc_2);
// console.log(tagtaskList);


