// Get references to HTML elements (with out using fomr)
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
console.log(taskInput.value);
// debugger;
// Event listener for adding a new task
addButton.addEventListener("click", function () {
  // Get the task input value
  const task = taskInput.value;

  if (task) {
    // Create a new list item
    const listItem = document.createElement("li");
    listItem.textContent = task;

    // Add the new list item to the task list
    taskList.appendChild(listItem);

    // Clear the task input
    taskInput.value = "";
  }
});
