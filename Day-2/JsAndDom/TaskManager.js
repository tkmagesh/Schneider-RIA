function addNewTask(){
  var txtTask = document.getElementById("txtTask");
  var taskList = document.getElementById("ulTaskList");
  var newTaskItem = "<li>" + txtTask.value + "</li>";
  taskList.innerHTML += newTaskItem;
}
function initialize(){
	var btnAddTask = document.getElementById("btnAddTask");
	btnAddTask.onclick = addNewTask;
}
window.onload = initialize;