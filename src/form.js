import { appendFormToContent } from "./DOM";
appendFormToContent()

const fixedButton = document.querySelector('.fixed-button');
const popUp = document.querySelector('.popup-modal'); 
const contentDiv = document.getElementById('content');



export function openForm() {
    fixedButton.addEventListener('click', function () {
        popUp.style.display = "flex";
        contentDiv.appendChild(popUp);
    });
    
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
    projectTab.classList.add('sub-tab');
    return projectTab;
}





let buttonForTab;

export function handleSubTabClick(event) {
    if (event.target.classList.contains('sub-tab')) {
        // Check if the button already exists, if not, create and append it
        if (!buttonForTab) {
            buttonForTab = document.createElement('button');
            buttonForTab.setAttribute('id', 'buttonForTab');
            buttonForTab.textContent = "Add a task"; // Set text content

            const buttonForTabContainer = document.createElement('div');
            buttonForTabContainer.setAttribute('id', 'buttonForTabContainer');
            buttonForTabContainer.appendChild(buttonForTab);

            document.getElementById('content').appendChild(buttonForTabContainer);

            // Add event listener to the button to show the task form
            buttonForTab.addEventListener('click', function() {
                
                toggleTaskFormVisibility();
            });
        }

        return buttonForTab; 
    }
}

function toggleTaskFormVisibility() {
    const taskPopUp = document.getElementById('taskForm'); // Remove the '#' symbol
    if (taskPopUp.style.display === 'none' || !taskPopUp.style.display) { // Check for both 'none' and undefined
        taskPopUp.style.display = 'block';
    } else {
        taskPopUp.style.display = 'none';
    }
}