

let allTasksCount = 0;
let doneTasksCount = 0;
let undoneTasksCount = 0;


// current month
const month = new Date().toLocaleString("default", { month: "long" });
const year = new Date().getFullYear();
document.querySelector(".datepicker-top").innerHTML = `${month} ${year}`;
const currentDate = new Date().getDate();
const dates = document.querySelectorAll(".date");
dates.forEach((date) => {
  if (date.innerHTML == currentDate) {
    date.classList.add("current-day");
  }
});

const tasks = [];
const input = document.querySelector(".form-control");
const addTask = document.querySelector("#addTask");
const myTasks = document.querySelector(".my-tasks");
const counter = document.querySelector(".count");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress-bar");

addTask.addEventListener("click", () => {
  const task = input.value;
  if (task !== "") {
    const taskItem = {
      task: task,
      done: false,
    };
    tasks.push(taskItem)
    allTasksCount++;
    undoneTasksCount++;
    input.value = "";
    renderTasks();
    console.log(`All: ${allTasksCount}, Done: ${doneTasksCount}`)
    counter.innerHTML = `(${allTasksCount})`
    updateBarWidths();
  }
});

function renderTasks() {
  myTasks.innerHTML = "";
  tasks.forEach((task, index) => {
    
    const taskLi = document.createElement("li");
    const taskContent = document.createElement("div");
    taskContent.classList.add("taskContent");
    const doneRadio = document.createElement("input");
    doneRadio.setAttribute("type", "checkbox");
    doneRadio.classList.add("doneRadio");
    doneRadio.addEventListener("click", () => {
      if (task.done === false) {
        task.done = true;
        taskContent.classList.toggle("done");
        document.querySelectorAll(".doneRadio")[index].checked = true
        document.querySelector(`.editButton-${index}`).style.display = "none";
        doneTasksCount++;
        undoneTasksCount--;
        console.log(`All: ${allTasksCount}, Done: ${doneTasksCount}`)
        counter.innerHTML = `(${allTasksCount})`
        updateBarWidths();
      }
    });
    taskContent.appendChild(doneRadio);
    const taskSpan = document.createElement("span");
    taskSpan.textContent = task.task;
    taskContent.appendChild(taskSpan);
    const Xbutton = document.createElement("i");
    const editButton = document.createElement("i");
    editButton.setAttribute("class", `fa-solid fa-pen editButton-${index}`);
    editButton.onclick = () => editTask(index, taskSpan);
    Xbutton.setAttribute("class", "fa-solid fa-trash");
    Xbutton.addEventListener("click", () => {
      tasks.splice(index, 1);
      renderTasks();
    });
    counter.innerHTML = `(${tasks.length})`
    taskLi.appendChild(taskContent);
    taskLi.appendChild(Xbutton);
    taskLi.appendChild(editButton);
    myTasks.appendChild(taskLi);
  });
}


function editTask(index, taskSpan) {
  const input = document.createElement("input");
  input.type = "text";
  input.value = taskSpan.textContent;
  input.classList.add("edit-input");

  taskSpan.parentNode.replaceChild(input, taskSpan);
  input.focus();
  input.select();

  input.addEventListener("blur", () => saveTask(index, input));
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      saveTask(index, input);
    }
  });
}

function saveTask(index, input) {
  const newTaskText = input.value.trim();
  if (newTaskText) {
    tasks[index].task = newTaskText;
    renderTasks();
  } else {
    console.log("Task cannot be empty.");
  }
}

function updateBarWidths() {
  if (allTasksCount === 0 || doneTasksCount === 0) {
    progressBar.style.width = "0%";
    document.querySelector(".progress-value").innerHTML = "0%";
  } else {
    const progressWidth = (doneTasksCount / allTasksCount) * 100;
    progressBar.style.width = `${progressWidth}%`;
    document.querySelector(".progress-value").innerHTML = `${progressWidth.toFixed(2)}%`;
  }
}

updateBarWidths();

// Toggle about page
const aboutBtn = document.querySelector(".aboutBtn");
const dashBoard = document.querySelector(".dashboard");
aboutBtn.addEventListener("click", () => {
  document.querySelector(".about").style.display = "flex";
  document.querySelector(".main").style.display = "none";
});

dashBoard.addEventListener("click", () => {
  document.querySelector(".about").style.display = "none";
  document.querySelector(".main").style.display = "flex";
});