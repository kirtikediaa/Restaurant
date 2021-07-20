/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ContactUs.js":
/*!**************************!*\
  !*** ./src/ContactUs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createContact(){
    const contact=document.createElement("div");
    contact.classList.add("contact");

    const personName=document.createElement("p");
    personName.textContent="Name:KIRTI";

    const phno=document.createElement("p");
    phno.textContent="PHONE NO :90000001234";

    const emailid=document.createElement("p");
    emailid.textContent="EMAIL ID :Abcd@gmail.com";

    contact.appendChild(personName);
    contact.appendChild(phno);
    contact.appendChild(emailid);
    return contact;

}
function loadContact(){
const main = document.getElementById("mainDisp");
main.textContent = "";
main.appendChild(createContact());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);



/***/ }),

/***/ "./src/base.js":
/*!*********************!*\
  !*** ./src/base.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _ContactUs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContactUs */ "./src/ContactUs.js");





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
      (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();
    });
  
    const menuBtn = document.createElement("button");
    menuBtn.classList.add("button-nav");
    menuBtn.textContent = "Menu";
    menuBtn.addEventListener("click", (e) => {
      if (e.target.classList.contains("active")) return;
      setActiveButton(menuBtn);
      (0,_menu__WEBPACK_IMPORTED_MODULE_1__.default)();
    });
  
    const contactBtn = document.createElement("button");
    contactBtn.classList.add("button-nav");
    contactBtn.textContent = "Contact Us";
    contactBtn.addEventListener("click", (e) => {
      if (e.target.classList.contains("active")) return;
      setActiveButton(contactBtn);
      (0,_ContactUs__WEBPACK_IMPORTED_MODULE_2__.default)();
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
    (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();        
  }
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu.appendChild(
        createMenuItem(
          "Nachos",
          "Topped with Jalapeños"
        )
      );
      menu.appendChild(
        createMenuItem(
          "Pizza",
          "Tomato sauce, Mozarella,  Chilli flakes, Olives, Basil"
        )
      );
      menu.appendChild(
        createMenuItem(
          "French Fries",
          "Tomato sauce,Chilli flakes,"
        )
      );
      menu.appendChild(
        createMenuItem(
          "Pasta",
          "Tomato sauce, Bacon, Pineapple, Olives, Basil"
        )
      );
      menu.appendChild(
        createMenuItem(
          "Chips & Salsa",
          "A basket of our homemade homemade salsa"
        )
      );
      menu.appendChild(
        createMenuItem(
          "Burrito",
          "Filled with grilled onion and peppers"
        )
      );
      menu.appendChild(
        createMenuItem(
          "Ice Cream",
          "All flavours available"
        )
      );
      menu.appendChild(
        createMenuItem(
          "Brownie",
          " An American style vanilla cream cookie broken onto the top of The Original tray bake before baking."
        )
      );
    
      return menu;
      
}
function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const food = document.createElement("h2");
    food.textContent = name;
  
    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    //food img code if we wnt to add pics
    menuItem.appendChild(food);
    menuItem.appendChild(foodDescription);
  
    return menuItem;
}
function loadMenu() {
    const main = document.getElementById("mainDisp");
    main.textContent = "";
    main.appendChild(createMenu());
  }
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/base.js");

