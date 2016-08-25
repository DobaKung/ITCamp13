(function($){
  $(function(){
    var scroll = $(document).scrollTop();
    var headerHeight = $('.navbar').outerHeight();

    $(window).scroll(function() {
      var scrolled = $(document).scrollTop();
      if (scrolled > headerHeight){
        $('.navbar').addClass('hide');
      } else {
        $('.navbar').removeClass('hide');
      }

      if (scrolled > scroll){
        $('.navbar').removeClass('show');
        $('.dropdown-content').removeClass('downshow');
      } else {
        $('.navbar').addClass('show');
      }
      scroll = $(document).scrollTop();
    });

  });
})(jQuery);
