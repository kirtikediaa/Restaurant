import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./ContactUs";


function header(){
const header=document.createElement("header");
header.classList.add("header");

const title=document.createElement("h1");
title.classList.add("m_title");
title.textContent="KIT'S PLAZA";
header.appendChild(title);
header.appendChild(createNav());

return header;
}

  function createNav() {
    const nav = document.createElement("nav");

    const homeBtn = document.createElement("button");
    homeBtn.classList.add("button-nav");
    homeBtn.textContent = "Home";
    homeBtn.addEventListener("click", (e) => {
      if (e.target.classList.contains("active")) return;
      setActiveButton(homeBtn);
      loadHome();
    });
  
    const menuBtn = document.createElement("button");
    menuBtn.classList.add("button-nav");
    menuBtn.textContent = "Menu";
    menuBtn.addEventListener("click", (e) => {
      if (e.target.classList.contains("active")) return;
      setActiveButton(menuBtn);
      loadMenu();
    });
  
    const contactBtn = document.createElement("button");
    contactBtn.classList.add("button-nav");
    contactBtn.textContent = "Contact Us";
    contactBtn.addEventListener("click", (e) => {
      if (e.target.classList.contains("active")) return;
      setActiveButton(contactBtn);
      loadContact();
    });
  
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
  
    return nav;
  }
  
  function setActiveButton(button) {
    const buttons = document.querySelectorAll(".button-nav");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
  
  }

  function mainDisplay(){
  const main=document.createElement("main");
  main.classList.add("main_c");
  main.setAttribute("id","mainDisp");
  return main;
  
  }

  function loadPage(){
    const content = document.getElementById("content");    
    content.appendChild(header());
    content.appendChild(mainDisplay());   
    setActiveButton(document.querySelector(".button-nav"));
    loadHome();        
  }
  export default loadPage;