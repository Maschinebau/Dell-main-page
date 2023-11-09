import "./scss/styles.scss"

// dropdown

const navButton = document.querySelector(".header__nav-button")
const dropdownMenu = document.querySelector(".header__dropdown-menu")

navButton.addEventListener("click", function () {
  this.classList.toggle("active")
  dropdownMenu.classList.toggle("active")
})

// slider

const slider = document.getElementById("slider")
const slides = slider.querySelector(".slider__slides")
const nextBtn = slider.querySelector(".slider__next-btn")
const indicators = slider.querySelector(".slider__indicators")
const slideImages = slider.querySelectorAll(".slider__img")

let slideIndex = 0

function goToSlide(index) {
  slideIndex = index
  updateIndicators()
}

function updateIndicators() {
  const indicatorElements = indicators.querySelectorAll(".indicator")
  indicatorElements.forEach((indicator, index) => {
    if (index === slideIndex) {
      indicator.classList.add("active")
    } else {
      indicator.classList.remove("active")
    }
  })
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slideImages.length
  goToSlide(slideIndex)
  slides.style.transform = `translateX(-${slideIndex * 100}%)`
}

nextBtn.addEventListener("click", nextSlide)

for (let i = 0; i < slideImages.length; i++) {
  const indicator = document.createElement("div")
  indicator.classList.add("indicator")
  indicators.appendChild(indicator)
}

updateIndicators()
setInterval(nextSlide, 3000)