(0,_base__WEBPACK_IMPORTED_MODULE_0__.default)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvLi9zcmMvQ29udGFjdFVzLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC8uL3NyYy9iYXNlLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJHO0FBQ0E7QUFDUTs7O0FBR3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhDQUFRO0FBQ2QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhDQUFRO0FBQ2QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1EQUFXO0FBQ2pCLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVEO0FBQ0E7QUFDQSx1QztBQUNBO0FBQ0EsSUFBSSw4Q0FBUSxHO0FBQ1o7QUFDQSxFQUFFLGlFQUFlLFFBQVEsRTs7Ozs7Ozs7Ozs7Ozs7QUNuRnpCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDNUJ4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7VUM3RTFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTjhCO0FBQzlCLDhDQUFRLEciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKXtcclxuICAgIGNvbnN0IGNvbnRhY3Q9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XHJcblxyXG4gICAgY29uc3QgcGVyc29uTmFtZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHBlcnNvbk5hbWUudGV4dENvbnRlbnQ9XCJOYW1lOktJUlRJXCI7XHJcblxyXG4gICAgY29uc3QgcGhubz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHBobm8udGV4dENvbnRlbnQ9XCJQSE9ORSBOTyA6OTAwMDAwMDEyMzRcIjtcclxuXHJcbiAgICBjb25zdCBlbWFpbGlkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgZW1haWxpZC50ZXh0Q29udGVudD1cIkVNQUlMIElEIDpBYmNkQGdtYWlsLmNvbVwiO1xyXG5cclxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQocGVyc29uTmFtZSk7XHJcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKHBobm8pO1xyXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChlbWFpbGlkKTtcclxuICAgIHJldHVybiBjb250YWN0O1xyXG5cclxufVxyXG5mdW5jdGlvbiBsb2FkQ29udGFjdCgpe1xyXG5jb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluRGlzcFwiKTtcclxubWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XHJcbm1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdCgpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3Q7XHJcblxyXG4iLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbWVudVwiO1xyXG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSBcIi4vQ29udGFjdFVzXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gaGVhZGVyKCl7XHJcbmNvbnN0IGhlYWRlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG5oZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcclxuXHJcbmNvbnN0IHRpdGxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxudGl0bGUuY2xhc3NMaXN0LmFkZChcIm1fdGl0bGVcIik7XHJcbnRpdGxlLnRleHRDb250ZW50PVwiS0lUJ1MgUExBWkFcIjtcclxuaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcclxuXHJcbnJldHVybiBoZWFkZXI7XHJcbn1cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuXHJcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGhvbWVCdG4uY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1uYXZcIik7XHJcbiAgICBob21lQnRuLnRleHRDb250ZW50ID0gXCJIb21lXCI7XHJcbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XHJcbiAgICAgIHNldEFjdGl2ZUJ1dHRvbihob21lQnRuKTtcclxuICAgICAgbG9hZEhvbWUoKTtcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tbmF2XCIpO1xyXG4gICAgbWVudUJ0bi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xyXG4gICAgICBzZXRBY3RpdmVCdXR0b24obWVudUJ0bik7XHJcbiAgICAgIGxvYWRNZW51KCk7XHJcbiAgICB9KTtcclxuICBcclxuICAgIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgY29udGFjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLW5hdlwiKTtcclxuICAgIGNvbnRhY3RCdG4udGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXNcIjtcclxuICAgIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcclxuICAgICAgc2V0QWN0aXZlQnV0dG9uKGNvbnRhY3RCdG4pO1xyXG4gICAgICBsb2FkQ29udGFjdCgpO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZUJ0bik7XHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQobWVudUJ0bik7XHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XHJcbiAgXHJcbiAgICByZXR1cm4gbmF2O1xyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBzZXRBY3RpdmVCdXR0b24oYnV0dG9uKSB7XHJcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idXR0b24tbmF2XCIpO1xyXG4gIFxyXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgICAgaWYgKGJ1dHRvbiAhPT0gdGhpcykge1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICBcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIFxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWFpbkRpc3BsYXkoKXtcclxuICBjb25zdCBtYWluPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xyXG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5fY1wiKTtcclxuICBtYWluLnNldEF0dHJpYnV0ZShcImlkXCIsXCJtYWluRGlzcFwiKTtcclxuICByZXR1cm4gbWFpbjtcclxuICBcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGxvYWRQYWdlKCl7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpOyAgICBcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKCkpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluRGlzcGxheSgpKTsgICBcclxuICAgIHNldEFjdGl2ZUJ1dHRvbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1uYXZcIikpO1xyXG4gICAgbG9hZEhvbWUoKTsgICAgICAgIFxyXG4gIH1cclxuICBleHBvcnQgZGVmYXVsdCBsb2FkUGFnZTsiLCJmdW5jdGlvbiBIb21lKCl7XHJcblxyXG5jb25zdCBkaXYxPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmRpdjEuY2xhc3NMaXN0LmFkZChcImludHJvXCIpO1xyXG5jb25zdCBwYXJhMT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG5wYXJhMS50ZXh0Q29udGVudCA9XCJXZWxjb21lIHRvIEtJVCdTIFBMQVpBLHRoZSBtb3N0IGZhbW91cyByZXN0YXVyYW50IGluIEluZGlhLiBcXG4gQSBQb3B1bGFyIGRpbmluZyB2ZW51ZSBmb3IgY3JlYXRpdmUgdGFrZXMgaW4gYSB2aWJyYW50IGF0bW9zcGhlcmUuIFwiO1xyXG5kaXYxLmFwcGVuZENoaWxkKHBhcmExKTtcclxuY29uc3QgaW1hZ2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuaW1hZ2Uuc3JjPVwicGl6emEuanBnXCI7XHJcbmRpdjEuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG4vLyBtYWluLmlubmVySFRNTD1cIkltYWdlIEFkZGVkXCI7XHJcblxyXG5jb25zdCBkaXYyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmRpdjIuY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uXCIpO1xyXG5jb25zdCBwYXJhMj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbnBhcmEyLnRleHRDb250ZW50ID1cIkZMT09SIE5PLiA0MjAsSFlERVJBQkFELFRFTEFOR0FOQVwiO1xyXG5kaXYyLmFwcGVuZENoaWxkKHBhcmEyKTtcclxuZGl2MS5hcHBlbmRDaGlsZChkaXYyKTtcclxucmV0dXJuIGRpdjE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRIb21lKCkge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkRpc3BcIik7XHJcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoSG9tZSgpKTtcclxuICB9XHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lO1xyXG4iLCJmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xyXG4gICAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgICAgICBjcmVhdGVNZW51SXRlbShcclxuICAgICAgICAgIFwiTmFjaG9zXCIsXHJcbiAgICAgICAgICBcIlRvcHBlZCB3aXRoIEphbGFwZcOxb3NcIlxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgICAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgICAgICBjcmVhdGVNZW51SXRlbShcclxuICAgICAgICAgIFwiUGl6emFcIixcclxuICAgICAgICAgIFwiVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsICBDaGlsbGkgZmxha2VzLCBPbGl2ZXMsIEJhc2lsXCJcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICAgIG1lbnUuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgY3JlYXRlTWVudUl0ZW0oXHJcbiAgICAgICAgICBcIkZyZW5jaCBGcmllc1wiLFxyXG4gICAgICAgICAgXCJUb21hdG8gc2F1Y2UsQ2hpbGxpIGZsYWtlcyxcIlxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgICAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgICAgICBjcmVhdGVNZW51SXRlbShcclxuICAgICAgICAgIFwiUGFzdGFcIixcclxuICAgICAgICAgIFwiVG9tYXRvIHNhdWNlLCBCYWNvbiwgUGluZWFwcGxlLCBPbGl2ZXMsIEJhc2lsXCJcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICAgIG1lbnUuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgY3JlYXRlTWVudUl0ZW0oXHJcbiAgICAgICAgICBcIkNoaXBzICYgU2Fsc2FcIixcclxuICAgICAgICAgIFwiQSBiYXNrZXQgb2Ygb3VyIGhvbWVtYWRlIGhvbWVtYWRlIHNhbHNhXCJcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICAgIG1lbnUuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgY3JlYXRlTWVudUl0ZW0oXHJcbiAgICAgICAgICBcIkJ1cnJpdG9cIixcclxuICAgICAgICAgIFwiRmlsbGVkIHdpdGggZ3JpbGxlZCBvbmlvbiBhbmQgcGVwcGVyc1wiXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICAgICAgXCJJY2UgQ3JlYW1cIixcclxuICAgICAgICAgIFwiQWxsIGZsYXZvdXJzIGF2YWlsYWJsZVwiXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICAgICAgXCJCcm93bmllXCIsXHJcbiAgICAgICAgICBcIiBBbiBBbWVyaWNhbiBzdHlsZSB2YW5pbGxhIGNyZWFtIGNvb2tpZSBicm9rZW4gb250byB0aGUgdG9wIG9mIFRoZSBPcmlnaW5hbCB0cmF5IGJha2UgYmVmb3JlIGJha2luZy5cIlxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIFxyXG4gICAgICByZXR1cm4gbWVudTtcclxuICAgICAgXHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0obmFtZSwgZGVzY3JpcHRpb24pIHtcclxuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XHJcblxyXG4gICAgY29uc3QgZm9vZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGZvb2QudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gIFxyXG4gICAgY29uc3QgZm9vZERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBmb29kRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcclxuXHJcbiAgICAvL2Zvb2QgaW1nIGNvZGUgaWYgd2Ugd250IHRvIGFkZCBwaWNzXHJcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kKTtcclxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGZvb2REZXNjcmlwdGlvbik7XHJcbiAgXHJcbiAgICByZXR1cm4gbWVudUl0ZW07XHJcbn1cclxuZnVuY3Rpb24gbG9hZE1lbnUoKSB7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluRGlzcFwiKTtcclxuICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBsb2FkTWVudTtcclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWRQYWdlIGZyb20gXCIuL2Jhc2VcIjtcclxubG9hZFBhZ2UoKTsiXSwic291cmNlUm9vdCI6IiJ9