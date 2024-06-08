import { showIncoming } from "./incoming";
import { openForm, closeForm, getSubmittedName, createProjectTab, getSubmittedForm, moveProjectsToProjectsTab } from "./form";
import { showToday } from "./today";
import { showProject } from "./projects";
import { appendFormToContent } from "./DOM";

// Call the functions
showIncoming();
showToday()
showProject()
openForm();
closeForm();

// Call getSubmittedName to handle the submission of the project name
getSubmittedName(function(projectName, event) {
    event.preventDefault(); // Prevent form submission
    // Create a new tab for the submitted project name
    const projectTab = createProjectTab(projectName);
    
    
    // Get reference to the wrapper container
    const projectsContainerWrapper = document.querySelector('.projects-container-wrapper');
    
    // Append the new project tab to the wrapper container
    projectsContainerWrapper.appendChild(projectTab);
    moveProjectsToProjectsTab()
});







