
import { food } from "./food.js";
food.map(function (x){
    const foodID = x.id;
    const foodItems = x.items;
    const foodlist = foodItems.map(function (z){
        return`
            <div class="menuChoice"> 
                <div class="foodName col-xs-12 col-sm-10">
                    ${z.name}   
                </div> 
                <div class="foodPrice col-xs-12 col-sm-2">
                    ${z.price}
                </div>
                <div class="foodNote col-xs-12">
                    ${z.note}
                </div>
            </div>`
    }).join('');
    document.querySelector(`#${foodID}`).innerHTML= foodlist;
});


/*


import {appetizer, salad, tacos, hoagies, burgers} from "./food.js";
const appetizerList = appetizer.map(function (x){
    return`
        <div class="menuChoice"> 
            <div class="foodName col-xs-12 col-sm-10">
                ${x.name}   
            </div> 
            <div class="foodPrice col-xs-12 col-sm-2">
                ${x.price}
            </div>
            <div class="foodNote col-xs-12">
                ${x.note}
            </div>
        </div>`
});
document.querySelector('#apps').innerHTML= appetizerList;


const saladList = salad.map(function (x){
    return`
        <div class="menuChoice"> 
            <div class="foodName col-xs-12 col-sm-10">
                ${x.name}   
            </div> 
            <div class="foodPrice col-xs-12 col-sm-2">
                ${x.price}
            </div>
            <div class="foodNote col-xs-12">
                ${x.note}
            </div>
        </div>`
});
document.querySelector('#salad').innerHTML= saladList;


const tacoList = tacos.map(function (x){
    return`
        <div class="menuChoice"> 
            <div class="foodName col-xs-12 col-sm-10">
                ${x.name}   
            </div> 
            <div class="foodPrice col-xs-12 col-sm-2">
                ${x.price}
            </div>
            <div class="foodNote col-xs-12">
                ${x.note}
            </div>
        </div>`
});
document.querySelector('#taco').innerHTML= tacoList;


const burgerList = burgers.map(function (x){
    return`
        <div class="menuChoice"> 
            <div class="foodName col-xs-12 col-sm-10">
                ${x.name}   
            </div> 
            <div class="foodPrice col-xs-12 col-sm-2">
                ${x.price}
            </div>
            <div class="foodNote col-xs-12">
                ${x.note}
            </div>
        </div>`
});
document.querySelector('#burger').innerHTML= burgerList;














////This is what I wrote years ago. 

 /* $(document).ready(function(){

 var appstring = "";
for(var i = 0; i < apps.length; i++){
appstring += '<div class="menuChoice"> <div class="foodName col-xs-12 col-sm-10">' +
apps[i].name + '</div> <div class="foodPrice col-xs-12 col-sm-2">' +
apps[i].price + '</div> <div class="foodNote">' +
apps[i].note + '</div></div>';}
$("#apps").append(appstring);


   var saladstring = "";
for(var i = 0; i < salad.length; i++){
saladstring += '<div class="menuChoice"> <div class="foodName col-xs-12 col-sm-10">' +
salad[i].name + '</div> <div class="foodPrice col-xs-12 col-sm-2">' +
salad[i].price + '</div> <div class="foodNote col-xs-12">' +
salad[i].note + '</div></div>';}
$("#salad").append(saladstring);


   var tacostring = "";
for(var i = 0; i < tacos.length; i++){
tacostring += '<div class="menuChoice"> <div class="foodName col-xs-12 col-sm-10">' +
tacos[i].name + '</div> <div class="foodPrice col-xs-12 col-sm-2">' +
tacos[i].price + '</div> <div class="foodNote col-xs-12">' +
tacos[i].note + '</div> </div>';}
$("#taco").append(tacostring);



var burgersstring = "";
for(var i = 0; i < burgers.length; i++){
burgersstring += '<div class="menuChoice"> <div class="foodName col-xs-12 col-sm-10">' +
burgers[i].name + '</div> <div class="foodPrice col-xs-12 col-sm-2">' +
burgers[i].price + '</div> <div class="foodNote col-xs-12">' +
burgers[i].note + '</div></div>';}
$("#burger").append(burgersstring);

var onTapString = "";
for(var i = 0; i < onTap.length; i++){
onTapString += '<div class="drinkChoice"><div class="foodName">' +
onTap[i].name + '</div> <div class="drinkNote">' +
onTap[i].beertype + '</div></div>';}
$("#onTap").append(onTapString);

var onTapString = "";
for(var i = 0; i < onTap2.length; i++){
onTapString += '<div class="drinkChoice"><div class="foodName">' +
onTap2[i].name + '</div> <div class="drinkNote">' +
onTap2[i].beertype + '</div></div>';}
$("#onTap2").append(onTapString);


var cocktailsString = "";
for(var i = 0; i < cocktails.length; i++){
cocktailsString += '<div class="drinkChoice"><div class="foodName">' +
cocktails[i].name + '</div> <div class="drinkNote">' +
cocktails[i].note + '</div></div>';}
$("#ctail").append(cocktailsString);

//Whiskey Drinks
var americanWhiskeyString = "";
for(var i = 0; i < americanWhiskey.length; i++){
americanWhiskeyString += '<div class="whiskeyDrink">' + americanWhiskey[i] + '</div>';}
$("#americanWhiskey").append(americanWhiskeyString);


var importedWhiskeyString = "";
for(var i = 0; i < importedWhiskey.length; i++){
importedWhiskeyString += '<div class="whiskeyDrink">' + importedWhiskey[i] + '</div>';}
$("#importedWhiskey").append(importedWhiskeyString);


//Wine Drinks
var redWineString = "";
for(var i = 0; i < redWine.length; i++){
redWineString += '<div class="wineDrink">' + redWine[i] + '</div></div>';}
$("#redWine").append(redWineString);


var whiteWineString = "";
for(var i = 0; i < whiteWine.length; i++){
whiteWineString += '<div class="wineDrink">' + whiteWine[i] + '</div></div>';}
$("#whiteWine").append(whiteWineString);

});

*/

//Adds a class to the secondary nav when the screen width is below 900px

/*
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
*/