const inputAdd = document.getElementById("input-add-todo");
const todoCtn = document.getElementById("todo-container");

inputAdd.onkeyup = (event) => {
  if (event.key !== "Enter") return;
  //your code here
  //console.log(inputAdd.value);
  else if (inputAdd.value === "") {
    alert("ใส่ข้อมูลก่อนนะครับ");
  } else addTodo(inputAdd.value, false);
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
  const list = document.getElementById("todo-container");
  div.appendChild(span);
  div.appendChild(doneBtn);
  div.appendChild(deleteBtn);
  list.insertBefore(div, list.children[0]);

  document.getElementById("input-add-todo").value = "";
  //}
  //define buttons event...
  doneBtn.onclick = function () {
    doneTask();
    saveTodo();
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
    saveTodo();
  };

  function deleteTask() {
    div.remove();
  }

  saveTodo();
}

function saveTodo() {
  const data = [];
  for (const todoDiv of todoCtn.children) {
    //your code here
    const todoObj = {};
    todoObj.title = todoDiv.children[0].innerText;
    todoObj.completed =
      todoDiv.children[0].style.textDecoration === "line-through";
    data.push(todoObj);
  }
  // console.log(data);

  //your code here
  if (JSON.parse(localStorage.getItem("index")) === null) {
    const temp = [];
    for (let i = 0; i < data.length; i++) {
      temp.push(data[i]);
    }
    localStorage.setItem("index", JSON.stringify(temp));
  } else if (JSON.parse(localStorage.getItem("index")) !== null) {
    const temp = [];
    for (let i = 0; i < data.length; i++) {
      temp.push(data[i]);
    }
    localStorage.setItem("index", JSON.stringify(temp));
  }
  // console.log(JSON.parse(localStorage.getItem("index")) === null);

  // console.log(temp);
}

function loadTodo() {
  //your code here
  const y = JSON.parse(localStorage.getItem("index"));

  for (let i = y.length - 1; i >= 0; i--) {
    addTodo(y[i].title, y[i].completed);
  }
}

loadTodo();
