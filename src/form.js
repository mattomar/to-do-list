import { appendFormToContent, appendButtonContainerToContent } from "./DOM";

appendFormToContent();

const fixedButton = document.querySelector('.fixed-button');
const popUp = document.querySelector('.popup-modal');
const contentDiv = document.getElementById('content');

let isFormOpen = false; // Flag to track if the form is open

export function openForm() {
    if (!isFormOpen) {
        fixedButton.addEventListener('click', function () {
            popUp.style.display = "flex";
            contentDiv.appendChild(popUp);
            isFormOpen = true; // Update the flag
        });
    }
}

export function closeForm() {
    if (!isFormOpen) {
        document.addEventListener('click', function (event) {
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
                console.log(event.target);
                isFormOpen = false; // Update the flag
            }
        });
    }
}
// Create a Set to keep track of existing project names
const existingProjectNames = new Set();

// Function to get the submitted project name and handle the form submission
export function getSubmittedName(callback) {
    const form = document.getElementById('projectForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        const projectName = form.elements.projectName.value.trim(); // Get the project name

        // Check if the project name already exists
        if (existingProjectNames.has(projectName)) {
            // If the project name already exists, show a cute popup error message
            showErrorPopup(`Project name "${projectName}" already exists. Please choose a different name.`);
            return; // Exit the function to prevent creating a duplicate project tab
        }

        // Add the project name to the set of existing project names
        existingProjectNames.add(projectName);

        // Add the project name as a new tab under Projects
        callback(projectName, event); // Pass event object to the callback

        // Reset the form
        form.reset();
    });
}

// Function to show a cute popup error message
function showErrorPopup(message) {
    // Create a div element for the popup
    const popup = document.createElement('div');
    popup.textContent = message;
    popup.style.position = 'fixed';
    popup.style.top = '10%';
    popup.style.left = '50%';
    popup.style.transform = 'translateX(-50%)';
    popup.style.padding = '10px 20px';
    popup.style.backgroundColor = '#f8d7da';
    popup.style.color = '#721c24';
    popup.style.border = '1px solid #f5c6cb';
    popup.style.borderRadius = '5px';
    popup.style.zIndex = '1000';

    // Append the popup to the body
    document.body.appendChild(popup);

    // Remove the popup after 3 seconds
    setTimeout(() => {
        document.body.removeChild(popup);
    }, 3000);
}

export function getSubmittedForm(callback) {
    console.log("weeeeeee")
    const taskForm = document.getElementById('taskForm');


    taskForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Ensure that the default form submission behavior is prevented

        const taskName = taskForm.elements.taskName.value;
        const startDate = taskForm.elements.startDate.value;
        const finishDate = taskForm.elements.finishDate.value;
        const priorityLevel = taskForm.elements.priorityLevel.value;

        // Check if all fields are filled
        if (taskName && startDate && finishDate && priorityLevel) {
            // Call the callback function with the form data
            callback(taskName, startDate, finishDate, priorityLevel);
        } else {
            alert('Please fill out all fields.');
        }
    });

}





export function createButtonForTab() {


    // Declare buttonForTab locally
    const buttonForTab = document.createElement('button');
    buttonForTab.setAttribute('id', 'buttonForTab');
    buttonForTab.textContent = "Add a task"; // Set text content

    // Add event listener to the button to show the task form
    buttonForTab.addEventListener('click', () => {
        toggleTaskFormVisibility();
        getSubmittedForm(createTaskCard)
    });

    // Create buttonForTabContainer and append buttonForTab
    const newButtonForTabContainer = document.createElement('div');
    newButtonForTabContainer.setAttribute('id', 'buttonForTabContainer');
    newButtonForTabContainer.appendChild(buttonForTab);

    // Append buttonForTabContainer to content
    document.getElementById('content').appendChild(newButtonForTabContainer);
}



let currentProjectTabID = null; 

export function createProjectTab(projectName) {

    const projectTab = document.createElement('button');
    projectTab.textContent = projectName;
    projectTab.classList.add('sub-tab');

    const tabID = `project-tab-${projectName.replace(/\s/g, '-').toLowerCase()}`;
    projectTab.id = tabID;

    const tabContent = document.createElement('div');
    tabContent.classList.add('tab-content');
    tabContent.id = tabID
    contentArray.push(tabContent);


    projectTab.addEventListener('click', () => {
        // Hide all content elements
        contentArray.forEach(content => {
            content.style.display = 'none';
        });
        // Show the corresponding content
        appendFormToContent()
        tabContent.style.display = 'block';
        createButtonForTab()
        document.getElementById('content').appendChild(tabContent)
        currentProjectTabID = tabID;
        console.log(currentProjectTabID)

    });


    // Push the created tab into the array
    projectTabs.push(projectTab);
    console.log(projectTabs)
    console.log(contentArray)


    return projectTab;
}

// Create an array to hold the tabs
const projectTabs = [];
const contentArray = [];


function createTaskCard(taskName, startDate, finishDate, priorityLevel) {
    const taskCard = document.createElement('div');
    taskCard.classList.add('task-card');

    // Create elements for task details
    const taskNameElement = document.createElement('h3');
    taskNameElement.textContent = "Task: " + taskName;

    const startDateElement = document.createElement('p');
    startDateElement.textContent = "Start Date: " + startDate;

    const finishDateElement = document.createElement('p');
    finishDateElement.textContent = "Finish Date: " + finishDate;

    const priorityLevelElement = document.createElement('p');
    priorityLevelElement.textContent = "Priority: " + priorityLevel;

    // Append task details to task card
    taskCard.appendChild(taskNameElement);
    taskCard.appendChild(startDateElement);
    taskCard.appendChild(finishDateElement);
    taskCard.appendChild(priorityLevelElement);
    appendTaskCardToProject(taskCard)


}


function appendTaskCardToProject(taskCard) {
    // Iterate through the contentArray to find the corresponding tab content
    for (let i = 0; i < contentArray.length; i++) {
        const tabContent = contentArray[i];

        // Check if the current project tab ID matches the tab content ID
        if (tabContent.id === currentProjectTabID) {
            // Append the task card to the tab content
            tabContent.appendChild(taskCard);
            break; // Exit the loop once the match is found and task card is appended
        }
    }
}

function toggleTaskFormVisibility() {
    const taskPopUp = document.getElementById('taskForm');
    if (taskPopUp.style.display === 'none' || !taskPopUp.style.display) {
        taskPopUp.style.display = 'block';
    } else {
        taskPopUp.style.display = 'none';
    }
}



