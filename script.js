let sliderContainer = document.getElementById("slider1")
let btns = sliderContainer.querySelectorAll(".line")
for(let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.querySelectorAll(".line_active")
    current[0].className = current[0].className.replace("line_active", "")
    this.className += " line_active"
  })
}

let btnL = document.querySelector('.arrow_left')
let btnR = document.querySelector('.arrow_right')
let slides = document.querySelectorAll('.blocks')
let sliderCount = slides.length
let mainContainer = document.querySelector('.main_container')
let active = 0
btnL.addEventListener('click', () => {
  changeSlide('left')
})

btnR.addEventListener('click', () => {
  changeSlide('right')
})

function changeSlide(e) {
  if(e === 'right') {
    active--
    if(active < 0) {
      active = sliderCount - 1
    }
  } else if(e === 'left') {
    active++
    if(active === sliderCount) {
      active = 0
    }
  }
  let width = slides[0].clientWidth
  mainContainer.style.transform = `translateX(-${active * width}px)`
}