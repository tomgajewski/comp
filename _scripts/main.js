$(function() {


  /** trigger offcanvas nav on devices below 840px wide **/
    $("#nav-trigger").click(function() {
      $(".offcanvas-navigation").html('');
      $(".offcanvas-navigation").append('<ul></ul>');
      $(".offcanvas-navigation ul").html($("#navigation ul").html().replace('<br>',''));
      $(".offcanvas-navigation ul li").addClass("nav-item");
    })
  /** end **/


  /** slider, fixing description container position **/
    var width = $( window ).width();
    if(width < 650)
    {
      var slider_height = 0;
      slider_height += parseInt($(".slide-image").height());
      $('#slides').slidesjs({
        width: 400,
        height: slider_height,
      });
    }
    else
    {
      $('#slides').slidesjs({
         width:400,
         height:200,
      });
    }
  /** end **/


});