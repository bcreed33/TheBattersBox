import { beerandCocktails, whiskeyAndWine } from "./drinks.js";

beerandCocktails.map(function (x){
    const foodID = x.id;
    const foodItems = x.items;
    const drinkList = foodItems.map(function (z){
        return`
        <div class="drinkChoice">
            <p class="foodName">
                ${z.name} 
            </p>
            <p class="drinkNote">
             ${z.note} 
            </p>
        </div> `
    }).join('');
    document.querySelector(`#${foodID}`).innerHTML= drinkList;
});

whiskeyAndWine.map(function (x){
    const foodID = x.id;
    const foodItems = x.items;
    const drinkList = foodItems.map(z => `<p>${z}</p>`).join('');
    document.querySelector(`#${foodID}`).innerHTML= drinkList;
});

























