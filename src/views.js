import { format, parseISO } from "date-fns";
import { getAllTodos } from "./todoFunctions";

// Creates and returns a single card
export function createCard(title, description, dueDate, priority, project) {
    
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('col');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');

    const titleCard = document.createElement('h3');
    titleCard.classList.add("card-header");
    titleCard.innerText = title;

    const descriptionCard = document.createElement('p');
    descriptionCard.innerText = description;

    const dueDateCard = document.createElement('p');
    dueDateCard.innerText = "Due date: " + format((dueDate), 'PPPP');

    const priorityCard = document.createElement('p');
    priorityCard.innerText = priority + " priority";
    

    const projectCard = document.createElement('p');
    projectCard.innerText = project;

    // Change color according to priority
    switch(priority) {
        case 'Low':
            priorityCard.classList.add('btn');
            priorityCard.classList.add('btn-success');
            break;
        case 'Medium':
            priorityCard.classList.add('btn');
            priorityCard.classList.add('btn-warning');
            break;
        case 'High':
            priorityCard.classList.add('btn');
            priorityCard.classList.add('btn-danger')
            break;
    }

    cardBody.appendChild(descriptionCard);
    cardBody.appendChild(dueDateCard);
    cardBody.appendChild(projectCard);
    cardBody.appendChild(priorityCard);
    priorityCard.classList.add('text-center');

    // btn edit
    const editTodo = document.createElement("input");
    editTodo.setAttribute("type", "image");
    editTodo.setAttribute("id", `${"edit-" + title}`);
    editTodo.setAttribute("src", "/src/images/pencil-square.svg");
    editTodo.setAttribute("style", "height: 20px");
    cardFooter.appendChild(editTodo);

    // btn delete
    const deleteTodo = document.createElement('input');
    deleteTodo.setAttribute('type', 'image');
    deleteTodo.setAttribute('id', `${title}`);
    deleteTodo.setAttribute("src", "/src/images/trash.svg");
    deleteTodo.setAttribute('style', 'height: 20px');
    cardFooter.appendChild(deleteTodo);

    card.appendChild(titleCard);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);

    return card;
}

// Creates and retuns an empty card group
export function createCardGroup() {
    
    const cardGroup = document.createElement('div');
    cardGroup.classList.add('row');
    cardGroup.classList.add('row-cols-3');

    return cardGroup;
}

// Creates and returns a form to add a new TODO
export function createForm() {
    const form = document.createElement('form');

    const submitButton = document.createElement("button");
    submitButton.setAttribute("id", "add-todo");
    submitButton.innerHTML = "Add new TODO!";
    submitButton.classList.add('class', 'form-control');
    

    // TITLE
    const groupTitle = document.createElement("div");
    groupTitle.classList.add('class', 'form-group');

    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title");
    titleLabel.innerHTML = "Title:";

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("id", "title");
    titleInput.classList.add('class', 'form-control');
    titleInput.required = true;
    titleInput.autofocus = true;

    groupTitle.appendChild(titleLabel);
    groupTitle.appendChild(titleInput);

    // DESCRIPTION
    const groupDescription = document.createElement("div");
    groupDescription.classList.add('class', 'form-group');

    const descriptionLabel = document.createElement("label");
    descriptionLabel.setAttribute("for", "description");
    descriptionLabel.innerHTML = "Description:";

    const descriptionInput = document.createElement("textarea");
    descriptionInput.setAttribute("name", "description");
    descriptionInput.setAttribute("id", "description");
    descriptionInput.classList.add('class', 'form-control');
    // descriptionInput.required = true;

    groupDescription.appendChild(descriptionLabel);
    groupDescription.appendChild(descriptionInput);

    // PRIORITY
    const groupPriority = document.createElement("div");
    groupPriority.classList.add('class', 'form-group');

    const selectLabel = document.createElement("label");
    selectLabel.setAttribute("for", "priority");
    selectLabel.innerHTML = "Priority:";

    const selectInput = document.createElement("select");
    selectInput.setAttribute("name", "priority")
    selectInput.setAttribute("list", "priorityName");
    selectInput.setAttribute("id", "dropMenu");
    selectInput.classList.add('class', 'form-control');

    const dataList = document.createElement("datalist");
    dataList.setAttribute("id", "priorityName");
    const lowOp = document.createElement("option");
    lowOp.innerHTML = "Low";
    lowOp.setAttribute("value", "Low");
    lowOp.selected = true;
    const mediumOp = document.createElement("option");
    mediumOp.innerHTML = "Medium";
    mediumOp.setAttribute("value", "Medium");
    const highOp = document.createElement("option");
    highOp.innerHTML = "High";
    highOp.setAttribute("value", "High");
        // Append the options
        selectInput.appendChild(lowOp);
        selectInput.appendChild(mediumOp);
        selectInput.appendChild(highOp);

    groupPriority.appendChild(selectLabel);
    groupPriority.appendChild(selectInput);

    // DATE
    const groupDate = document.createElement("div");
    groupDate.classList.add('class', 'form-group');

    const dateLabel = document.createElement("label");
    dateLabel.setAttribute("for", "date");
    dateLabel.innerHTML = "Due date: ";

    const dateInput = document.createElement("input");
    dateInput.setAttribute("name", "date");
    dateInput.setAttribute("id", "dateInput");
    dateInput.setAttribute("type", "date");
    dateInput.classList.add('class', 'form-control');

    groupDate.appendChild(dateLabel);
    groupDate.appendChild(dateInput);

    // append elements
    form.appendChild(groupTitle);
    form.appendChild(groupDescription);
    form.appendChild(groupPriority);
    form.appendChild(groupDate);

    form.appendChild(submitButton);

    return form;
}


