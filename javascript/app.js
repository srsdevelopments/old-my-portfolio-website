$(function () {
  $(document).scroll(function () {
      var $nav = $("#masterhead");
      var $home = $("#aboutcont");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $home.height());
    });
});
