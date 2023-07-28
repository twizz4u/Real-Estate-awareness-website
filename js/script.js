"strict";
const year = document.querySelector(".year");
const btnExpand = document.querySelectorAll(".exp-btn");

const currentYear = new Date().getFullYear();
year.textContent = currentYear;

const expdClose = function (type) {
  let dots = document.querySelector(`.service-sub[data-type="${type}"] .dots`);
  let moreText = document.querySelector(
    `.service-sub[data-type="${type}"] .more`
  );
  let btn = document.querySelector(
    `.service-sub[data-type="${type}"] .exp-btn`
  );
  let box = document.querySelector(`.${type}-box`);
  console.log(box);

  mediaQuery = window.matchMedia("(max-width: 1200px)");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btn.textContent = "Read More";
    moreText.style.display = "none";
    box.style.height = "36rem";
  } else {
    mediaQuery.matches
      ? (box.style.height = "45rem")
      : (box.style.height = "41rem");
    dots.style.display = "none";
    moreText.style.display = "inline";
    btn.textContent = "Read Less";
  }
};

const buttonToggle = document.querySelector(".toggle-button");

const close = document.querySelector(".close");

const mNav = document.querySelector(".mobile-nav");

buttonToggle.addEventListener("click", function () {
  mNav.classList.add("mobile-nav-open");
});

close.addEventListener("click", function () {
  mNav.classList.remove("mobile-nav-open");
});

const alllinks = document.querySelectorAll("a:link");

alllinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);

      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("mobile-nav__link")) {
      mNav.classList.remove("mobile-nav-open");
    }
  });
});
