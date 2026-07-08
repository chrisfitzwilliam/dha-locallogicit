document.addEventListener("DOMContentLoaded", function () {
  var filterButtons = document.querySelectorAll("[data-filter]");
  var cards = document.querySelectorAll("[data-category]");
  var slides = document.querySelectorAll("[data-slide]");
  var dots = document.querySelectorAll("[data-slide-dot]");
  var nextButton = document.querySelector("[data-slide-next]");
  var prevButton = document.querySelector("[data-slide-prev]");
  var activeSlide = 0;

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var filter = button.getAttribute("data-filter");

      filterButtons.forEach(function (item) {
        item.classList.toggle("active", item === button);
      });

      cards.forEach(function (card) {
        var categories = card.getAttribute("data-category").split(" ");
        var shouldShow = filter === "all" || categories.indexOf(filter) !== -1;
        card.classList.toggle("is-hidden", !shouldShow);
      });
    });
  });

  function showSlide(index) {
    if (!slides.length) {
      return;
    }

    activeSlide = (index + slides.length) % slides.length;

    slides.forEach(function (slide, slideIndex) {
      slide.classList.toggle("active", slideIndex === activeSlide);
    });

    dots.forEach(function (dot, dotIndex) {
      dot.classList.toggle("active", dotIndex === activeSlide);
    });
  }

  if (nextButton && prevButton && slides.length) {
    nextButton.addEventListener("click", function () {
      showSlide(activeSlide + 1);
    });

    prevButton.addEventListener("click", function () {
      showSlide(activeSlide - 1);
    });

    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        showSlide(Number(dot.getAttribute("data-slide-dot")));
      });
    });

    window.setInterval(function () {
      showSlide(activeSlide + 1);
    }, 7000);
  }
});
