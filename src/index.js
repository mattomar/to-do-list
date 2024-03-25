import { openForm, closeForm} from "./form";
openForm()
closeForm()

import { getSubmittedName } from "./form";
import { createProjectTab } from "./form"; // Import the createProjectTab function

// Call getSubmittedName to handle the submission of the project name
getSubmittedName(function(projectName) {
    // Create a new tab for the submitted project name
    const projectTab = createProjectTab(projectName);
    
    // Get reference to the wrapper container
    const projectsContainerWrapper = document.querySelector('.projects-container-wrapper');
    
    // Append the new project tab to the wrapper container
    projectsContainerWrapper.appendChild(projectTab);
});