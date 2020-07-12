window.addEventListener('scroll', function(e){
  const scrolled = window.pageYOffset;
  const logo = this.document.querySelector('.logo');
  //const beer = this.document.querySelector('.beer');
  //const burger = this.document.querySelector('.burger');
  logo.style.transform=`translate3d(0px , ${scrolled/5}%, 0px)`

})



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

