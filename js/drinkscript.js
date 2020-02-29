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
    });
    document.querySelector(`#${foodID}`).innerHTML= drinkList;
});

whiskeyAndWine.map(function (x){
    const foodID = x.id;
    const foodItems = x.items;
    const drinkList = foodItems.map(z => `<p>${z}</p>`);
    document.querySelector(`#${foodID}`).innerHTML= drinkList;
});


























//Adds a class to the secondary nav when the screen width is below 900px
$(document).ready(function(){
   $(window).on('resize', function() {
       if($(window).width() < 900) {
           $('.secondaryNav').addClass('secondaryNavMoblie');

           $(window).scroll(function(){
                   var moblieSecNavScroll =253;
               if($(window).scrollTop() >= moblieSecNavScroll){
                   $('.secondaryNavMoblie').addClass("secondaryNavMobliePosition");
                   $('.navbar').removeClass("navbar-fixed-top");
               }else{
                   $('.secondaryNavMoblie').removeClass("secondaryNavMobliePosition");
               }
           });
       }
   });
});