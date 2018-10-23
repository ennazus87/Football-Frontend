//scroll to top functionality
$(window).scroll(() => {
  if ($(this).scrollTop() > 100) {
    $('.scroll-to-top-cta').fadeIn();
  } else {
    $('.scroll-to-top-cta').fadeOut();
  }
});

$('.scroll-to-top').on('click', () => {
  $('html, body').animate({ scrollTop: 0 }, 1000);
});

//trim article text if over 100 characters, and append [...] to indicate "read more"
$(document).ready(function($) {
  $("#article-preview").each(function() {
      if ($(this).text().length > 100) {
          $(this).text($(this).text().substr(0, 95));
          $(this).append(' [...]');
      }
  });
});
