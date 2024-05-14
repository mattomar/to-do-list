import { appendIncomingToContent } from "./DOM";
import { moveTaskCardsToIncomingTab} from "./form";

export function showIncoming() {
    const incomingTab = document.getElementById('incoming-tab');
    incomingTab.addEventListener('click', () => {
        appendIncomingToContent()
        moveTaskCardsToIncomingTab()
    });
}
