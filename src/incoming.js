import { appendIncomingToContent } from "./DOM";

export function showIncoming() {
    const incomingTab = document.getElementById('incoming-tab');
    incomingTab.addEventListener('click', appendIncomingToContent);
}

