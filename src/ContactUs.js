function createContact(){
    const contact=document.createElement("div");
    contact.classList.add("contact");

    const personName=document.createElement("p");
    personName.textContent="Name:KIRTI";

    const phno=document.createElement("p");
    phno.textContent="PHONE NO :90000001234";

    const emailid=document.createElement("p");
    emailid.textContent="Abcd@gmail.com";

    contact.appendChild(personName);
    contact.appendChild(phno);
    contact.appendChild(emailid);
    return contact;

}
function loadContact(){
const main = document.getElementById("main");
main.textContent = "";
main.appendChild(createContact());
}

export default loadContact;

