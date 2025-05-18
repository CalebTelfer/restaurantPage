export function loadPage() {
    const h1 = document.createElement("h1");
    h1.textContent = "Caleb's Restaurant";



    const contentContainer = document.createElement("div");
    contentContainer.style.display = "flex";
    contentContainer.style.flexDirection = "column";
    contentContainer.style.alignItems = "center";
    contentContainer.style.width = "30vw";
    contentContainer.style.height = "50vh";
    contentContainer.style.backgroundColor = "rgba(143, 201, 255, 0.84)";
    




    const h2 = document.createElement("h2");
    h2.textContent = "We are on the HOME page!";
    h2.style.width = "80%";
    h2.style.textAlign = "center";
    contentContainer.appendChild(h2);


    const hr = document.createElement("hr");
    hr.style.width = "80%";
    contentContainer.appendChild(hr);


    const p = document.createElement("p");
    p.textContent = "Page content! This is the home page! Home stuff goes here. We are a restaurant who sells food....";
    p.style.width = "80%";
    contentContainer.appendChild(p);



    const content = document.getElementById("content");
    content.appendChild(h1);
    content.appendChild(contentContainer);
}