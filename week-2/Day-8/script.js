// Task constructor function
function Task(text) {
    this.text = text;
    this.done = false;
    this.createdAt = new Date();  //captures a timestamp of when task is created
}

// Prototype method to flip toggleDone
Task.prototype.toggleDone = function () {
    this.done = !this.done;
    this.completedAt = this.done ? new Date() : null;
}

// Helper function: time since creation of task
function timeSince(date) {
    const seconds = Math.floor((new Date() - date) / 1000);

    const intervals = [
        { label: "year", seconds: 31536000},
        { label: "month", seconds: 2592000},
        { label: "day", seconds: 86400 },
        { label: "hour", seconds: 3600 },
        { label: "minute", seconds: 60 },
        { label: "second", seconds: 1 }
    ];

    for (let i = 0; i < intervals.length; i++) {
    const interval = Math.floor(seconds / intervals[i].seconds);
    if (interval >= 1) {
        return `${interval} ${intervals[i].label}${interval > 1 ? "s" : ""} ago`;
      }
    }

    return "just now";
}



// 1. We start with an empty array to hold the future tasks
let tasks = [];

// 2. This function adds a task to the array and updates the list
function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText !== "") {      //if the taskText that comes from input is not empty
        tasks.push(new Task(taskText)); //creates new Task object and stores it in array
        input.value = "";       //clear the input field for further added tasks
        renderTasks();          //Show updated list
        console.log(tasks[tasks.length -1]);
    }
}

// this function flips the done status of the task object and rerenders
function toggleDone(index) {
    tasks[index].toggleDone(); //flip the done status
    renderTasks();
    console.log(tasks[index]);
}

// 3. This function removes a task by index
function removeTask(index) {
    tasks.splice(index, 1);     //Remove task from array
    renderTasks();              //Show updated list
}

// 4. This function displays all tasks in the <ul>
function renderTasks() {
    const activeList = document.getElementById("activeTasks");
    const completedList = document.getElementById("completedTasks");
    const activeHeader = document.getElementById("activeHeader");
    const completedHeader = document.getElementById("completedHeader");
    const clearButton = document.getElementById("clearButton");

    activeList.innerHTML = "";      // clear old list
    completedList.innerHTML = "";   // clear old list    

    let hasActive = false;
    let hasCompleted = false;

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <input type="checkbox" ${task.done ? "checked" : ""} onclick="toggleDone(${index})">
            <span style="text-decoration: ${task.done ? "line-through" : "none"}">
            ${task.text} 
            <br>
            <small title="Task created at: ${task.createdAt.toLocaleString()}">
                Added ${timeSince(task.createdAt)}
            </small>
            ${task.done && task.completedAt ? `<br><small title="Completed at: ${task.completedAt.toLocaleString()}">Completed ${timeSince(task.completedAt)}</small>` : ""}
            </span>
            <button onclick="removeTask(${index})">Remove</button>
            `;
            
            if (task.done) {
                completedList.appendChild(li);
                hasCompleted = true;
            } else {
                activeList.appendChild(li);
                hasActive = true;
            }
    });

    // Show/hide headers and button
    activeHeader.style.display = hasActive ? "block" : "none";
    completedHeader.style.display = hasCompleted ? "block" : "none";
    clearButton.style.display = hasCompleted ? "inline-block" : "none";
}

// Clear completed tasks
function clearCompleted() {
    tasks = tasks.filter(task => !task.done);
    renderTasks();
}

// Auto-refresh timestamps
setInterval(renderTasks, 60000); // updates every 60 seconds

// ensure UI is clean on initial load
renderTasks(); // ensures UI is clean on initial load