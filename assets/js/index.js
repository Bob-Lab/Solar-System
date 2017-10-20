function scrollSlide(dom, speed = 800) {

  $('html,body').animate({
    scrollTop: dom.offset().top
  }, speed);
}

$(document).ready(function() {
  $(".modal").on('hidden.bs.modal', function(e) {
    $(this).find("iframe").attr("src", $(this).find("iframe").attr("src"));
  });

  $('.carousel').carousel({
    interval: 60000
  })
});

function swalHelp(dom) {
  var swalTitle = $(dom).siblings('swal-title').html();
  var swalText = $(dom).siblings('swal-text').html();
  var swalIcon = $(dom).siblings('swal-icon').html();
  var swalClassName = $(dom).siblings('swal-class-name').html();

  swal({
    title: swalTitle,
    text: swalText,
    icon: swalIcon,
    className: swalClassName
  });
}
