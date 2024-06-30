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