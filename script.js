const inputAdd = document.getElementById("input-add-todo");
const todoCtn = document.getElementById("todo-container");

inputAdd.onkeyup = (event) => {
  if (event.key !== "Enter") return;
  //your code here
  else console.log(inputAdd.value);
  addTodo(inputAdd.value, 0);
};

function addTodo(title, completed) {
  console.log("addTodo working");
  //create a div that holds todo title, done button, delete button
  const div = document.createElement("div");
  div.className = "border-bottom p-1 py-2 fs-2 d-flex";

  //create span for showing title
  const span = document.createElement("span");
  span.innerText = title;
  span.style.textDecoration = completed ? "line-through" : "";
  span.className = "me-3";

  //create done button
  const doneBtn = document.createElement("button");
  doneBtn.innerText = "Done";
  doneBtn.className = "btn btn-success me-2";

  //create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "btn btn-danger";

  //your code here

  //append todo to HTML...
  if (inputAdd.value === "") {
    alert("ใส่ข้อมูลก่อนนะครับ");
  } else {
    const list = document.getElementById("todo-container");
    div.appendChild(span);
    div.appendChild(doneBtn);
    div.appendChild(deleteBtn);
    list.insertBefore(div, list.children[0]);

    document.getElementById("input-add-todo").value = "";
  }

  //define buttons event...
  doneBtn.onclick = function () {
    doneTask();
  };

  function doneTask() {
    if (completed == 0) {
      completed = 1;
    } else if (completed == 1) completed = 0;

    div.removeChild(span);
    div.removeChild(deleteBtn);
    div.removeChild(doneBtn);
    div.appendChild(span);
    span.style.textDecoration = completed ? "line-through" : "";
    div.appendChild(doneBtn);
    div.appendChild(deleteBtn);
  }

  deleteBtn.onclick = function () {
    deleteTask();
  };

  function deleteTask() {
    div.removeChild(span);
    div.removeChild(deleteBtn);
    div.removeChild(doneBtn);
  }

  saveTodo();
}

function saveTodo() {
  console.log("saveTodo Working");
  const data = [];
  for (const todoDiv of todoCtn.children) {
    //your code here
    data.push(todoDiv);
  }
  //your code here
  console.log(data);
}

function loadTodo() {
  //your code here
  console.log("load working");
}

loadTodo();
