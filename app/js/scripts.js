$(".portfolio-image").click(  function(e) {
  var image = $(this).attr("data-image-url");
  $(".modal-content img").attr("src", image);
  $(".modal-box").addClass("is-active");
  $("body").addClass("noscroll");
} );


$(".button-close").click(  function(e) {
  modalClose();
} );

$(window).keyup( function(e) {
  var key = e.key || e.keyCode;
  if (key === 'Escape' || key === 'Esc' || key === 27) {
    modalClose();
  }
} );

$(".modal-content").mouseleave( function(e) {
  $(".modal-box").click( function(e) {
    modalClose();
  } );
} );

function modalClose() {
  $(".modal-box").removeClass("is-active");
  $("body").removeClass("noscroll");
}
