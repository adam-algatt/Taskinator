var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
};

//button event listener
buttonEl.addEventListener("click", createTaskHandler);










  /*
  var someDivEl = document.querySelector("#ID or .classname");
  var listAddEl = document.createElement("li");
  listAdd.textContent = "Whatever you want to add"
listAddEl.className = "classname"; //for CSS properties to take affect
someDivEl.appendChild(listAddEl);
*/