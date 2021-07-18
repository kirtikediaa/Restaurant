import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./ContactUs";


function header(){
const header=document.createElement("header");
header.classList.add("header");
// header.setAttribute("id","headerr");
const title=document.createElement("h1");
title.classList.add("m_title");
title.textContent="KIT'S PLAZA";
header.appendChild(title);
console.log("Header updated");
return header;
}
function createBtn(id, text) {
    const btn = document.createElement('button');
    btn.setAttribute('id', id);
    const span = document.createElement('span');
    span.textContent = text;
    btn.appendChild(span);
    btn.classList.add('tab');
    return btn;
  }
  function createNav() {
    const nav = document.createElement('nav');
    nav.setAttribute('id', "nav");  
    const homeBtn = createBtn('home', 'home');
    const menuBtn = createBtn('menu', 'menu');
    const contactBtn = createBtn('contact', 'contact');  
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    return nav;
  }

  function mainDisplay(){
  const main=document.createElement("main");
  main.classList.add("main_c");
  main.setAttribute("id","mainDisp");
  }

  function loadPage(){
    const content = document.getElementById("content");    
    content.appendChild(header());
    content.appendChild(mainDisplay());           
  }
  export default loadPage;