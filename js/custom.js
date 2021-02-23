/* $(document).ready(function() {
    $(".sample-slider").slick({
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        autoplayspeed: 500,
    });
}); 
*/

/*$(document).ready(function() {
    $(".sample-slider").slick({
    });
});
*/
/*menu */
$(document).ready(function () {
  $('.menu-toggle').click(function () {
    $('.menu-toggle').toggleClass('active')
    $('nav').toggleClass('active')
  })
})
/*end menu */


$(document).ready(function () {
  $(".hero-slider-wrap").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    fade: false,
  });
});




/*$(document).ready(function() {
$(".sample-slider").slick({
 lazyLoad: 'ondemand', // ondemand progressive anticipated
 infinite: true
});
});
*/
/* Hamburger Menu 
$(document).ready(function () {
  $('.menu').click(function () {
    $('mobile-menu').toggleClass('active');
  })
})*/
function myFunction() {
  function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
}
