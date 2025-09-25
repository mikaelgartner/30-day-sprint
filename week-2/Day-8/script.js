// 1. We start with an empty array to hold the future tasks
let tasks = [];

// 2. This function adds a task to the array and updates the list
function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText !== "") {      //if the taskText that comes from input is not empty
        tasks.push({ text: taskText, done: false });   //store task as an object
        input.value = "";       //clear the input field for further added tasks
        renderTasks();          //Show updated list
    }
}

// this function flips the done status of the task object and rerenders
function toggleDone(index) {
    tasks[index].done = !tasks[index].done; //flip the done status
    renderTasks();
}

// 3. This function removes a task by index
function removeTask(index) {
    tasks.splice(index, 1);     //Remove task from array
    renderTasks();              //Show updated list
}

// 4. This function displays all tasks in the <ul>
function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";    // clear old list

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <input type="checkbox" ${task.done ? "checked" : ""} onclick="toggleDone(${index})">
            <span style="text-decoration: ${task.done ? "line-through" : "none"}">${task.text}</span>
            <button onclick="removeTask(${index})">Remove</button>
            `;
            
        list.appendChild(li);
    });
}