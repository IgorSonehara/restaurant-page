function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const title = document.createElement("h1");
    title.textContent = "Contact"

    const phone = document.createElement("div");
    phone.textContent = "Phone: 01 2345 6789";

    const email = document.createElement("div");
    email.textContent = "Email: contact@notmcdonalds.com"

    const address = document.createElement("div");
    address.textContent = "Address: 1489  Raccoon Run";

    contact.appendChild(title);
    contact.appendChild(phone);
    contact.appendChild(email);
    contact.appendChild(address);
      
    return contact;
}
  
function loadContact() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContact());
}
  
export default loadContact;