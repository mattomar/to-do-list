import { appendProjectToContent } from "./DOM";
import { moveProjectsToProjectsTab } from "./form";

export function showProject() {
    const projectTab = document.getElementById('projects-tab');
    projectTab.addEventListener('click', () => {
        appendProjectToContent()
        moveProjectsToProjectsTab()
    });
}
