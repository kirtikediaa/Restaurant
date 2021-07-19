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
  
  export default loadMenu;

