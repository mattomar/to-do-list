import { showIncoming } from "./incoming";
import { openForm, closeForm, getSubmittedName, createProjectTab, getSubmittedForm } from "./form";


// Call the functions
showIncoming();
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
});







