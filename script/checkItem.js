import {
  getButtons,
  activeFilter,
  completedTaskFilter,
  allTaskFilter,
  taskCounter,
} from "./elements.js";
import { fetchData, saveToDB } from "./fetchData.js";
import { tasksFilters } from "./taskFilters.js";

export const checkItem = (e) => {
  const button = e.currentTarget;
  const li = button.closest(".App__list-item");

  // Get tasks from storage
  const tasks = fetchData("tasks") || [];

  // Use the data-index to find the correct task
  const index = li.dataset.index;
  const task = tasks[index];
  if (!task) return; // safety check

  // Toggle task completed status
  task.isCompleted = !task.isCompleted;

  // Save to localStorage
  saveToDB("tasks", tasks);

  // Update counter
  const activeCount = tasks.filter((t) => !t.isCompleted).length;
  taskCounter.textContent = activeCount;

  if (activeFilter.classList.contains("App__filter-clicked")) {
    tasksFilters(tasks, "active");
  } else if (completedTaskFilter.classList.contains("App__filter-clicked")) {
    tasksFilters(tasks, "completed");
  } else {
    tasksFilters(tasks, "all");
  }
};

export const attachCheckListeners = () => {
  const buttons = getButtons();
  buttons.forEach((button) => {
    button.addEventListener("click", checkItem);
  });
};
