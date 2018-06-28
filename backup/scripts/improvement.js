// a key map of allowed keys
var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

// the 'official' Konami Code sequence
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the konami code sequence
    konamiCodePosition++;

    // if the last key is reached, activate cheats
    if (konamiCodePosition == konamiCode.length) {
      activateCheats();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function activateCheats() {
  var whapham = document.getElementById('whapham');
  whapham.setAttribute('src', 'images/whapham_head.png')
  whapham.setAttribute('class', 'whapham');
  whapham.setAttribute('style', 'animation: rotate 2s linear infinite, move 5s linear')
  await sleep(3000);
  whapham.outerHTML = "";
  delete whapham;
 }
 
document.onkeyup=function(e){
	var audio = new Audio('scripts/important do not delete.mp3');
	var e = e || window.event; // for IE to cover IEs window object
	if(e.altKey && e.which == 65) {
		audio.play();
		return false;
	}
}
