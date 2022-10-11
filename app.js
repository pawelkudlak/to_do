let idCreator = 0;                                                  //let bo const wysypuje apke

function addNewTask() {
    const taskData = document.getElementById("toDoThing").value;    //podane zadanie
    const divNewTask = document.createElement("li");                //utworzenie diva

    divNewTask.setAttribute("id", idCreator);
    divNewTask.setAttribute("class", "inComplete");
    divNewTask.setAttribute("onclick", `completeTask(${idCreator})`);

    const tasksArea = document.getElementById("tasksList");         //oznaczenie miejsca taska
    const task = document.createTextNode(taskData);                 //dodanie treści zadania

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "deleteBtn");
    deleteButton.setAttribute("type", "submit");
    deleteButton.setAttribute("onclick", `deleteTask(${idCreator})`);

    if (taskData === "") {                                          //walidacja czy zostało coś wprowadzone
        alert("You don't add anything, pls try again!")
    } else {
        tasksArea.appendChild(divNewTask);
        divNewTask.appendChild(task);
        divNewTask.appendChild(deleteButton);
    }

    idCreator += 1;
    document.getElementById("addTaskForm").reset();
}

function deleteTask(id) {
    const taskToDelete = document.getElementById(id);
    taskToDelete.parentNode.removeChild(taskToDelete);
}

function completeTask(id) {
    const task = document.getElementById(id);
    task.classList.toggle("complete");
}