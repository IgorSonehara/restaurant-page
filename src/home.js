function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const title = document.createElement("h1");
    title.textContent = "Welcome!"

    const foodImage = document.createElement("img");
    foodImage.src = 'images/pexels-ready-made-4021955.jpg';
    
    home.appendChild(title);
    home.appendChild(foodImage);

    return home;
}
  
function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}
  
export default loadHome;