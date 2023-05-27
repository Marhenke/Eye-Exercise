const balls = document.getElementsByClassName('ball');
const color = document.getElementById('background');

document.addEventListener("mousemove", function(event) {

  var i = event.clientX / window.innerWidth;  // Normalize mouse X position
  var j = event.clientY / window.innerHeight; // Normalize mouse Y position

  var hue = i * 255; // Map X position to hue value (0-360)

  var saturation = j * 255; // Map Y position to saturation value (0-100)

  var backgroundColor = "hsl(" + hue + ", " + saturation + "%, 80%)";

  color.style.background = backgroundColor;

  
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';
  
  for (let i = 0; i <= 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }


  
});