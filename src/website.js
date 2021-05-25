import loadHome from "./home";
import loadContact from "./contact";
import loadAbout from "./about";
import loadMenu from "./menu";

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const restaurantName = document.createElement("h1");
    restaurantName.textContent = "Not McDonald's";

    const nav = document.createElement("nav");

    const ul = document.createElement("ul");
    ul.classList.add("menu-ul");

    const home = document.createElement("li");
    const menu = document.createElement("li");
    const about = document.createElement("li");
    const contact = document.createElement("li");

    home.textContent = "Home";
    menu.textContent = "Menu";
    about.textContent = "About";
    contact.textContent = "Contact";

    home.addEventListener("click", loadHome);
    menu.addEventListener("click", loadMenu);
    about.addEventListener("click", loadAbout);
    contact.addEventListener("click", loadContact);

    ul.appendChild(home);
    ul.appendChild(menu);
    ul.appendChild(about);
    ul.appendChild(contact);

    nav.appendChild(ul);

    header.appendChild(restaurantName);
    header.appendChild(nav);
    
    return header;
}

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");

    return main;
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const p = document.createElement("p");
    p.textContent = "Footer";

    footer.appendChild(p);

    return footer;
}

function initializeWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
    loadHome();
}

export default initializeWebsite;