const sidebarItems = [
    {
        name: "Dashboard",
        icon: "fas fa-th-large"
    }, {
        name: "All Tasks",
        icon: "fa-solid fa-list-ul"
    }, {
        name: "Upcoming Tasks",
        icon: "fa-solid fa-calendar-check"
    }, {
        name: "Completed Tasks",
        icon: "fa-solid fa-list-check"
    }, {
        name: "Priorities",
        icon: "fa-solid fa-ranking-star"
    }
]

const sidebarItemsDiv = document.querySelector(".sidebarItems");
sidebarItems.forEach(item => {
    const listItem = document.createElement("li");  
    listItem.innerHTML = `<a href="#"><i class="${item.icon}"></i> ${item.name}</a>`;
    sidebarItemsDiv.appendChild(listItem);
});

// current month
const month = new Date().toLocaleString('default', { month: 'long' });
const year = new Date().getFullYear();
document.querySelector(".datepicker-top").innerHTML = `${month} ${year}`;
const currentDate = new Date().getDate();
const dates = document.querySelectorAll(".date");
dates.forEach(date=> {
    if(date.innerHTML == currentDate){
        date.classList.add("current-day");
        
    }
})