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
    contentDiv.innerHTML = formContent;
}