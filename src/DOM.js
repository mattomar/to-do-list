export function setHTMLContent(html) {
    const contentDiv = document.getElementById("content")
    contentDiv.innerHTML = html
}



export function appendFormToContent() {
    const formContent = `<div class="popup-modal" id="projectFormModal">
        <form id="projectForm" class="form-container">
            <h2>Create New Project</h2>
            <label for="projectName">Project Name:</label>
            <input type="text" name="projectName" required>
            <button type="submit">Create Project</button>
        </form>
    </div>

    
    
    <form id="taskForm">
    <label for="taskName">Task Name:</label><br>
    <input type="text" id="taskName" name="taskName" required><br>

    <label for="startDate">Start Date:</label><br>
    <input type="date" id="startDate" name="startDate" required><br>

    <label for="finishDate">Finish Date:</label><br>
    <input type="date" id="finishDate" name="finishDate" required><br>

    <label for="priorityLevel">Priority Level:</label><br>
    <select id="priorityLevel" name="priorityLevel" required>
        <option value="">Select Priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
    </select><br>

    <button type="submit"">Submit</button>
    </form>
    
    `;

    setHTMLContent(formContent)
}


export function appendIncomingToContent() {
    const incomingContent = `<div class="home-container">
    <div class="home-header">
        <i class="fas fa-inbox" style="color: #0091ff; font-size: 22px;"></i>
        <p style="font-size: 22px;">Incoming</p>
    </div>
</div>





    <form id="taskForm">
    <label for="taskName">Task Name:</label><br>
    <input type="text" id="taskName" name="taskName" required><br>

    <label for="startDate">Start Date:</label><br>
    <input type="date" id="startDate" name="startDate" required><br>

    <label for="finishDate">Finish Date:</label><br>
    <input type="date" id="finishDate" name="finishDate" required><br>

    <label for="priorityLevel">Priority Level:</label><br>
    <select id="priorityLevel" name="priorityLevel" required>
        <option value="">Select Priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
    </select><br>

    <button type="submit"">Submit</button>
    </form>
    <div id="incoming-tab-content">
    </div>
`;

    setHTMLContent(incomingContent)


}


export function appendTodayToContent() {
    const incomingContent = `<div class="today-container">
    <div class="today-header">
    <i class="fa-regular fa-star" style="color: #ffae00;"></i>
    <p style="font-size: 22px;">Today</p>
    </div>
</div>





    <form id="taskForm">
    <label for="taskName">Task Name:</label><br>
    <input type="text" id="taskName" name="taskName" required><br>

    <label for="startDate">Start Date:</label><br>
    <input type="date" id="startDate" name="startDate" required><br>

    <label for="finishDate">Finish Date:</label><br>
    <input type="date" id="finishDate" name="finishDate" required><br>

    <label for="priorityLevel">Priority Level:</label><br>
    <select id="priorityLevel" name="priorityLevel" required>
        <option value="">Select Priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
    </select><br>

    <button type="submit"">Submit</button>
    </form>
    <div id="today-tab-content">
    </div>
`;

    setHTMLContent(incomingContent)


}

export function appendProjectToContent() {
    const projectContent = `<div class="project-container">
    <div class="project-header">
    <i class="fa-solid fa-calendar-days"style="color: #ff0000;"></i>
       <p style="font-size: 22px;">Project</p>
    </div>
</div>





    <form id="taskForm">
    <label for="taskName">Task Name:</label><br>
    <input type="text" id="taskName" name="taskName" required><br>

    <label for="startDate">Start Date:</label><br>
    <input type="date" id="startDate" name="startDate" required><br>

    <label for="finishDate">Finish Date:</label><br>
    <input type="date" id="finishDate" name="finishDate" required><br>

    <label for="priorityLevel">Priority Level:</label><br>
    <select id="priorityLevel" name="priorityLevel" required>
        <option value="">Select Priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
    </select><br>

    <button type="submit"">Submit</button>
    </form>
    <div id="project-tab-content">
    </div>
`;


    setHTMLContent(projectContent)
}


export function appendButtonContainerToContent() {
    const buttonForTabContainerContent =
        ` <div id="buttonForTabContainer">
        <button id="buttonForTab">Add a task</button>
        </div>

        

    <form id="taskForm">
    <label for="taskName">Task Name:</label><br>
    <input type="text" id="taskName" name="taskName" required><br>

    <label for="startDate">Start Date:</label><br>
    <input type="date" id="startDate" name="startDate" required><br>

    <label for="finishDate">Finish Date:</label><br>
    <input type="date" id="finishDate" name="finishDate" required><br>

    <label for="priorityLevel">Priority Level:</label><br>
    <select id="priorityLevel" name="priorityLevel" required>
        <option value="">Select Priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
    </select><br>

    <button type="submit"">Submit</button>
    </form>
        `

    setHTMLContent(buttonForTabContainerContent)

}