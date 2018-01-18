$(document).ready(function() {

  $(".nav-menu").click(function() {
    navigate()}
  );

  $(".main-nav").click(function() {
    navigate_main()}
  );


  function navigate() {
    $('#links').css({"left":"0px", "display":"block"});
    $('.title').animate({"margin-left":"-90px"}, 200);
    $('.myname').animate({"margin-top":"-85px"}, 200);
    $('#links').animate({"opacity":"1"}, 500);
  }

  function navigate_main() {
    $('#links').css({"display":"block"});
    $('.title').animate({"margin-left":"-62px"}, 200);
    $('#links').animate({"opacity":"1"}, 500);
  }

});
