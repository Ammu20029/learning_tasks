let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let editIndex = null;

const searchInput = document.getElementById("search");

document.getElementById("myform").addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value.trim();
    const employee = document.getElementById('employeeName').value.trim();
    const description = document.getElementById('description').value.trim();

    if (!title || !employee) {
        alert("Please enter both Title and Employee Name.");
        return;
    }

    const task = { title, employee, description };

    if (editIndex !== null) {
        tasks[editIndex] = task;
        editIndex = null;
    } else {
        tasks.push(task);
    }

    saveTasks();
    renderTasks();
    document.getElementById("myform").reset();
});

// Render tasks (accept filtered list or full tasks)
function renderTasks(filteredTasks = tasks) {
    const taskList = document.getElementById("tasks");
    taskList.innerHTML = "";

    filteredTasks.forEach((task, index) => {
        const taskDiv = document.createElement("div");
        taskDiv.className = "task";
        taskDiv.innerHTML = `
            <strong>Title:</strong> ${task.title}<br>
            <strong>Employee:</strong> ${task.employee}<br>
            <strong>Description:</strong> ${task.description}<br>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
            <hr>
        `;
        taskList.appendChild(taskDiv);
    });
}

function editTask(index) {
    const task = tasks[index];

    document.getElementById('title').value = task.title;
    document.getElementById('employeeName').value = task.employee;
    document.getElementById('description').value = task.description;

    editIndex = index;
}

function deleteTask(index) {
    if (confirm("Are you sure you want to delete this task?")) {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
    }
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function filterAndRenderTasks() {
    const keyword = searchInput.value.trim().toLowerCase();

    const filteredTasks = tasks.filter(task => {
        return (
            task.title.toLowerCase().includes(keyword) ||
            task.employee.toLowerCase().includes(keyword) ||
            task.description.toLowerCase().includes(keyword)
        );
    });

    renderTasks(filteredTasks);
}

// Add event listener for search input
searchInput.addEventListener("input", filterAndRenderTasks);

// Initial render
renderTasks();
