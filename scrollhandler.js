$(document).ready(function() {
  var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
  $('.shown').bind(mousewheelevt, function(e){

      var evt = window.event || e //equalize event object
      evt = evt.originalEvent ? evt.originalEvent : evt; //convert to originalEvent if possible
      var delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta //check for detail first, because it is used by Opera and FF

      if(delta > 0) {
          $(this).animate({"opacity": 0}, 800);
      }
      else{
          $(this).animate({"opacity": 1}, 800);
      }
  });
});
