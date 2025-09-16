// Footer date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Wind chill calculation (metric, one-liner)
function calculateWindChill(t, v) { 
  return (13.12 + 0.6215*t - 11.37*Math.pow(v, 0.16) + 0.3965*t*Math.pow(v, 0.16)).toFixed(1);
}

// Static values from HTML
const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);

// Apply conditions
document.getElementById("windchill").textContent = 
  (temp <= 10 && wind > 4.8) ? `${calculateWindChill(temp, wind)} °C` : "N/A";
