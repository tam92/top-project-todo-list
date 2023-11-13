export function populateStorage() {

    if (storageAvailable('localStorage')) {
        // We can use it
        const todo1 = {
            "title": "Lavadora",
            "description": "Poner una lavadora con las sábanas de la semana.",
            "dueDate": "17/11/2023",
            "priority": "High",
            "project": "Casa"
        };

        const todo2 = {
            "title": "Leer",
            "description": "Leer un libro al mes",
            "dueDate": "30/11/2023",
            "priority": "Low",
            "project": "Ocio"
        };
        localStorage.clear;
        localStorage.setItem('todo1', JSON.stringify(todo1));
        localStorage.setItem('todo2', JSON.stringify(todo2));

    } else {
        // we can't use it
        alert("Sorry, it seems browser doesn't support local storage");
    }
    
}


// -----------------------------------------------------------------------------
// Detects if localStorage is both supported and available
// -----------------------------------------------------------------------------
function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }
  