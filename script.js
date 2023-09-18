// Get elements from the DOM
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// Event listener for adding a task
addTaskButton.addEventListener('click', addTask);

// Event listener for pressing Enter key
taskInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="toggle">Done</button>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        `;

        // Add event listeners to the buttons
        listItem.querySelector('.toggle').addEventListener('click', toggleTask);
        listItem.querySelector('.edit').addEventListener('click', editTask);
        listItem.querySelector('.delete').addEventListener('click', deleteTask);

        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}

// Function to toggle task completion
function toggleTask(event) {
    const listItem = event.target.parentElement;
    listItem.classList.toggle('completed');
}

// Function to edit a task
function editTask(event) {
    const listItem = event.target.parentElement;
    const taskText = listItem.querySelector('span');
    const newText = prompt('Edit task:', taskText.textContent.trim());
    if (newText !== null && newText !== '') {
        taskText.textContent = newText;
    }
}

// Function to delete a task
function deleteTask(event) {
    const listItem = event.target.parentElement;
    taskList.removeChild(listItem);
}
