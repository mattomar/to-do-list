import { appendFormToContent } from "./DOM";
appendFormToContent()

const fixedButton = document.querySelector('.fixed-button');
const popUp = document.querySelector('.popup-modal'); 


export function openForm() {
    fixedButton.addEventListener('click', function () {
        popUp.style.display = "flex";
    });
    console.log("Fixed button:", fixedButton);
}

export function closeForm() {
    document.addEventListener('click', function(event) {
        let targetElement = event.target;
        let isButtonClicked = false;
        let isFormClicked = false;

        // Check if the clicked element or any of its ancestors match the fixedButton class or projectForm id
        while (targetElement !== null) {
            if (targetElement === fixedButton) {
                isButtonClicked = true;
                break;
            }
            if (targetElement.id === "projectForm") {
                isFormClicked = true;
                break;
            }
            targetElement = targetElement.parentElement;
        }

        // Close the pop-up modal if the click event did not occur on the fixed button, form, or the pop-up modal itself
        if (!isButtonClicked && !isFormClicked && event.target !== popUp) {
            popUp.style.display = "none";
            console.log(event.target)
        }
    });
}



export function getSubmittedName(callback) {
    const form = document.getElementById('projectForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        const projectName = form.elements.projectName.value;

        // Add the project name as a new tab under Projects
        callback(projectName);

        // Reset the form
        form.reset();
    });
}

export function createProjectTab(projectName) {
    const projectTab = document.createElement('button');
    projectTab.textContent = projectName;
    projectTab.classList.add('project-tab');
    return projectTab;
}
