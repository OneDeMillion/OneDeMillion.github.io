let t = parseFloat(document.getElementById("highTemp").innerText);
//console.log(t);
let s = parseFloat(document.getElementById("windSpd").innerText);
//console.log(s)
let w = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s,0.16)) + (0.04275 * t * Math.pow(s,0.16));
//console.log(w)

if(t <= 50 && s > 3) {

document.getElementById("windChill").innerText=w.toFixed(0) ;

}

else {
    document.getElementById("windChill").innerText="N/A";
}
