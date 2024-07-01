const sidebarItems = [
  {
    name: "Dashboard",
    icon: "fas fa-th-large",
  },
  {
    name: "All Tasks",
    icon: "fa-solid fa-list-ul",
  },
  {
    name: "Upcoming Tasks",
    icon: "fa-solid fa-calendar-check",
  },
  {
    name: "Completed Tasks",
    icon: "fa-solid fa-list-check",
  },
  {
    name: "Priorities",
    icon: "fa-solid fa-ranking-star",
  },
];

const sidebarItemsDiv = document.querySelector(".sidebarItems");
sidebarItems.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `<a href="#"><i class="${item.icon}"></i> ${item.name}</a>`;
  sidebarItemsDiv.appendChild(listItem);
});

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

addTask.addEventListener("click", () => {
  const task = input.value;
  if (task !== "") {
    tasks.push(task);
    input.value = "";
    renderTasks();
  }
});

function renderTasks() {
  myTasks.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskLi = document.createElement("li");
    const taskContent = document.createElement("div");
    taskContent.classList.add("taskContent");
    const doneRadio = document.createElement("input");
    doneRadio.setAttribute("type", "radio");
    taskContent.appendChild(doneRadio);
    const taskSpan = document.createElement("span");
    taskSpan.textContent = task;
    taskContent.appendChild(taskSpan);
    const Xbutton = document.createElement("i");
    Xbutton.setAttribute("class", "fa-solid fa-trash");
    Xbutton.addEventListener("click", () => {
      tasks.splice(index, 1);
      renderTasks();
    });
    counter.innerHTML =  `(${tasks.length})` 
    taskLi.appendChild(taskContent);
    taskLi.appendChild(Xbutton);
    myTasks.appendChild(taskLi);    
  });
}
