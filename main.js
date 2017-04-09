console.log("insanity check")

// Set up board
i = 40;
function onTimer() {
  document.getElementById('mycounter').innerHTML = "countdown: " + i;
  i--;
  if (i < 0) {
    console.log('You lose-- you have been possessed!');
  }
  else {
    setTimeout(onTimer, 1000);
  }
}

// Place random images on board
function randomImages (){
  var images = [
    "ghost_png/003-ghost.png",
    "ghost_png/004-ghost.png",
    "", "", "", "", ""];
  $('.box').each(function () {
      var rand = Math.floor(Math.random() * 7);
      console.log(rand);
      $(this).append('<img src="' + images[rand] + '"/>');
  });

  // Button functions
}

$("#restartbutton").on('click',function(){
    $(".box").append('');
    $(".box").removeClass('ghostcaught');
    $("#mycounter").innerHTML = 60;
});

$('#startbutton').click(function(){
	$(this).attr('onclick','');
	showConfirm(onclick);
	return false;
});

// Keys
var keys = {
	left: false,
	right: false,
	up: false,
	down: false
};

// Keydown listener
document.body.addEventListener('keydown', function(e) {
	e = e.keyCode;
	if (e === 37) keys.left  = true;
	if (e === 39) keys.right = true;
	if (e === 38) keys.up    = true;
	if (e === 40) keys.down  = true;
});

// Keyup listener
document.body.addEventListener('keyup', function(e) {
	e = e.keyCode;
	if (e === 37) keys.left  = false;
	if (e === 39) keys.right = false;
	if (e === 38) keys.up    = false;
	if (e === 40) keys.down  = false;
});

// Start game play
// Set flashlight sprite at b21 and beam at b16 on document load
// Set visibility of ghosts to hidden
// Move flashlight and beam up or right using keys
// Change flashlight and beam image depending on key
// i.e. if move up, flashlight image = up, beam image = up, original cell where flashlight was = blank
// if the beam enters any cell with images of ghost, ghost image disappears from cell, and the ghost-tracker counter adds +1 (to ghost-tracker div); else, the flashlight and the beam moves forward
// begin ghost tracker here
var score = 0;
// repeat/for loop until the player has found all the ghosts
// if the countdown is at 0 before the player has found all the ghosts, the player loses, game ends
// if the countdown is greater than 0 and the player has found all the ghosts, the player wins, game ends
