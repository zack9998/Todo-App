import {
  actionButton,
  AppMainElement,
  filterButton,
  htmlElement,
  inputElement,
  listElement,
  mobileFilterElement,
  toggleElement,
} from "./elements.js";

export const toggleWhiteMode = () => {
  AppMainElement.classList.toggle("App-isWhite");
  filterButton.forEach((element) => {
    element.classList.toggle("App__filter-blueHover");
  });
  actionButton.forEach((element) => {
    element.classList.toggle("App__action-blueHover");
  });

  listElement.classList.toggle("App__list-isWhite");

  if (AppMainElement.classList.contains("App-isWhite")) {
    // Light mode
    localStorage.setItem("darkMode", false);

    // CHANGE: Set all background properties, not just the image
    htmlElement.style.backgroundImage = "url('./images/bg-desktop-light.jpg')";
    htmlElement.style.backgroundSize = "cover";
    htmlElement.style.backgroundPosition = "center";
    htmlElement.style.backgroundRepeat = "no-repeat";
    htmlElement.style.backgroundAttachment = "fixed";

    toggleElement.src = "./images/icon-moon.svg";
    inputElement.style.backgroundColor = "hsl(236, 33%, 92%)";
    listElement.style.backgroundColor = "hsl(236, 33%, 92%)";
    mobileFilterElement.style.backgroundColor = "hsl(236, 33%, 92%)";
  } else {
    // Dark mode
    localStorage.setItem("darkMode", true);
    htmlElement.style.backgroundImage = "url('./images/bg-desktop-dark.jpg')";
    htmlElement.style.backgroundSize = "cover";
    htmlElement.style.backgroundPosition = "center top";
    htmlElement.style.backgroundRepeat = "no-repeat";
    htmlElement.style.backgroundAttachment = "fixed";
    toggleElement.src = "./images/icon-sun.svg";
    inputElement.style.backgroundColor = "hsl(237, 14%, 26%)";
    listElement.style.backgroundColor = "hsl(237, 14%, 26%)";
    mobileFilterElement.style.backgroundColor = "hsl(237, 14%, 26%)";
  }
};

