$(document).ready(function() {
  $('.button').click(function () {
    $('.inner').addClass('opened');
    setTimeout(()=> {
      $('.letter').addClass('opened');
    }, 500);
    setTimeout(()=> {
      $('.letter').addClass('enlarge');
    }, 1000);
    setTimeout(()=> {
      $('.text p').fadeIn('slow');
    }, 1500);
  });

  $('.close').click(function () {
    $('.text p').fadeOut('slow');
    setTimeout(()=>{
      $('.letter').removeClass('enlarge');
    }, 500);
    setTimeout(()=> {
      $('.letter').removeClass('opened');
    }, 1000);
    setTimeout(()=> {
      $('.inner').removeClass('opened');
    }, 1500);
  });
});
