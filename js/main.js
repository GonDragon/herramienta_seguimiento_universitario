$('#carouselInfo').on('slide.bs.carousel', {carouselname: "#carouselInfo"},function (event) {
  $(event.data.carouselname + " .nav .nav-link").eq(event.to).toggleClass("active");
  $(event.data.carouselname + " .nav .nav-link").eq(event.from).toggleClass("active");
})
