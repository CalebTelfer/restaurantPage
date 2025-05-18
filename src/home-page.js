export function loadHomePage() {
    const h1 = document.createElement("h1");
    h1.style.marginTop = "2rem";
    h1.textContent = "Caleb's Restaurant";



    const contentContainer = document.createElement("div");
    contentContainer.style.display = "flex";
    contentContainer.style.flexDirection = "column";
    contentContainer.style.alignItems = "center";
    contentContainer.style.width = "30vw";
    contentContainer.style.height = "50vh";
    contentContainer.style.backgroundColor = "rgba(143, 201, 255, 0.85)";
    contentContainer.style.borderRadius = "10px";
    




    const h2 = document.createElement("h2");
    h2.textContent = "We are on the HOME page!";
    h2.style.width = "80%";
    h2.style.textAlign = "center";
    h2.style.marginTop = "2rem";
    contentContainer.appendChild(h2);


    const hr = document.createElement("hr");
    hr.style.width = "80%";
    hr.style.marginTop = "1rem";
    contentContainer.appendChild(hr);


    const p = document.createElement("p");
    p.textContent = "Page content! This is the home page! Home stuff goes here. We are a restaurant who sells food....";
    p.style.width = "80%";
    p.style.marginTop = "1.5rem";
    contentContainer.appendChild(p);



    const content = document.getElementById("content");
    content.appendChild(h1);
    content.appendChild(contentContainer);


    const homeButton = document.getElementById("home");
    homeButton.style.backgroundColor = "rgb(150, 147, 240)";
    homeButton.style.height = "2.5rem";
    homeButton.style.width = "8.5rem";
    homeButton.style.border = "2px white solid";

    const aboutButton = document.getElementById("about");
    aboutButton.style.backgroundColor = "white";
    aboutButton.style.height = "2rem";
    aboutButton.style.width = "8rem";
    aboutButton.style.border = "none";

    const menuButton = document.getElementById("menu");
    menuButton.style.backgroundColor = "white";
    menuButton.style.height = "2rem";
    menuButton.style.width = "8rem";
    menuButton.style.border = "none";

}