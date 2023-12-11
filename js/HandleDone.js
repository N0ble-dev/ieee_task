document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("click", function (event) {
        const checkbox = event.target.closest('input[type="checkbox"]');

        if (checkbox) {
            const taskElement = checkbox.closest("[data-task-id]");

            if (taskElement) {
                if (checkbox.checked) {
                    console.log(taskElement);
                    taskElement.classList.remove("bg-slate-500")  
                    taskElement.classList.add("bg-slate-800")  
                } else {
                    taskElement.classList.remove("bg-slate-800")  
                    taskElement.classList.add("bg-slate-500")
                }
            }
        }
    });
})