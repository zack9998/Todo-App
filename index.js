import { addTask } from "./script/addTask.js";
import { attachCheckListeners } from "./script/checkItem.js";
import { clearCompletedTasks } from "./script/clearCompleted.js";
import { deleteTask } from "./script/deleteTask.js";
import {
  activeFilter,
  allTaskFilter,
  clearCompletedButton,
  completedTaskFilter,
  darkThemeToggleElement,
  filterButton,
  inputElement,
  listElement,
  taskCounter,
} from "./script/elements.js";
import { saveToDB } from "./script/fetchData.js";
import { initiateThemeColor } from "./script/initiateThemeColor.js";
import { initTaskList } from "./script/initTasklist.js";
import { renderTasklist } from "./script/renderTaskList.js";
import { tasksFilters } from "./script/taskFilters.js";
import { toggleWhiteMode } from "./script/toggleWhiteMode.js";

window.addEventListener("DOMContentLoaded", () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  initiateThemeColor();
  renderTasklist(tasks);
  attachCheckListeners();
  allTaskFilter.classList.add("App__filter-clicked");
});

// Theme toggle
darkThemeToggleElement.addEventListener("keydown", (e) => {
  if (e.key === "Enter") toggleWhiteMode();
});
darkThemeToggleElement.addEventListener("click", toggleWhiteMode);

// Add task
inputElement.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});

// Delete task
listElement.addEventListener("click", (e) => {
  const deleteBtn = e.target.closest(".App__delete-task");
  if (!deleteBtn) return;

  const li = deleteBtn.closest("li");
  if (!li) return;

  const index = li.dataset.index;
  deleteTask(e, index);
});

//Filter tasks
document.addEventListener("click", (e) => {
  // Get current tasks from localStorage
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let filterType = null;

  if (e.target.closest(".App__filter--active")) {
    filterType = "active";
  } else if (e.target.closest(".App__filter--completed")) {
    filterType = "completed";
  } else if (e.target.closest(".App__filter--all")) {
    filterType = "all";
  }

  if (filterType) {
    filterButton.forEach((btn) => btn.classList.remove("App__filter-clicked"));
    e.target.closest(".App__filter").classList.add("App__filter-clicked");
    tasksFilters(tasks, filterType);
  }
});

// Clear completed tasks - using event delegation
listElement.addEventListener("click", (e) => {
  const clearBtn = e.target.closest(".App__action--clear");
  if (!clearBtn) return;

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const completedTasks = tasks.filter((task) => !task.isCompleted);
  renderTasklist(completedTasks, "all");
  saveToDB("tasks", completedTasks);
  initTaskList(completedTasks);
  attachCheckListeners();
});
