$(function () {

  $('#mobile-menu-button').click(function () {
    if ($('.nav-container').hasClass('showing')) {
      $('.nav-container').removeClass('showing').addClass('hiding')
    } else {
      $('.nav-container').removeClass('hiding').addClass('showing')
    }
  })

})
