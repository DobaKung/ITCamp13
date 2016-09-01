$(function(){
  var heighthero = $('.hero').outerHeight()-66;
  var scroll = $(document).scrollTop();

  if (scroll > heighthero) {
    $('.navbar').addClass('bg');
  } else {
    $('.navbar').removeClass('bg');
  }

  $(window).scroll(function() {
    var scrolled = $(document).scrollTop();
    if (scrolled >= heighthero){
      $('.navbar').addClass('bg');
    } else {
      $('.navbar').removeClass('bg');
    }
    scrolled = $(document).scrollTop();
  });
});
