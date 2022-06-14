'use strict';

 const SIZE_S = {
    name: 'SMALL',
    price: 50
};

const SIZE_M = {
    name: 'MEDIUM',
    price: 75
};

const SIZE_L = {
    name: 'LARGE',
    price: 100
};

const TYPE_VEGGIE = {
    name: 'VEGGIE',
    price: 50
};

const TYPE_MARGHERITA = {
    name: 'MARGHERITA',
    price: 60
};

const TYPE_PEPPERONI = {
    name: 'PEPPERONI',
    price: 70
};

const EXTRA_TOMATOES = {
    name: 'TOMATOES',
    price: 5
};

const EXTRA_CHEESE = {
    name: 'CHEESE',
    price: 7
};

const EXTRA_MEAT = {
    name: 'MEAT',
    price: 9
};

class PizzaException extends Error {
    constructor(message) {
        super(message);
        this.name = 'PizzaException';
    }
}

class Pizza {
    constructor(size, type) {
        this.allowedSizes = [SIZE_S, SIZE_M, SIZE_L];
        this.allowedTypes = [TYPE_VEGGIE, TYPE_MARGHERITA, TYPE_PEPPERONI];
        this.allowedExtraIngredients = [EXTRA_TOMATOES, EXTRA_CHEESE, EXTRA_MEAT];

        let argumentsLength = 2;

        if (arguments.length !== argumentsLength){
            throw new PizzaException(`Required two arguments, given: ${arguments.length}`);
        }

        if (!this.allowedSizes.includes(size)) {
            throw new PizzaException('Invalid size.');
        }

        if (!this.allowedTypes.includes(type)) {
            throw new PizzaException('Invalid type.');
        }

        this.size = size;
        this.type = type;
        this.extraIngredient = [];
    }

    addExtraIngredient(ingredient) {
        if (arguments.length !== 1){
            throw new PizzaException(`Required one argument, given: ${arguments.length}`);
        }

        if (!this.allowedExtraIngredients.includes(ingredient)) {
            throw new PizzaException('Invalid ingredient.');
        }

        if (this.extraIngredient.includes(ingredient)) {
            throw new PizzaException('Duplicate ingredient.');
        }

        if (this.type === TYPE_VEGGIE && ingredient === EXTRA_MEAT) {
            throw new PizzaException('Invalid ingredient.');
        }

        this.extraIngredient.push(ingredient);
    }

    removeExtraIngredient(ingredient) {
        if (arguments.length !== 1){
            throw new PizzaException(`Required one argument, given: ${arguments.length}`);
        }

        if (!this.allowedExtraIngredients.includes(ingredient)) {
            throw new PizzaException('Invalid ingredient.');
        }

        if (!this.extraIngredient.includes(ingredient)) {
            throw new PizzaException(`Cannot remove ingridient ${ingredient} because it has not been added.`);
        }

        let ingedientIndex = this.extraIngredient.indexOf(ingredient);
        this.extraIngredient.splice(ingedientIndex, 1);
    }

    getExtraIngredients() {
        return this.extraIngredient;
    }

    getSize() {
        return this.size;
    }

    getPrice() {
        let totalPrice = 0;
        totalPrice += this.size.price;
        totalPrice += this.type.price; 
        for (let ingredient of this.extraIngredient) {
            totalPrice += ingredient.price;
        }

        return totalPrice;
    }

    getPizzaInfo() {
        let extraIngredientInfo = '';
        if (this.extraIngredient) {
            extraIngredientInfo = 'extra ingredients:';
            for (let ingredient of this.extraIngredient) {
                extraIngredientInfo += ' ' + ingredient.name;
            }
            extraIngredientInfo += ';';
        }

       return `Size: ${this.size.name}, type: ${this.type.name}; ${extraIngredientInfo} price: ${this.totalPrice}.`;
    }
}


/* It should work */ 
// // small pizza, type: veggie
//let pizza = new Pizza(SIZE_S, TYPE_MARGHERITA);
// // add extra meat
//pizza.addExtraIngredient(EXTRA_MEAT);
// // check price
//console.log(`Price: ${pizza.getPrice()} UAH`); //=> Price: 109 UAH
// // add extra corn
//pizza.addExtraIngredient(EXTRA_CHEESE);
// // add extra corn
//pizza.addExtraIngredient(EXTRA_TOMATOES);
// // check price
//console.log(`Price with extra ingredients: ${pizza.getPrice()} UAH`); // Price: 121 UAH
// // check pizza size
// console.log(`Is pizza large: ${pizza.getSize() === SIZE_L}`); //=> Is pizza large: false
// // remove extra ingredient
// pizza.removeExtraIngredient(EXTRA_CHEESE);
// console.log(`Extra ingredients: ${pizza.getExtraIngredients().length}`); //=> Extra ingredients: 2
// console.log(pizza.getPizzaInfo()); //=> Size: SMALL, type: VEGGIE; extra ingredients: MEAT,TOMATOES; price: 114UAH.

// examples of errors
//let pizza = new Pizza(SIZE_S); // => Required two arguments, given: 1

// let pizza = new Pizza(SIZE_S, SIZE_S); // => Invalid type

// let pizza = new Pizza(SIZE_S, TYPE_VEGGIE);
// pizza.addExtraIngredient(EXTRA_MEAT);
// pizza.addExtraIngredient(EXTRA_MEAT); // => Duplicate ingredient

// let pizza = new Pizza(SIZE_S, TYPE_VEGGIE);
// pizza.addExtraIngredient(EXTRA_MEAT); // => Invalid ingredient
