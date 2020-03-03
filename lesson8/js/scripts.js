var severity = document.getElementById('severity');
var output = document.getElementById("ratingValue");
output.innerText = slider.value; 

slider.oninput = function () {
    output.innerHTML = this.value;
}