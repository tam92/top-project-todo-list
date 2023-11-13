import { createCardGroup, createCard } from "./views";

export function getAllTodos() {

    cleanMain();
    addClass('linkViewAll', 'active'); // show active tab
    let cardGroup = createCardGroup();

    for (const key in localStorage) {

        // Skips built-in properties (length,clear, key, etc.)
        if (localStorage.hasOwnProperty(key)) {

            const title = JSON.parse(localStorage.getItem(key)).title;
            const description = JSON.parse(localStorage.getItem(key)).description;
            const dueDate = JSON.parse(localStorage.getItem(key)).dueDate;
            const priority = JSON.parse(localStorage.getItem(key)).priority;
            const project = JSON.parse(localStorage.getItem(key)).project;

            cardGroup.appendChild(createCard(title, description, dueDate, priority, project));
        }
    };

    const main = document.getElementById('mainPage');
    main.appendChild(cardGroup);
    return main;
}

export function addNewTodo() {
    cleanMain();
    addClass('linkAddNew', 'active'); // active tab

    const main = document.getElementById('mainPage');
    const form = document.createElement('form');

    const submitButton = document.createElement("button");
    submitButton.setAttribute("id", "add-todo");
    submitButton.innerHTML = "Add new TODO!";

    const divButton = document.createElement("div");
    divButton.setAttribute("id", "divAddNewTodo");
    divButton.appendChild(submitButton);

    // TITLE
    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title");
    titleLabel.innerHTML = "Title:";

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("id", "title");
    titleInput.required = true;
    titleInput.autofocus = true;

    // DESCRIPTION
    const descriptionLabel = document.createElement("label");
    descriptionLabel.setAttribute("for", "description");
    descriptionLabel.innerHTML = "Description:";

    const descriptionInput = document.createElement("textarea");
    descriptionInput.setAttribute("name", "description");
    descriptionInput.setAttribute("id", "description");
    descriptionInput.required = true;

    // PRIORITY
    const selectLabel = document.createElement("label");
    selectLabel.setAttribute("for", "priority");
    selectLabel.innerHTML = "Priority:";

    const selectInput = document.createElement("select");
    selectInput.setAttribute("name", "priority")
    selectInput.setAttribute("list", "priorityName");
    selectInput.setAttribute("id", "dropMenu");
    const dataList = document.createElement("datalist");
    dataList.setAttribute("id", "priorityName");
    const lowOp = document.createElement("option");
    lowOp.innerHTML = "Low";
    lowOp.setAttribute("value", "low");
    lowOp.selected = true;
    const mediumOp = document.createElement("option");
    mediumOp.innerHTML = "Medium";
    mediumOp.setAttribute("value", "medium");
    const highOp = document.createElement("option");
    highOp.innerHTML = "High";
    highOp.setAttribute("value", "high");
    const criticalOp = document.createElement("option");
    criticalOp.innerHTML = "Critical";
    criticalOp.setAttribute("value", "critical");
        // Append the options
        selectInput.appendChild(lowOp);
        selectInput.appendChild(mediumOp);
        selectInput.appendChild(highOp);
        selectInput.appendChild(criticalOp);

    // DATE
    const dateLabel = document.createElement("label");
    dateLabel.setAttribute("for", "date");
    dateLabel.innerHTML = "Due date: ";

    const dateInput = document.createElement("input");
    dateInput.setAttribute("name", "date");
    dateInput.setAttribute("id", "dateInput");
    dateInput.setAttribute("type", "date");



    // append 
    form.appendChild(titleLabel);
    form.appendChild(titleInput);

    form.appendChild(descriptionLabel);
    form.appendChild(descriptionInput);

    form.appendChild(dateLabel);
    form.appendChild(dateInput);

    form.appendChild(selectLabel);
    form.appendChild(selectInput);

    form.appendChild(divButton);


    main.appendChild(form);



    return main;
}



export function cleanMain () {
    document.getElementById('mainPage').innerHTML = "";

    // Cleans active element style in navBar
    removeClass('linkViewAll', 'active');
    removeClass('linkAddNew', 'active');
}

function addClass(elementId, cssClass) {
   const element = document.getElementById(elementId);
   element.classList.add(cssClass);
}

function removeClass(elementId, cssClass) {
    const element = document.getElementById(elementId);
    element.classList.remove(cssClass);
 }