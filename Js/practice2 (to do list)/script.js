const tasksContainer = document.querySelector(".tasks_container");
const inputField = document.querySelector(".input_field");
const addTaskBtn = document.querySelector(".btn_add_task");

addTaskBtn.addEventListener("click", () => {
  if (inputField.value === "") {
    alert("Текстове поле не заповнене");
  } else {
    const oneTask = document.createElement("div");
    const taskText = document.createElement("p");
    const deleteTaskBtn = document.createElement("button");

    oneTask.className = "one_task";
    taskText.className = "task_text";
    deleteTaskBtn.className = "delete_task_btn";

    taskText.innerText = inputField.value;
    deleteTaskBtn.innerText = "Delete";

    oneTask.appendChild(taskText);
    oneTask.appendChild(deleteTaskBtn);

    tasksContainer.appendChild(oneTask);
    inputField.value = "";

    deleteTaskBtn.addEventListener("click", () => {
      tasksContainer.removeChild(oneTask);
    });
  }
});
