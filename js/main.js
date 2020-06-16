"use strict";

// Make Nav Bar
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  //   console.log(window.scrolly);
  //   console.log(`navbarHeight: ${navbarHeight} `);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// 시계

let time = document.querySelector(".home__time");
function abc() {
  let today = new Date();
  let hours = today.getHours(); // 시
  let minutes = today.getMinutes(); // 분
  let seconds = today.getSeconds(); // 초
  time.innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(abc, 1000);

// NavBarmenu 를 클릭했을때 스크롤링이 되어진다.

const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  // console.log(event.target.dataset.link);
  // const scrollTo = document.querySelector(link);
  // scrollTo.scrollIntoView({ behavior: "smooth" });
  scrollIntoView(link);
});

// Home Contact 버튼 클릭 이동
const homeContactBtn = document.querySelector(".home__contact");

homeContactBtn.addEventListener("click", () => {
  // const scrollTo = document.querySelector("#contact");
  // scrollTo.scrollIntoView({ behavior: "smooth" });
  scrollIntoView("#contact");
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
