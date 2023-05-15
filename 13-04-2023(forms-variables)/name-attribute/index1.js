const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);

function addTodo() {
  const task = todoInput.value;

  if (task === "") {
    return;
  }

  const todoItem = createTodoItem(task);
  todoList.appendChild(todoItem);

  todoInput.value = "";
}

function deleteTodo(event) {
  const deleteBtn = event.target;
  
  if (deleteBtn.classList.contains("delete-btn")) {
    const todoItem = deleteBtn.closest(".todo-item");
    todoList.removeChild(todoItem);
  }
}

function createTodoItem(task) {
  const todoItem = document.createElement("li");
  todoItem.classList.add("todo-item");

  const taskElement = document.createElement("span");
  taskElement.classList.add("task");
  taskElement.textContent = task;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "Delete";

  todoItem.appendChild(taskElement);
  todoItem.appendChild(deleteBtn);

  return todoItem;
}
