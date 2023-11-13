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