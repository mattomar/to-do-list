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
    </div>`;

    setHTMLContent(formContent)
}


export function appendIncomingToContent() {
    const incomingContent = `<div class="home-container">
    <div class="home-header">
        <i class="fas fa-inbox" style="color: #0091ff; font-size: 22px;"></i>
        <p style="font-size: 22px;">Incoming</p>
    </div>
</div>`;

setHTMLContent(incomingContent)


}



