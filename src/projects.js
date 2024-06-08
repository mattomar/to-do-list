import { appendProjectToContent } from "./DOM";
import { displayClonedProjectsInTab, moveProjectsToProjectsTab } from "./form";

export function showProject() {
    const projectTab = document.getElementById('projects-tab');
    projectTab.addEventListener('click', () => {
        appendProjectToContent()
        displayClonedProjectsInTab()
        
    });
}
