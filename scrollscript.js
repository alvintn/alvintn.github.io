$(document).ready(function() {
  $('.textbox').each(function(index) {

    console.log("index: " + index);
    var middle_of_object = $(this).position().top + $(this).outerHeight() / 2;
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    /* If the object is not visible in the window, hide */
    if( bottom_of_window < middle_of_object ){
        $(this).attr("class", "hidden");
    }
  });
  $(window).scroll(function() {
    $('.hidden').each(function(index) {

      console.log("index: " + index);
      var middle_of_object = $(this).position().top + $(this).outerHeight() / 6;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is somewhat visible in the window, switch class */
      if( bottom_of_window > middle_of_object ){
          $(this).attr("class", "textbox");
      }
    });
  });
});
