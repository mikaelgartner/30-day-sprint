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

let lastAddedIndex = null;

// 2. This function adds a task to the array and updates the list
function addTask() {
    const input = document.getElementById("taskInput");
    const taskErrors = document.getElementById("taskErrors");
    const taskText = input.value.trim();

    taskErrors.innerHTML = "";  //Clear old errors

    //check if taskText is empty, and if it is prompt user to add text
    if (!taskText) {
        taskErrors.style.display = "block";
        taskErrors.innerHTML = "<p>Please enter a task before adding</p>";
        return;
    }

    taskErrors.classList.add("fade-out");
    setTimeout(() => {
        taskErrors.style.display = "none";
        taskErrors.classList.remove("fade-out");
    }, 400);

    tasks.push(new Task(taskText)); //creates new Task object and stores it in array
    lastAddedIndex = tasks.length -1;   //Track the new tasks index
    input.value = "";       //clear the input field for further added tasks
    renderTasks();          //Show updated list
    console.log(tasks[lastAddedIndex]);
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

        if (index === lastAddedIndex) {
            li.classList.add("animate");    // Trigger entrance animation
            li.addEventListener("animationend", () => {
            li.classList.remove("animate");
            });
        }

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = task.done;
            checkbox.addEventListener("click", () => toggleDone(index));

            const span = document.createElement("span");
            span.style.textDecoration = task.done ? "line-through" : "none";
            span.innerHTML = `
                ${task.text}<br>
                <small title="Task created at: ${task.createdAt.toLocaleString()}">
                Added ${timeSince(task.createdAt)}
                </small>
                ${task.done && task.completedAt ? `<br><small title="Completed at: ${task.completedAt.toLocaleString()}">Completed ${timeSince(task.completedAt)}</small>` : ""}
                `;

                const removeBtn = document.createElement("button");
                removeBtn.textContent = "Remove";
                removeBtn.addEventListener("click", () => removeTask(index));

                li.appendChild(checkbox);
                li.appendChild(span);
                li.appendChild(removeBtn);
            
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

    // Reset animation flag
    lastAddedIndex = null;
}

// Clear completed tasks
function clearCompleted() {
    tasks = tasks.filter(task => !task.done);
    renderTasks();
}

// Auto-refresh timestamps
setInterval(renderTasks, 60000); // updates every 60 seconds

// ensure UI is clean on initial load
renderTasks(); // ensures UI is clean on initial loads

// Attach event listeners after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".input-group button").addEventListener("click", addTask);
    document.getElementById("clearButton").addEventListener("click", clearCompleted);
});

document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.querySelector(".container").classList.toggle("dark-mode");
});

document.getElementById("taskInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});