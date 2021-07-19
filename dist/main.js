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

para1.textContent ="Welcome to the most famous restaurant in the World";
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
          "Totopos Y Salsa - Chips & Salsa",
          "A basket of our homemade chips and a container of our homemade salsa"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvLi9zcmMvQ29udGFjdFVzLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC8uL3NyYy9iYXNlLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJHO0FBQ0E7QUFDUTs7O0FBR3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhDQUFRO0FBQ2QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhDQUFRO0FBQ2QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1EQUFXO0FBQ2pCLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVEO0FBQ0E7QUFDQSx1QztBQUNBO0FBQ0EsSUFBSSw4Q0FBUSxHO0FBQ1o7QUFDQSxFQUFFLGlFQUFlLFFBQVEsRTs7Ozs7Ozs7Ozs7Ozs7QUNuRnpCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzdCeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7O1VDN0UxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ044QjtBQUM5Qiw4Q0FBUSxHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVDb250YWN0KCl7XHJcbiAgICBjb25zdCBjb250YWN0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xyXG5cclxuICAgIGNvbnN0IHBlcnNvbk5hbWU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwZXJzb25OYW1lLnRleHRDb250ZW50PVwiTmFtZTpLSVJUSVwiO1xyXG5cclxuICAgIGNvbnN0IHBobm89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwaG5vLnRleHRDb250ZW50PVwiUEhPTkUgTk8gOjkwMDAwMDAxMjM0XCI7XHJcblxyXG4gICAgY29uc3QgZW1haWxpZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGVtYWlsaWQudGV4dENvbnRlbnQ9XCJFTUFJTCBJRCA6QWJjZEBnbWFpbC5jb21cIjtcclxuXHJcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKHBlcnNvbk5hbWUpO1xyXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChwaG5vKTtcclxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoZW1haWxpZCk7XHJcbiAgICByZXR1cm4gY29udGFjdDtcclxuXHJcbn1cclxuZnVuY3Rpb24gbG9hZENvbnRhY3QoKXtcclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkRpc3BcIik7XHJcbm1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xyXG5tYWluLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3QoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0O1xyXG5cclxuIiwiaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gXCIuL0NvbnRhY3RVc1wiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGhlYWRlcigpe1xyXG5jb25zdCBoZWFkZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XHJcblxyXG5jb25zdCB0aXRsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbnRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtX3RpdGxlXCIpO1xyXG50aXRsZS50ZXh0Q29udGVudD1cIktJVCdTIFBMQVpBXCI7XHJcbmhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbmhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XHJcblxyXG5yZXR1cm4gaGVhZGVyO1xyXG59XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcblxyXG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBob21lQnRuLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tbmF2XCIpO1xyXG4gICAgaG9tZUJ0bi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG4gICAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xyXG4gICAgICBzZXRBY3RpdmVCdXR0b24oaG9tZUJ0bik7XHJcbiAgICAgIGxvYWRIb21lKCk7XHJcbiAgICB9KTtcclxuICBcclxuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLW5hdlwiKTtcclxuICAgIG1lbnVCdG4udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcclxuICAgICAgc2V0QWN0aXZlQnV0dG9uKG1lbnVCdG4pO1xyXG4gICAgICBsb2FkTWVudSgpO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGNvbnRhY3RCdG4uY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1uYXZcIik7XHJcbiAgICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gXCJDb250YWN0IFVzXCI7XHJcbiAgICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XHJcbiAgICAgIHNldEFjdGl2ZUJ1dHRvbihjb250YWN0QnRuKTtcclxuICAgICAgbG9hZENvbnRhY3QoKTtcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgbmF2LmFwcGVuZENoaWxkKGhvbWVCdG4pO1xyXG4gICAgbmF2LmFwcGVuZENoaWxkKG1lbnVCdG4pO1xyXG4gICAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RCdG4pO1xyXG4gIFxyXG4gICAgcmV0dXJuIG5hdjtcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gc2V0QWN0aXZlQnV0dG9uKGJ1dHRvbikge1xyXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnV0dG9uLW5hdlwiKTtcclxuICBcclxuICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICAgIGlmIChidXR0b24gIT09IHRoaXMpIHtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgXHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1haW5EaXNwbGF5KCl7XHJcbiAgY29uc3QgbWFpbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcclxuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluX2NcIik7XHJcbiAgbWFpbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwibWFpbkRpc3BcIik7XHJcbiAgcmV0dXJuIG1haW47XHJcbiAgXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBsb2FkUGFnZSgpe1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTsgICAgXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcigpKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkRpc3BsYXkoKSk7ICAgXHJcbiAgICBzZXRBY3RpdmVCdXR0b24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tbmF2XCIpKTtcclxuICAgIGxvYWRIb21lKCk7ICAgICAgICBcclxuICB9XHJcbiAgZXhwb3J0IGRlZmF1bHQgbG9hZFBhZ2U7IiwiZnVuY3Rpb24gSG9tZSgpe1xyXG5cclxuY29uc3QgZGl2MT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5kaXYxLmNsYXNzTGlzdC5hZGQoXCJpbnRyb1wiKTtcclxuY29uc3QgcGFyYTE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxucGFyYTEudGV4dENvbnRlbnQgPVwiV2VsY29tZSB0byB0aGUgbW9zdCBmYW1vdXMgcmVzdGF1cmFudCBpbiB0aGUgV29ybGRcIjtcclxuZGl2MS5hcHBlbmRDaGlsZChwYXJhMSk7XHJcblxyXG5jb25zdCBpbWFnZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5pbWFnZS5zcmM9XCJwaXp6YS5qcGdcIjtcclxuZGl2MS5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbi8vIG1haW4uaW5uZXJIVE1MPVwiSW1hZ2UgQWRkZWRcIjtcclxuXHJcbmNvbnN0IGRpdjI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuZGl2Mi5jbGFzc0xpc3QuYWRkKFwibG9jYXRpb25cIik7XHJcbmNvbnN0IHBhcmEyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxucGFyYTIudGV4dENvbnRlbnQgPVwiRkxPT1IgTk8uIDQyMCxIWURFUkFCQUQsVEVMQU5HQU5BXCI7XHJcbmRpdjIuYXBwZW5kQ2hpbGQocGFyYTIpO1xyXG5kaXYxLmFwcGVuZENoaWxkKGRpdjIpO1xyXG5yZXR1cm4gZGl2MTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEhvbWUoKSB7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluRGlzcFwiKTtcclxuICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChIb21lKCkpO1xyXG4gIH1cclxuICBcclxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7XHJcbiIsImZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XHJcbiAgICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICAgICAgXCJOYWNob3NcIixcclxuICAgICAgICAgIFwiVG9wcGVkIHdpdGggSmFsYXBlw7Fvc1wiXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICAgICAgXCJQaXp6YVwiLFxyXG4gICAgICAgICAgXCJUb21hdG8gc2F1Y2UsIE1vemFyZWxsYSwgIENoaWxsaSBmbGFrZXMsIE9saXZlcywgQmFzaWxcIlxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgICAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgICAgICBjcmVhdGVNZW51SXRlbShcclxuICAgICAgICAgIFwiRnJlbmNoIEZyaWVzXCIsXHJcbiAgICAgICAgICBcIlRvbWF0byBzYXVjZSxDaGlsbGkgZmxha2VzLFwiXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICAgICAgXCJQYXN0YVwiLFxyXG4gICAgICAgICAgXCJUb21hdG8gc2F1Y2UsIEJhY29uLCBQaW5lYXBwbGUsIE9saXZlcywgQmFzaWxcIlxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgICAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgICAgICBjcmVhdGVNZW51SXRlbShcclxuICAgICAgICAgIFwiVG90b3BvcyBZIFNhbHNhIC0gQ2hpcHMgJiBTYWxzYVwiLFxyXG4gICAgICAgICAgXCJBIGJhc2tldCBvZiBvdXIgaG9tZW1hZGUgY2hpcHMgYW5kIGEgY29udGFpbmVyIG9mIG91ciBob21lbWFkZSBzYWxzYVwiXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICAgICAgXCJCdXJyaXRvXCIsXHJcbiAgICAgICAgICBcIkZpbGxlZCB3aXRoIGdyaWxsZWQgb25pb24gYW5kIHBlcHBlcnNcIlxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgICAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgICAgICBjcmVhdGVNZW51SXRlbShcclxuICAgICAgICAgIFwiSWNlIENyZWFtXCIsXHJcbiAgICAgICAgICBcIkFsbCBmbGF2b3VycyBhdmFpbGFibGVcIlxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgICAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgICAgICBjcmVhdGVNZW51SXRlbShcclxuICAgICAgICAgIFwiQnJvd25pZVwiLFxyXG4gICAgICAgICAgXCIgQW4gQW1lcmljYW4gc3R5bGUgdmFuaWxsYSBjcmVhbSBjb29raWUgYnJva2VuIG9udG8gdGhlIHRvcCBvZiBUaGUgT3JpZ2luYWwgdHJheSBiYWtlIGJlZm9yZSBiYWtpbmcuXCJcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICBcclxuICAgICAgcmV0dXJuIG1lbnU7XHJcbiAgICAgIFxyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKG5hbWUsIGRlc2NyaXB0aW9uKSB7XHJcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xyXG5cclxuICAgIGNvbnN0IGZvb2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBmb29kLnRleHRDb250ZW50ID0gbmFtZTtcclxuICBcclxuICAgIGNvbnN0IGZvb2REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgZm9vZERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XHJcblxyXG4gICAgLy9mb29kIGltZyBjb2RlIGlmIHdlIHdudCB0byBhZGQgcGljc1xyXG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZm9vZCk7XHJcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kRGVzY3JpcHRpb24pO1xyXG4gIFxyXG4gICAgcmV0dXJuIG1lbnVJdGVtO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkRpc3BcIik7XHJcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7XHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkUGFnZSBmcm9tIFwiLi9iYXNlXCI7XHJcbmxvYWRQYWdlKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==