$(document).ready(function() {
  $(window).scroll(function() {
    $('.hidden').each(function(index) {

      console.log("index: " + index);
      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it in */
      if( bottom_of_window > bottom_of_object ){
          $(this).animate({opacity: 1}, 800);
          $(this).attr("class", "shown");
          //$(this).slideToggle();
      }
    });
  });
});
