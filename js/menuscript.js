$(document).ready(function(){
   var appstring = "";
for(var i = 0; i < apps.length; i++){
appstring += '<div class="menuitem"> <div class="foodName">' + apps[i].name + '</div>' +
'....... <div class="foodPrice">'+
apps[i].price + '</div><div class="foodNote">' +
apps[i].note +
'</div>';
}
$("#apps").append(appstring);     
    
 
   var saladstring = "";
for(var i = 0; i < salad.length; i++){
saladstring += '<div class="menuitem"> <div class="foodName">' + salad[i].name + '</div>' +
'....... <div class="foodPrice">'+
salad[i].price + '</div><div class="foodNote">' +
salad[i].note +
'</div>';
}
$("#salad").append(saladstring);     
    
 
   var tacostring = "";
for(var i = 0; i < tacos.length; i++){
tacostring += '<div class="menuitem"> <div class="foodName">' + tacos[i].name + '</div>' +
'....... <div class="foodPrice">'+
tacos[i].price + '</div><div class="foodNote">' +
tacos[i].note +
'</div>';
}
$("#taco").append(tacostring);    
    
    
       var hoagiestring = "";
for(var i = 0; i < hoagies.length; i++){
hoagiestring += '<div class="menuitem"> <div class="foodName">' + hoagies[i].name + '</div>' +
'....... <div class="foodPrice">'+
hoagies[i].price + '</div><div class="foodNote">' +
hoagies[i].note +
'</div>';
}
$("#hoagie").append(hoagiestring);   
 
    
    
           var burgersstring = "";
for(var i = 0; i < burgers.length; i++){
burgersstring += '<div class="menuitem"> <div class="foodName">' + burgers[i].name + '</div>' +
'....... <div class="foodPrice">'+
burgers[i].price + '</div><div class="foodNote">' +
burgers[i].note +
'</div>';
}
$("#burger").append(burgersstring);   
});