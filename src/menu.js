function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const foods = [
      createFood(
        'Not Big Mac',
        'Big Mac Bun, 100% Beef Patty, Shredded Lettuce, Big Mac Sauce, Pasteurized Process American Cheese, Pickle Slices, Onions'
      ),
      createFood(
        'Not McChicken',
        'McChicken Patty, Regular Bun, Shredded Lettuce, Mayonnaise'
      ),
      createFood(
        'Not Quarter Pounder with Cheese',
        'Quarter Pound 100% Beef Patty, Quarter Pound Bun, Pasteurized Process American Cheese, Ketchup, Pickle Slices, Onions, Mustard'
      ),
      createFood(
        'Not Quarter Pounder with Cheese Bacon',
        'Quarter Pound 100% Beef Patty, Quarter Pound Bun, Pasteurized Process American Cheese, Thick Cut Applewood Smoked Bacon, Ketchup, Pickle Slices, Onions'
      ),
    ];

    foods.forEach((food) => {
      menu.appendChild(food);
    });

    return menu;
}

function createFood(name, ingredients) {
  const food = document.createElement('div');
  food.classList.add('food');

  const foodName = document.createElement('h2');
  foodName.textContent = name;

  const foodIngredients = document.createElement('p');
  foodIngredients.textContent = ingredients;
  
  food.appendChild(foodName);
  food.appendChild(foodIngredients);

  return food;
}
  
function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}
  
export default loadMenu;