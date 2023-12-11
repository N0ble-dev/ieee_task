document.addEventListener("DOMContentLoaded", function ()
{
    document.addEventListener("click", function (event)
    {
        const removeButton = event.target.closest("#remove");
        if (removeButton) {
            // get close parent elemnt from remove ele
            const taskElement = removeButton.closest("[data-task-id]");
            const taskId = taskElement.getAttribute("data-task-id");
            if (taskElement) {
                taskElement.remove();
            }
            if (taskId) {
                localStorage.removeItem(taskId);
            }
        }
    });
});
