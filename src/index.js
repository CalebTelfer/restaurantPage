import { loadHomePage } from "./home-page";
import { loadAboutPage } from "../about-page";
import "./styles.css";

loadHomePage();

function clearContent() {
    const content = document.getElementById("content");
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

const homeButton = document.getElementById("home");
homeButton.addEventListener("click", function() {
    clearContent();
    loadHomePage();
})



const aboutButton = document.getElementById("about");
aboutButton.addEventListener("click", function() {
    clearContent();
    loadAboutPage();
})