; (function ($) {
  // Need to replace mobile nav functionality
  $('.navbar-toggler').click(function () {
    $('body').toggleClass('nav-act')
  })

  $('.drop-close').click(function () {
    $(this).parent().parent().removeClass('act')
  })
})(jQuery)
