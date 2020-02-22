
  //Parallax effect in the hero
    $(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    $('.logo').css({
        'transform': 'translate(0px,'+ wScroll/2 +'%)'
    });

            $('.beer').css({
        'transform': 'translate(0px, -'+ wScroll/40 +'%)'
    });
            $('.burger').css({
        'transform': 'translate(0px, '+ wScroll/4 +'%)'
    });
 });




//fading quotes on homepage
$(document).ready(function(){
    $(".quotes > .blockquote:gt(0)").hide();
    setInterval(function(){
        $('.quotes > .blockquote:first')
        .fadeOut(1)
        .next()
        .fadeIn(500)
        .end()
        .appendTo('.quotes');
    },5000);

});





//stick nav script
var navBar = $('.navbar');
var stickyNav = navBar.offset().top;
$(window).scroll(function(){
   if ($(this).scrollTop() >= stickyNav){
     navBar.addClass("navbar-fixed-top");
  } else {
    navBar.removeClass("navbar-fixed-top");
  }
});





//Makes the secondary nav pop out after the user scrolls

$(window).scroll(function(){
var topscroll =25;
if($(window).scrollTop() >= topscroll){
$('.secondaryNav').addClass("secondaryNavPosition");
}
});









$(window).scroll( function() {
  console.log( $(this).scrollTop());
});
