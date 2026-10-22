function addTask() {
  const newTask = document.getElementById("taskInput").value.trim();

  const LI = document.createElement("li");
  LI.classList.add("p-3");

  const SPAN = document.createElement("span");
  SPAN.textContent = newTask;

  const button = document.createElement("button");
  button.classList.add("btn", "btn-primary", "btn-sm", "ms-3");
  button.textContent = "Edit";
  button.onclick = () => LI.contentEditable();

  const BUTTON = document.createElement("button");
  BUTTON.classList.add("btn", "btn-danger", "btn-sm", "ms-3");
  BUTTON.textContent = "Delete";
  BUTTON.onclick = () => LI.remove();

  

  LI.appendChild(SPAN);
  LI.appendChild(button);
  LI.appendChild(BUTTON);

  document.getElementById("taskList").appendChild(LI);

  document.getElementById("taskInput").value = "";
}