const toggles = document.querySelector(".toggle__menu");
const hNav = document.querySelector(".header__nav");
toggles.addEventListener("click", () => {
  toggles.classList.toggle("open");
  hNav.classList.toggle("open");
});

var slider = tns({
  container: ".sliderD",
  items: 3,
  slideBy: "page",
  autoplay: true,
  controls: 0,
  autoplayButtonOutput: 0,
  mouseDrag: true,
  navContainer: ".sliderD__nav",
  speed: 300,
});

var slider = tns({
  container: ".sliderT",
  items: 2,
  slideBy: "page",
  autoplay: true,
  controls: 0,
  autoplayButtonOutput: 0,
  mouseDrag: true,
  navContainer: ".sliderT__nav",
  speed: 300,
});

var slider = tns({
  container: ".sliderM",
  items: 1,
  slideBy: "page",
  autoplay: true,
  controls: 0,
  autoplayButtonOutput: 0,
  mouseDrag: true,
  navContainer: ".sliderM__nav",
  speed: 300,
});
