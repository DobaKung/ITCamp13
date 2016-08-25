$(function(){
  var heighthero = $('.hero').outerHeight()-66;
  var scroll = $(document).scrollTop();

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
