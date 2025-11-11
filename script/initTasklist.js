import { renderTasklist } from "./renderTaskList.js";

export const initTaskList = (tasks) => {
  renderTasklist(tasks || []);
};
