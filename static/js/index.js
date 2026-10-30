$(document).ready(function () {
  // Navbar burger toggle (mobile)
  $(".navbar-burger").click(function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  // Results carousel
  bulmaCarousel.attach('.carousel', {
    slidesToScroll: 1,
    slidesToShow: 2,
    loop: true,
    infinite: true,
    autoplay: false,
    breakpoints: [{ changePoint: 768, slidesToShow: 1, slidesToScroll: 1 }]
  });

  // Copy BibTeX
  $("#copy-bibtex").click(function () {
    var btn = $(this);
    var text = $("#bibtex-code").text();
    var done = function () { btn.find(".label").text("Copied"); setTimeout(function () { btn.find(".label").text("Copy"); }, 1600); };
    try {
      navigator.clipboard.writeText(text).then(done, function () { selectBib(); });
    } catch (e) { selectBib(); }
  });
  function selectBib() {
    var r = document.createRange();
    r.selectNodeContents(document.getElementById("bibtex-code"));
    var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
  }
});
