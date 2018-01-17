$(document).ready(function() {
  $('body').css('display', 'none');
  $('body').fadeIn(1500);
  $('.links').click(function(event) {
    event.preventDefault();
    newLocation = $(this).attr("href");
    $('body').fadeOut(750, newpage);
  });
  function newpage() {
    window.location = newLocation;
  }
});
