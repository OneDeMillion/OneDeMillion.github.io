var slider = document.getElementById('severity');
var output = document.getElementById("ratingValue");
output.innerHTML = slider.value; 

slider.oninput = function () {
    output.innerHTML = this.value;
}