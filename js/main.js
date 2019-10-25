// Inicializar Carousel Principal --> Probablemente sea preferible moverlo a un tag script en la página principal.
$('#carouselInfo').on('slide.bs.carousel', {carouselname: "#carouselInfo"},function (event) {
  $(event.data.carouselname + " .nav .nav-link").eq(event.to).toggleClass("active");
  $(event.data.carouselname + " .nav .nav-link").eq(event.from).toggleClass("active");
})

// Inicializar los tooltips.
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
