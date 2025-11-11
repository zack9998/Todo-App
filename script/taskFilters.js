import { attachCheckListeners } from "./checkItem.js";
import { renderTasklist } from "./renderTaskList.js";

export const tasksFilters = (array, currentFilter = "all") => {
  let filteredTasks = [];

  switch (currentFilter) {
    case "active":
      filteredTasks = array.filter((task) => !task.isCompleted);
      break;

    case "completed":
      filteredTasks = array.filter((task) => task.isCompleted);
      break;

    case "clearCompleted":

    default:
      filteredTasks = array;
  }

  renderTasklist(filteredTasks, currentFilter);
  attachCheckListeners();
};
