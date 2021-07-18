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
    const main = document.getElementById("main");
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

    // const foodImage = document.createElement("img");
    // foodImage.src = `pizzas/${name.toLowerCase()}.png`;

    // menuItem.appendChild(foodImage);
    menuItem.appendChild(food);
    menuItem.appendChild(foodDescription);
  
    return menuItem;
}
function loadMenu() {
    const main = document.getElementById("main");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvLi9zcmMvQ29udGFjdFVzLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC8uL3NyYy9iYXNlLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJHO0FBQ0E7QUFDUTs7O0FBR3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0M7QUFDQTtBQUNBO0FBQ0EsdUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1RDtBQUNBO0FBQ0EsdUM7QUFDQTtBQUNBLEVBQUUsaUVBQWUsUUFBUSxFOzs7Ozs7Ozs7Ozs7OztBQ2hEekI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDN0J4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLG1CQUFtQjs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7OztVQ2hGMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOOEI7QUFDOUIsOENBQVEsRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpe1xyXG4gICAgY29uc3QgY29udGFjdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcclxuXHJcbiAgICBjb25zdCBwZXJzb25OYW1lPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcGVyc29uTmFtZS50ZXh0Q29udGVudD1cIk5hbWU6S0lSVElcIjtcclxuXHJcbiAgICBjb25zdCBwaG5vPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcGhuby50ZXh0Q29udGVudD1cIlBIT05FIE5PIDo5MDAwMDAwMTIzNFwiO1xyXG5cclxuICAgIGNvbnN0IGVtYWlsaWQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBlbWFpbGlkLnRleHRDb250ZW50PVwiQWJjZEBnbWFpbC5jb21cIjtcclxuXHJcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKHBlcnNvbk5hbWUpO1xyXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChwaG5vKTtcclxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoZW1haWxpZCk7XHJcbiAgICByZXR1cm4gY29udGFjdDtcclxuXHJcbn1cclxuZnVuY3Rpb24gbG9hZENvbnRhY3QoKXtcclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcclxubWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XHJcbm1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdCgpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3Q7XHJcblxyXG4iLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbWVudVwiO1xyXG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSBcIi4vQ29udGFjdFVzXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gaGVhZGVyKCl7XHJcbmNvbnN0IGhlYWRlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG5oZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcclxuLy8gaGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsXCJoZWFkZXJyXCIpO1xyXG5jb25zdCB0aXRsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbnRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtX3RpdGxlXCIpO1xyXG50aXRsZS50ZXh0Q29udGVudD1cIktJVCdTIFBMQVpBXCI7XHJcbmhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbmNvbnNvbGUubG9nKFwiSGVhZGVyIHVwZGF0ZWRcIik7XHJcbnJldHVybiBoZWFkZXI7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlQnRuKGlkLCB0ZXh0KSB7XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xyXG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgYnRuLmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xyXG4gICAgcmV0dXJuIGJ0bjtcclxuICB9XHJcbiAgZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgICBuYXYuc2V0QXR0cmlidXRlKCdpZCcsIFwibmF2XCIpOyAgXHJcbiAgICBjb25zdCBob21lQnRuID0gY3JlYXRlQnRuKCdob21lJywgJ2hvbWUnKTtcclxuICAgIGNvbnN0IG1lbnVCdG4gPSBjcmVhdGVCdG4oJ21lbnUnLCAnbWVudScpO1xyXG4gICAgY29uc3QgY29udGFjdEJ0biA9IGNyZWF0ZUJ0bignY29udGFjdCcsICdjb250YWN0Jyk7ICBcclxuICAgIG5hdi5hcHBlbmRDaGlsZChob21lQnRuKTtcclxuICAgIG5hdi5hcHBlbmRDaGlsZChtZW51QnRuKTtcclxuICAgIG5hdi5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcclxuICAgIHJldHVybiBuYXY7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtYWluRGlzcGxheSgpe1xyXG4gIGNvbnN0IG1haW49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XHJcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpbl9jXCIpO1xyXG4gIG1haW4uc2V0QXR0cmlidXRlKFwiaWRcIixcIm1haW5EaXNwXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbG9hZFBhZ2UoKXtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7ICAgIFxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIoKSk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5EaXNwbGF5KCkpOyAgICAgICAgICAgXHJcbiAgfVxyXG4gIGV4cG9ydCBkZWZhdWx0IGxvYWRQYWdlOyIsImZ1bmN0aW9uIEhvbWUoKXtcclxuXHJcbmNvbnN0IGRpdjE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuZGl2MS5jbGFzc0xpc3QuYWRkKFwiaW50cm9cIik7XHJcbmNvbnN0IHBhcmExPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbnBhcmExLnRleHRDb250ZW50ID1cIldlbGNvbWUgdG8gdGhlIG1vc3QgZmFtb3VzIHJlc3RhdXJhbnQgaW4gdGhlIFdvcmxkXCI7XHJcbmRpdjEuYXBwZW5kQ2hpbGQocGFyYTEpO1xyXG5cclxuY29uc3QgaW1hZ2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuaW1hZ2Uuc3JjPVwicGl6emEuanBnXCI7XHJcbmRpdjEuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG4vLyBtYWluLmlubmVySFRNTD1cIkltYWdlIEFkZGVkXCI7XHJcblxyXG5jb25zdCBkaXYyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmRpdjIuY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uXCIpO1xyXG5jb25zdCBwYXJhMj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbnBhcmEyLnRleHRDb250ZW50ID1cIkZMT09SIE5PLiA0MjAsSFlERVJBQkFELFRFTEFOR0FOQVwiO1xyXG5kaXYyLmFwcGVuZENoaWxkKHBhcmEyKTtcclxuZGl2MS5hcHBlbmRDaGlsZChkaXYyKTtcclxucmV0dXJuIGRpdjE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRIb21lKCkge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcclxuICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChIb21lKCkpO1xyXG4gIH1cclxuICBcclxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7XHJcbiIsImZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XHJcbiAgICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICAgICAgXCJOYWNob3NcIixcclxuICAgICAgICAgIFwiVG9wcGVkIHdpdGggSmFsYXBlw7Fvc1wiXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICAgICAgXCJQaXp6YVwiLFxyXG4gICAgICAgICAgXCJUb21hdG8gc2F1Y2UsIE1vemFyZWxsYSwgIENoaWxsaSBmbGFrZXMsIE9saXZlcywgQmFzaWxcIlxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgICAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgICAgICBjcmVhdGVNZW51SXRlbShcclxuICAgICAgICAgIFwiRnJlbmNoIEZyaWVzXCIsXHJcbiAgICAgICAgICBcIlRvbWF0byBzYXVjZSxDaGlsbGkgZmxha2VzLFwiXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICAgICAgXCJQYXN0YVwiLFxyXG4gICAgICAgICAgXCJUb21hdG8gc2F1Y2UsIEJhY29uLCBQaW5lYXBwbGUsIE9saXZlcywgQmFzaWxcIlxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgICAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgICAgICBjcmVhdGVNZW51SXRlbShcclxuICAgICAgICAgIFwiVG90b3BvcyBZIFNhbHNhIC0gQ2hpcHMgJiBTYWxzYVwiLFxyXG4gICAgICAgICAgXCJBIGJhc2tldCBvZiBvdXIgaG9tZW1hZGUgY2hpcHMgYW5kIGEgY29udGFpbmVyIG9mIG91ciBob21lbWFkZSBzYWxzYVwiXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICAgICAgXCJCdXJyaXRvXCIsXHJcbiAgICAgICAgICBcIkZpbGxlZCB3aXRoIGdyaWxsZWQgb25pb24gYW5kIHBlcHBlcnNcIlxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgICAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgICAgICBjcmVhdGVNZW51SXRlbShcclxuICAgICAgICAgIFwiSWNlIENyZWFtXCIsXHJcbiAgICAgICAgICBcIkFsbCBmbGF2b3VycyBhdmFpbGFibGVcIlxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgICAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgICAgICBjcmVhdGVNZW51SXRlbShcclxuICAgICAgICAgIFwiQnJvd25pZVwiLFxyXG4gICAgICAgICAgXCIgQW4gQW1lcmljYW4gc3R5bGUgdmFuaWxsYSBjcmVhbSBjb29raWUgYnJva2VuIG9udG8gdGhlIHRvcCBvZiBUaGUgT3JpZ2luYWwgdHJheSBiYWtlIGJlZm9yZSBiYWtpbmcuXCJcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICBcclxuICAgICAgcmV0dXJuIG1lbnU7XHJcbiAgICAgIFxyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKG5hbWUsIGRlc2NyaXB0aW9uKSB7XHJcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xyXG5cclxuICAgIGNvbnN0IGZvb2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBmb29kLnRleHRDb250ZW50ID0gbmFtZTtcclxuICBcclxuICAgIGNvbnN0IGZvb2REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgZm9vZERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XHJcblxyXG4gICAgLy8gY29uc3QgZm9vZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIC8vIGZvb2RJbWFnZS5zcmMgPSBgcGl6emFzLyR7bmFtZS50b0xvd2VyQ2FzZSgpfS5wbmdgO1xyXG5cclxuICAgIC8vIG1lbnVJdGVtLmFwcGVuZENoaWxkKGZvb2RJbWFnZSk7XHJcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kKTtcclxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGZvb2REZXNjcmlwdGlvbik7XHJcbiAgXHJcbiAgICByZXR1cm4gbWVudUl0ZW07XHJcbn1cclxuZnVuY3Rpb24gbG9hZE1lbnUoKSB7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xyXG4gICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSk7XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IGxvYWRNZW51O1xyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9hZFBhZ2UgZnJvbSBcIi4vYmFzZVwiO1xyXG5sb2FkUGFnZSgpOyJdLCJzb3VyY2VSb290IjoiIn0=