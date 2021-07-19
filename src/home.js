function Home(){

const div1=document.createElement("div");
div1.classList.add("intro");
const para1=document.createElement('p');

para1.textContent ="Welcome to KIT'S PLAZA,the most famous restaurant in India. \n A Popular dining venue for creative takes in a vibrant atmosphere. ";
div1.appendChild(para1);
const image=document.createElement("img");
image.src="pizza.jpg";
div1.appendChild(image);
// main.innerHTML="Image Added";

const div2=document.createElement("div");
div2.classList.add("location");
const para2=document.createElement('p');
para2.textContent ="FLOOR NO. 420,HYDERABAD,TELANGANA";
div2.appendChild(para2);
div1.appendChild(div2);
return div1;
}

function loadHome() {
    const main = document.getElementById("mainDisp");
    main.textContent = "";
    main.appendChild(Home());
  }
  
export default loadHome;
