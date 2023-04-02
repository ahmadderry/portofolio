$(document).ready(function() {
    $('.gambar').click(function() {
      var imgSrc = $(this).find('img').attr('src');
      var imgAlt = $(this).find('img').attr('alt');
      var imgDesc = $(this).find('p').text();
  
      $('.overlay img').attr('src', imgSrc);
      $('.overlay img').attr('alt', imgAlt);
      $('.overlay p').text(imgDesc);
  
      $('.overlay').fadeIn();
    });
  
    $('.overlay').click(function() {
      $(this).fadeOut();
    });
  });
  