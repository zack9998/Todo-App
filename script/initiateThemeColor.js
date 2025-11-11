import { AppMainElement } from "./elements.js";
import { fetchData } from "./fetchData.js";
import { toggleWhiteMode } from "./toggleWhiteMode.js";

export const initiateThemeColor = () => {
  const darkMode = fetchData("darkMode");
  if (darkMode === false) {
    if (!AppMainElement.classList.contains("App-isWhite")) {
      toggleWhiteMode();
    }
  }
};
