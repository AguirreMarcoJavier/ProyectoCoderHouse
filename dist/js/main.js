$('#menu-button').click(function() {
     $(this).toggleClass('change');
     $('.nav-links').toggleClass('nav-open');
});


$(window).resize(function() {
     if ($(window).width() > 768) {
          console.log($(window).width());
          if ($('.nav-links').hasClass('nav-open')) {
               $('#menu-button').toggleClass('change');
               $('.nav-links').toggleClass('nav-open');
          }
     }
});
