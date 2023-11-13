// Module: only one element needed
// Factory or Class: multiple elements
// (Classes break the Open/Closed SOLID principle)

// =============================================================================
// Factory function: Creates TODO object
// =============================================================================

export default function todoFactory(title, description, dueDate, priority, project = 'default') {

    let _title = title;
    let _description = description;
    let _dueDate = dueDate;
    let _priority = priority;
    // let _notes = notes;
    // let _checklist = checklist;
    let _project = project;

    return {
        // Getter methods
        getTitle() {return _title;},
        getDescription() {return _description;},
        getDueDate() {return _dueDate;},
        getPriority() {return _priority;},
        // getNotes() {return _notes;},
        // getChecklist() {return _checklist;},
        getProject() {return _project;},

        // Setter methods
        setTitle(newTitle) {_title = newTitle;},
        setDescription(newDescription) {_description = newDescription;},
        setDueDate(newDueDate) {_dueDate = newDueDate;},
        setPriority(newPriority) {_priority = newPriority;},
        // setNotes(newNotes) {_notes = newNotes;},
        // setChecklist(newChecklist) {_checklist = newChecklist;},
        setProject(newProject) {_project = newProject;},
    };
}