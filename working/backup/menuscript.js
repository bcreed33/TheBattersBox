$(document).ready(function(){
   var appstring = "";
for(var i = 0; i < apps.length; i++){
appstring += ' <div class="foodName">' + 
apps[i].name + '</div> <div class="foodPrice">'+
apps[i].price + '</div> <div class="foodNote">' +
apps[i].note + '</div>';
}
$("#apps").append(appstring);     
    
 
   var saladstring = "";
for(var i = 0; i < salad.length; i++){
saladstring += ' <div class="foodName">' + 
salad[i].name + '</div> <div class="foodPrice">'+
salad[i].price + '</div> <div class="foodNote">' +
salad[i].note + '</div>';
}
$("#salad").append(saladstring);     
    
 
   var tacostring = "";
for(var i = 0; i < tacos.length; i++){
tacostring += ' <div class="foodName">' + 
tacos[i].name + '</div> <div class="foodPrice">'+
tacos[i].price + '</div> <div class="foodNote">' +
tacos[i].note + '</div>';
}
$("#taco").append(tacostring);    
    
    
       var hoagiestring = "";
for(var i = 0; i < hoagies.length; i++){
hoagiestring += ' <div class="foodName">' + 
hoagies[i].name + '</div> <div class="foodPrice">'+
hoagies[i].price + '</div> <div class="foodNote">' +
hoagies[i].note + '</div>';
}
$("#hoagie").append(hoagiestring);   
 
    
    
var burgersstring = "";
for(var i = 0; i < burgers.length; i++){
burgersstring += ' <div class="foodName">' + 
burgers[i].name + '</div> <div class="foodPrice">'+
burgers[i].price + '</div> <div class="foodNote">' +
burgers[i].note + '</div>';
}
$("#burger").append(burgersstring);   



//////// Loops for the drink Page 

var onTapString = "";
for(var i = 0; i < onTap.length; i++){
onTapString += '<div class="foodName">' + 
onTap[i].name + '</div> <div class="foodPrice">' + 
onTap[i].beertype + '</div>';
}
$("#onTap").append(onTapString); 


    
var cocktailsString = "";
for(var i = 0; i < cocktails.length; i++){
cocktailsString += '<div class="foodName">' + 
cocktails[i].name + '</div> <div class="foodPrice">' + 
cocktails[i].note + '</div>';
}
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
redWineString += '<div class="whiskeyDrink">' + redWine[i] + '</div>';}
$("#redWine").append(redWineString); 


var whiteWineString = "";
for(var i = 0; i < whiteWine.length; i++){
whiteWineString += '<div class="whiskeyDrink">' + whiteWine[i] + '</div>';}
$("#whiteWine").append(whiteWineString); 
























});
