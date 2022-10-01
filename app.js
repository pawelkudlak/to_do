function addNewTask() {
    const taskData = document.getElementById("toDoThing").value;    //podane zadanie
    const divNewTask = document.createElement("li");               //utworzenie diva
    const tasksArea = document.getElementById("tasksList");         //oznaczenie miejsca taska
    const task = document.createTextNode(taskData);                 //dodanie treści zadania 

    if (taskData === "") {                                          //walidacja czy zostało coś wprowadzone
        alert("You don't add anything, pls try again!")
    } else {
        tasksArea.appendChild(divNewTask);
        divNewTask.appendChild(task);
    }
}



// const tasks = document.getElementsByTagName("LI");
// for (const i = 0; i < tasks.length; i++) {
//     const deleteButton = document.createElement("BUTTON");
//     deleteButton.innerText = "X";
//     deleteButton.className = "deleteButton";
//     tasks[i].appendChild(deleteButton);
// }

// const deleteItem = document.getElementsByClassName("deleteButton");

// for (const i = 0; i < close.length; i++) {
//     close[i].onclick = function () {
//         const element = this.parentElement;
//         element.style.display = "none";
//     }
// }

// function addNewTask() {
//     const list = document.createElement("li");
//     const taskFromForm = document.getElementById("toDoThing").value;
//     const addedTask = document.createTextNode(taskFromForm);

//     list.appendChild(addedTask);

//     if (taskFromForm === '') {
//         alert("You don't add anything, try again!");
//     } else {
//         document.getElementById("tasksList").appendChild(list);
//     }
//     document.getElementById("toDoThing").value = "";

//     const deleteButton = document.createElement("BUTTON");
//     deleteButton.innerText = "X";
//     deleteButton.className = "deleteButton";
//     list.appendChild(deleteButton);

//     for (const i = 0; i < close.length; i++) {
//         close[i].onclick = function () {
//             const div = this.parentElement;
//             div.style.display = "none";
//         }
//     }
// }
