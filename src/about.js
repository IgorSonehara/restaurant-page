function createAbout() {
    const about = document.createElement("div");
    about.classList.add("about");

    const title = document.createElement("h1");
    title.textContent = "About Us"

    const description = document.createElement("div");
    description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius ex id eros euismod placerat. Suspendisse sollicitudin sem et condimentum dictum. Mauris vitae elit quis turpis tempus dictum. Morbi ut libero cursus diam bibendum efficitur in ac lectus. Aliquam tempor vitae lorem id efficitur. Praesent eu elementum massa. Vivamus at pellentesque erat. Curabitur gravida velit id tortor accumsan pellentesque. Sed varius porta luctus. Vivamus a sollicitudin nibh, quis bibendum ex. Fusce et accumsan nisl. Donec vitae arcu pharetra, tempus mauris non, tempor erat. Nulla cursus et est vitae pulvinar. Curabitur luctus nibh vel dui venenatis, sed sodales nisi dignissim. In hac habitasse platea dictumst. Aenean rutrum suscipit dui, maximus pulvinar arcu scelerisque id. Pellentesque eget aliquet turpis. Duis a purus aliquam, pharetra tortor a, varius urna. Aenean mattis risus semper, accumsan felis luctus, imperdiet elit. Phasellus nec ultricies tellus, et pulvinar lorem. Sed pharetra sodales leo, nec ullamcorper nibh malesuada elementum. Phasellus ut nunc lobortis, sagittis nibh ut, dignissim massa. Maecenas sit amet finibus tellus. Maecenas rutrum neque arcu, ac elementum ligula lobortis mattis. Fusce nec metus iaculis, rhoncus augue nec, sollicitudin felis.";

    about.appendChild(title);
    about.appendChild(description);
  
    return about;
}
  
function loadAbout() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createAbout());
}
  
export default loadAbout;