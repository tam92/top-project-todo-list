import { addToLocalStorage } from "./localStorage";
import { createCardGroup, createCard, createForm } from "./views";

// loops through local storage to get all the todos stored
export function getAllTodos() {
    cleanMain();
    addClass('linkViewAll', 'active'); // show this as the active tab
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
    const form = createForm();
    main.appendChild(form);

    const submit = document.getElementById('add-todo');
    submit.addEventListener('click', newTodoData);

    return main;
}

function newTodoData(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('dropMenu').value;
    const dueDate = document.getElementById('dateInput').value;

    console.log(title+description+priority+dueDate);

    if (title !== "") {
        addToLocalStorage(title, description, dueDate, priority);
        getAllTodos();
    }
}


// Cleans the main section from index.html
export function cleanMain () {
    document.getElementById('mainPage').innerHTML = "";

    // Remove active element style in navBar
    removeClass('linkViewAll', 'active');
    removeClass('linkAddNew', 'active');
}

// Adds a class to an element
function addClass(elementId, cssClass) {
   const element = document.getElementById(elementId);
   element.classList.add(cssClass);
}

// Remove a class from an element
function removeClass(elementId, cssClass) {
    const element = document.getElementById(elementId);
    element.classList.remove(cssClass);
 }