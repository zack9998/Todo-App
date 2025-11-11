import { attachCheckListeners } from "./checkItem.js";
import { fetchData, saveToDB } from "./fetchData.js";
import { initTaskList } from "./initTasklist.js";

export const deleteTask = (e, index) => {
  const answer = confirm("Are you sure you want to delete the task?");
  if (answer === false) return;
  const tasks = fetchData("tasks");
  tasks.splice(index, 1);
  saveToDB("tasks", tasks);
  initTaskList(tasks);
  attachCheckListeners();
};
