let sliderContainer = document.querySelector("#slider")
let btns = sliderContainer.querySelectorAll(".line")
for(let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.querySelectorAll(".line_active")
    current[1].className = current[0].className.replace("line_active", "")
    this.className += " line_active"
  })
}