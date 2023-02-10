let sliderContainer = document.getElementById("slider1")
let btns = sliderContainer.querySelectorAll(".line")
for(let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.querySelectorAll(".line_active")
    current[0].className = current[0].className.replace("line_active", "")
    this.className += " line_active"
  })
}