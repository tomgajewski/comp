$(function() {
  if($('#slideshow .slider').length) {
    $('#slideshow .slider').bxSlider({
      adaptiveHeight: true,
      pager: true
    });
  }
  
  $('#menu-toggle').on('click', function(e) {
    e.preventDefault();
    
    $('#navigation').slideToggle('normal');
  });
});
