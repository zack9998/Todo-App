import { attachCheckListeners } from "./checkItem.js";
import { inputField, listElement } from "./elements.js";

export const renderTasklist = (tasks, currentFilter = "all") => {
  const allTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  let taskList = "";

  tasks.forEach((task, filteredIndex) => {
    let originalIndex = filteredIndex;

    if (currentFilter !== "all") {
      originalIndex = allTasks.findIndex(
        (t, idx) =>
          t.value === task.value &&
          t.isCompleted === task.isCompleted &&
          !taskList.includes(`data-index="${idx}"`)
      );
    }

    taskList += `
      <li class="App__list-item ${
        task.isCompleted ? "" : "App__list-item--active"
      }" data-index="${originalIndex}">
        <div>
        <button class="App__list-checkbox" 
          style="${
            task.isCompleted
              ? "background-image: linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%)); border-color: hsl(192, 100%, 67%);"
              : ""
          }">
            <img src="./images/icon-check.svg" alt="check-task" class="App__list-checkbox-checked" 
            style="opacity : ${task.isCompleted ? 1 : 0};" />
         </button>
    
          <span class="App__list-text"style="text-decoration: ${
            task.isCompleted ? "line-through" : "none"
          };" >${task.value}</span>
        </div>
        <button class="App__delete-task">
          <img src="./images/icon-cross.svg" alt="delete task" />
        </button>
      </li>
      
      `;
  });

  listElement.innerHTML =
    taskList +
    `<div class="App__controls App__list-item">
            <div>
              <p class="App__count">
                <span class="App__count-number">${
                  allTasks.filter((t) => !t.isCompleted).length
                }</span> items left
              </p>
            </div>
            <div class="App__filters">
              <button class="App__filter App__filter--all App__filter-blueHover ${
                currentFilter === "all" ? "App__filter-clicked" : ""
              }">All</button>
              <button class="App__filter App__filter--active App__filter-blueHover ${
                currentFilter === "active" ? "App__filter-clicked" : ""
              }" >Active</button>
              <button class="App__filter App__filter--completed App__filter-blueHover ${
                currentFilter === "completed" ? "App__filter-clicked" : ""
              }">
                Completed
              </button> 
            </div> 
            <div class="App__actions">
              <button class="App__action App__action--clear App__action-blueHover ${
                currentFilter === "clearCompleted" ? "App__filter-clicked" : ""
              }">
                Clear Completed
              </button>
            </div>
          </div>`;
  inputField.value = "";
  attachCheckListeners();
};
