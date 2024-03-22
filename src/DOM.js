export function appendFormToContent() {
    const formContent = `<div class="popup-modal" id="projectFormModal">
        <form id="projectForm" class="form-container">
            <h2>Create New Project</h2>
            <label for="projectName">Project Name:</label>
            <input type="text" name="projectName" required>
            <button type="submit">Create Project</button>
        </form>
    </div>`;

    const contentDiv = document.getElementById("content");
    contentDiv.insertAdjacentHTML('beforeend', formContent); 
}


export function appendHomeToContent() {
    const homeContent = `<div class="home-container">
    <div class="home-header">
        <i class="fas fa-inbox" style="color: #0091ff; font-size: 22px;"></i>
        <p style="font-size: 22px;">Incoming</p>
    </div>
</div>`;

    const contentDiv = document.getElementById("content");
    contentDiv.insertAdjacentHTML('beforeend', homeContent); 

}



import { getSubmittedName } from "./form";
import { createProjectTab } from "./form"; // Import the createProjectTab function

// Call getSubmittedName to handle the submission of the project name
getSubmittedName(function(projectName) {
    // Create a new tab for the submitted project name
    const projectTab = createProjectTab(projectName);
    
    // Append the new project tab to the container
    const projectsTabContainer = document.querySelector('.tabs-container');
    projectsTabContainer.appendChild(projectTab);
});