
var numberOfTasks = 1; 



function newTask(){
    const task = document.createElement("div");
    task.classList.add("task");
    task.id = "X" + numberOfTasks;
    task.addEventListener("click", handleClick);
    
    task.textContent = document.querySelector("input").value;
    document.querySelector("input").value = null;
    document.getElementById("incompleteTasks").appendChild(task);
    numberOfTasks++;
}



function handleClick(event) {
    
    switch (event.button) {
        case 0: // Left button
        event.currentTarget.remove();
            break;
        case 2:
        event.preventDefault();
        var task = document.getElementById(event.currentTarget.id);
        document.getElementById("completeTasks").appendChild(task);
            break;
    
    }
}


document.getElementById("recordTask").addEventListener("click", newTask);

