window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

$(document).ready(function() {
  
  $(window).scroll(function() {
    if($(this).scrollTop() > 500) { 
        $('.navbar').addClass('solid');
    } else {
        $('.navbar').removeClass('solid');
    }
  });

  var scrollLink = $('.scroll');
  
  // SMOOTH SCROLL BEGIN ♡
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });
});
  