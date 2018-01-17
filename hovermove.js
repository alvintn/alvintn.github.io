$(document).ready(function() {

  $('body').removeClass('nojQuery');

  $(".nav-menu").hover(function() {
    navigate()},
    function(){}
  );

  $(".main-nav").hover(function() {
    navigate_main()},
    function(){}
  );


  function navigate() {
    $('#links').css({"left":"0px"});
    $('.title').animate({"margin-left":"-90px"}, 400);
    $('.myname').animate({"margin-top":"-85px"}, 400);
    $('#links').animate({"opacity":"1"}, 1500);
  }

  function navigate_main() {
    $('.title').animate({"margin-left":"-62px"}, 400);
    $('#links').animate({"opacity":"1"}, 1500);
  }

});
