document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task');
    const addTaskButton = document.getElementById('add');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
        } else {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <span class="delete">X</span>
            `;
            taskList.appendChild(taskItem);

            taskInput.value = ''; // Clear the input field
        }
    });

    taskList.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete')) {
            e.target.parentElement.remove();
        }
    });
});
