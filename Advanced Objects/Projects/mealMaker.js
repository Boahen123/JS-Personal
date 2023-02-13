const menu = {
    _meal: '',
    _price: 0,
    /**
     * @brief  A setter method that checks if the *mealToCheck* is a string. If it is, it sets the _meal property
  to the mealToCheck. 
     * @param {string} mealToCheck - The meal to check
     */
  /* */
    set meal(mealToCheck) {
        if (typeof mealToCheck === 'string') {
            this._meal = mealToCheck;
        }
    },
    /**
     * @param {number} priceToCheck
     */
    set price(priceToCheck) {
        if (typeof priceToCheck === 'number') {
            this._price = priceToCheck;
        }
    },
   /**
    * If the meal and price are set correctly, return a string with the meal and price. If not, return
    * a string saying that the meal or price was not set correctly.
    */
    get todaysSpecial() {
        if (this._meal && this._price) {
            return `Today\'s Special is ${this._meal} for $${this._price}!`;
        }
        else {
            return 'Meal or price was not set correctly!';
        }
    }
}

let foods = ['fufu', 'chicken', 'sauce', 'rice and stew'];
let foodChoice = Math.floor(Math.random() * (foods.length + 1));

menu.meal = foods[foodChoice];
menu.price = 10;

console.log(menu.todaysSpecial);
