import { inputField, taskCounter } from "./elements.js";
import { fetchData, saveToDB } from "./fetchData.js";
import { initTaskList } from "./initTasklist.js";
import { attachCheckListeners } from "./checkItem.js";

export const addTask = () => {
  const taskValue = inputField.value.trim();
  if (!taskValue) return;

  const task = {
    value: taskValue,
    isCompleted: false,
  };

  const tasks = fetchData("tasks") || [];

  tasks.push(task);

  saveToDB("tasks", tasks);

  initTaskList(tasks);

  inputField.value = "";

  taskCounter.textContent = tasks.length;

  attachCheckListeners();
};
