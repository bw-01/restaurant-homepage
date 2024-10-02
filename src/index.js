console.log("Hello world");

import "./styles.css";
import { homepageLoad } from "./homepage-load.js";
import { menupageLoad } from "./menupage-load.js";
import { aboutpageLoad } from "./aboutpage-load.js";

homepageLoad();

const navButtons = document.querySelector("nav");

function clearPage () {
    const contentDiv = document.getElementById("content");
    contentDiv.textContent = "";    
}

navButtons.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    let page = event.target.textContent;
    clearPage();
    if (page === "Home") {
      homepageLoad();
    }
    if (page === "Menu") {
      menupageLoad();
    }
    if (page === "About") {
      aboutpageLoad();
    }
  }
});
