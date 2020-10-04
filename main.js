var y = 200;
var x = 633;
var width = 50;
var height = 50;

//player = (x, y, width)
function draw()
{
    var canvas = document.getElementById('canvas');
    if (canvas.getContext)
    {
      var context = canvas.getContext('2d');

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillRect(x, y, width, height);
      //context.clearRect(40,40,60,60);
      //context.strokeRect(45,45,50,50);
    }
}

//keybinds
window.addEventListener("keydown", function(event) {
  if (event.defaultPrevented) {
    return; // Do nothing if event already handled
  }
 
  switch(event.code) {
    case "KeyS":
      y = y + 15
      draw()
      break;
    case "KeyW":
      y = y - 15
      draw()
      break;
    case "KeyA":
      x = x - 15
      draw()
      break;
    case "KeyD":
      x = x + 15
      draw()
      break;
  } 
  // Consume the event so it doesn't get handled twice
  event.preventDefault();
}, true);

while (1 < 10)
{
  y = y + 15;
  draw()
  console.log("Z");
}