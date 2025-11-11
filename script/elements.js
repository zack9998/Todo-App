export const darkThemeToggleElement =
  document.querySelector(".App__theme-toggle");
export const AppMainElement = document.querySelector(".App");
export const htmlElement = document.querySelector("html");
export const toggleElement = document.querySelector(".App__theme-toggle");
export const inputElement = document.querySelector(".App__input");
export const inputField = document.querySelector(".App__input-field");
export const listElement = document.querySelector(".App__list");
export const listChildElement = document.querySelectorAll(".App__list-item");
export const mobileFilterElement = document.querySelector(
  ".App__filters__mobile"
);
export const filterButton = document.querySelectorAll(".App__filter");
export const actionButton = document.querySelectorAll(".App__action");
export const taskCounter = document.querySelector(".App__count-number");

export const getDeleteIcons = () =>
  document.querySelectorAll(".App__delete-task");

export const getButtons = () =>
  document.querySelectorAll(".App__list-checkbox");

export const getCheckButtons = () =>
  document.querySelectorAll(".App__list-checkbox-checked");

export const getListTexts = () => document.querySelectorAll(".App__list-text");
export const activeFilter = document.querySelector(".App__filter--active");
export const completedTaskFilter = document.querySelector(
  ".App__filter--completed"
);
export const allTaskFilter = document.querySelector(".App__filter--all");
export const clearCompletedButton = document.querySelector(
  ".App__action--clear"
);
