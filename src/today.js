import { appendTodayToContent } from "./DOM";
import { appendTaskForTodayArrayToTodayTab, appendTaskCardToTasksForTodayArray } from "./form";

export function showToday() {
    const todayTab = document.getElementById('today-tab');
    todayTab.addEventListener('click', () => {
        appendTodayToContent();
        appendTaskCardToTasksForTodayArray()
    });
}
