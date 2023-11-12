import "./scss/styles.scss"

// dropdown

const navButton = document.querySelector(".header__nav-button")
const dropdownMenu = document.querySelector(".header__dropdown-menu")

navButton.addEventListener("click", function () {
  this.classList.toggle("active")
  dropdownMenu.classList.toggle("active")
})

// dropdown profile

const profileElement = document.querySelector(".header__profile")
const profileNavElement = document.querySelector(".header__profile-nav")

profileElement.addEventListener("click", function () {
  profileNavElement.classList.toggle("header__profile-nav_active")
})

// slider

const slider = document.getElementById("slider")
const slides = slider.querySelector(".slider__slides")
const nextBtn = document.querySelector(".slider__next-btn")
const indicators = document.querySelector(".slider__indicators")
const slideImages = slider.querySelectorAll(".slider__img")

for (let i = 0; i < slideImages.length; i++) {
  const indicator = document.createElement("div")
  indicator.classList.add("indicator")
  indicators.appendChild(indicator)
}

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

updateIndicators()
setInterval(nextSlide, 3000)

// form validation

const form = document.querySelector(".form")
const nameInput = document.getElementById("name")
const phoneInput = document.getElementById("phone")
const nameSpan = document.getElementById("nameSpan")
const numberSpan = document.getElementById("numberSpan")
const button = document.getElementById("formButton")

form.addEventListener("submit", function (event) {
  event.preventDefault()
  if (validateForm()) {
    submitForm()
  } else {
    console.log("Ошибка валидации")
  }
  checkInputs()
})

function validateForm() {
  let isValid = true
  if (nameInput.value.trim().length < 2) {
    isValid = false
    showError(nameInput, "Имя должно содержать как минимум две буквы", nameSpan)
  } else {
    hideError(nameInput, nameSpan)
  }

  if (phoneInput.value.trim().length < 6 || !/^\d+$/.test(phoneInput.value.trim())) {
    isValid = false
    showError(phoneInput, "Номер должен содержать как минимум шесть цифр", numberSpan)
  } else {
    hideError(phoneInput, numberSpan)
  }
  return isValid
}

function showError(input, message, errorSpan) {
  input.classList.add("error")
  errorSpan.classList.add("error-span")
  errorSpan.textContent = message
}

function hideError(input, errorSpan) {
  input.classList.remove("error")
  errorSpan.classList.remove("error-span")
  errorSpan.textContent = ""
}

function submitForm() {
  console.log("Форма успешно отправлена")
  nameInput.classList.add("success")
  phoneInput.classList.add("success")
}

function checkInputs() {
  if (nameInput.value.trim() !== "" && phoneInput.value.trim() !== "") {
    button.disabled = false
  } else {
    button.disabled = true
  }
}
checkInputs()

nameInput.addEventListener("input", checkInputs)
phoneInput.addEventListener("input", checkInputs)
