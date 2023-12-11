

class TaskComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const taskId = this.getAttribute('taskId');
        const taskName = localStorage.getItem(taskId);

        if (taskName) {
            this.innerHTML = `
                <div class="bg-slate-500 rounded-lg p-5 flex justify-between items-center mb-3" data-task-id="${taskId}">
                    <h3 class="font-semibold text-white text-2xl">${taskName}</h3>
                    <div>
                        <input type="checkbox" class="accent-slate-600 w-5 h-5">
                        <i id="remove" class="fa-solid fa-trash fa-2x ml-4"></i>
                    </div>
                </div>
            `;
        } else {
            console.warn(`Task with ID ${taskId} not found in local storage.`);
        }
    }

    addToLocalStorage(taskId, taskName) {
        localStorage.setItem(taskId, taskName);
    }
}

customElements.define("task-component", TaskComponent);

document.addEventListener("DOMContentLoaded", function () {
    const addTaskButton = document.getElementById("add-task");
    const tasksContainer = document.getElementById("tasks");

    let taskIdCounter = localStorage.length; 

    addTaskButton.addEventListener("click", function () {
        const inputField = document.querySelector("input[type='text']");
        const taskName = inputField.value;

        if (taskName.trim() !== "") {
            const taskId = `${taskIdCounter++}`;

            localStorage.setItem(taskId, taskName);

            const taskComponent = document.createElement("task-component");
            taskComponent.setAttribute("taskId", taskId);
            tasksContainer.appendChild(taskComponent);

            inputField.value = "";
        }
    });

    for (let i = 0; i < localStorage.length; i++) {
        const taskId = localStorage.key(i);
        const taskComponent = document.createElement("task-component");
        taskComponent.setAttribute("taskId", taskId);
        tasksContainer.appendChild(taskComponent);
    }
});






