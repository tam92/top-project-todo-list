// Creates and returns a single card
export function createCard(title, description, dueDate, priority, project) {
    
    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    const cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body');

    const titleCard = document.createElement('h3');
    titleCard.setAttribute("class", "card-title");
    titleCard.innerText = title;

    const descriptionCard = document.createElement('p');
    descriptionCard.innerText = description;

    const dueDateCard = document.createElement('p');
    dueDateCard.innerText = "Due date: " + dueDate;

    const priorityCard = document.createElement('p');
    priorityCard.innerText = "Priority: " + priority;

    const projectCard = document.createElement('p');
    projectCard.innerText = project;

    cardBody.appendChild(titleCard);
    cardBody.appendChild(descriptionCard);
    cardBody.appendChild(dueDateCard);
    cardBody.appendChild(priorityCard);
    cardBody.appendChild(projectCard);

    card.appendChild(cardBody);

    return card;
}

// Creates and retuns an empty card group
export function createCardGroup() {
    
    const cardGroup = document.createElement('div');
    cardGroup.setAttribute('class', 'card-group');

    return cardGroup;
}

// Creates and returns a form to add a new TODO
export function createForm() {
    const form = document.createElement('form');

    const submitButton = document.createElement("button");
    submitButton.setAttribute("id", "add-todo");
    submitButton.innerHTML = "Add new TODO!";
    submitButton.setAttribute('class', 'form-control');
    

    // TITLE
    const groupTitle = document.createElement("div");
    groupTitle.setAttribute('class', 'form-group');

    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title");
    titleLabel.innerHTML = "Title:";

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("id", "title");
    titleInput.setAttribute('class', 'form-control');
    titleInput.required = true;
    titleInput.autofocus = true;

    groupTitle.appendChild(titleLabel);
    groupTitle.appendChild(titleInput);

    // DESCRIPTION
    const groupDescription = document.createElement("div");
    groupDescription.setAttribute('class', 'form-group');

    const descriptionLabel = document.createElement("label");
    descriptionLabel.setAttribute("for", "description");
    descriptionLabel.innerHTML = "Description:";

    const descriptionInput = document.createElement("textarea");
    descriptionInput.setAttribute("name", "description");
    descriptionInput.setAttribute("id", "description");
    descriptionInput.setAttribute('class', 'form-control');
    // descriptionInput.required = true;

    groupDescription.appendChild(descriptionLabel);
    groupDescription.appendChild(descriptionInput);

    // PRIORITY
    const groupPriority = document.createElement("div");
    groupPriority.setAttribute('class', 'form-group');

    const selectLabel = document.createElement("label");
    selectLabel.setAttribute("for", "priority");
    selectLabel.innerHTML = "Priority:";

    const selectInput = document.createElement("select");
    selectInput.setAttribute("name", "priority")
    selectInput.setAttribute("list", "priorityName");
    selectInput.setAttribute("id", "dropMenu");
    selectInput.setAttribute('class', 'form-control');

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

    groupPriority.appendChild(selectLabel);
    groupPriority.appendChild(selectInput);

    // DATE
    const groupDate = document.createElement("div");
    groupDate.setAttribute('class', 'form-group');

    const dateLabel = document.createElement("label");
    dateLabel.setAttribute("for", "date");
    dateLabel.innerHTML = "Due date: ";

    const dateInput = document.createElement("input");
    dateInput.setAttribute("name", "date");
    dateInput.setAttribute("id", "dateInput");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute('class', 'form-control');

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