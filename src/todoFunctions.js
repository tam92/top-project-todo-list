import { addToLocalStorage } from "./localStorage";
import { createCardGroup, createCard, createForm } from "./views";
import { format } from "date-fns";

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
            const dueDate = new Date(JSON.parse(localStorage.getItem(key)).dueDate);
            const priority = JSON.parse(localStorage.getItem(key)).priority;
            const project = JSON.parse(localStorage.getItem(key)).project;
            cardGroup.appendChild(createCard(title, description, dueDate, priority, project));
        }
    };
    const main = document.getElementById('mainPage');
    main.appendChild(cardGroup);
    addEventListenerEdit();
    addEventListenerDelete();
    return main;
}

function addEventListenerDelete() {
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            const title = JSON.parse(localStorage.getItem(key)).title;
            const btn = document.getElementById(title);
            btn.addEventListener('click', () => {
                localStorage.removeItem(title);
                const container = document.getElementById('container');
                container.appendChild(getAllTodos());
            });
        }
    }
}

function addEventListenerEdit() {
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            const title = JSON.parse(localStorage.getItem(key)).title;
            const btn = document.getElementById("edit-" + title);
            btn.addEventListener("click", () => {
                editTodo(title);
            })
        }
    }
}

function editTodo(title) {
    cleanMain();
    addClass("linkAddNew", "active");

    const main = document.getElementById("mainPage");
    const form = createForm();
    main.appendChild(form);

    const submit = document.getElementById('add-todo');
    submit.addEventListener('click', newTodoData);

    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {

            if (JSON.parse(localStorage.getItem(key)).title === title) {

                // Populate old values
                const editTitle = document.getElementById("title");
                editTitle.value = title;
                const editDescription = document.getElementById("description");
                editDescription.value = JSON.parse(localStorage.getItem(key)).description;
                
                const editPriority = document.getElementById("dropMenu").options;
                switch(JSON.parse(localStorage.getItem(key)).priority) {
                    case "Low":
                        editPriority.item(0).selected = true;
                        break;
                    case "Medium":
                        editPriority.item(1).selected = true;
                        break;
                    case "High":
                        editPriority.item(2).selected = true;
                        break;
                }

                // DATE
                const date = new Date(JSON.parse(localStorage.getItem(key)).dueDate);
                // console.log("original date: " + date);
                let editDate = document.getElementById("dateInput");
                const formattedDate = format(date, "yyyy-MM-dd");
                editDate.value = formattedDate;
                // console.log(editDate.value)




            }
            
        }
    }
}

export function addNewTodo() {
    alert("new");
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

    if (title !== "") {
        if (dueDate !== "") {
            addToLocalStorage(title, description, dueDate, priority);
            getAllTodos();
        }
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