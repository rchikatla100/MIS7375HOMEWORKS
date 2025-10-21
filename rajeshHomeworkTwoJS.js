/*const date = new Date();
let text = date.toLocaleDateString();
document.getElementById("today").innerHTML = text;
*/


let slider = document.getElementById("myRange");
let output = document.getElementById("rangeSlider");
output.innerHTML = slider.value;
  slider.oninput = function() 
  {
    output.innerHTML = this.value;
  }
