$(document).on('scroll', function(){
  var scrollPos = $(document).scrollTop();
  $('#navbarContent a').each(function () {
    var currentLink = $(this);
    var refElement = $(currentLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('#navbarContent a').removeClass("active");
        currentLink.addClass("active");
    }
    else{
        currentLink.removeClass("active");
    }
  });
});

$('a[href^="#"]').on('click', function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 800); // The number here represents the speed of the scroll in milliseconds
      return false;
    }
  }
});

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
