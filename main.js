console.log("sanity check")

// Countdown
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
      $(this).append('<img class="hidden" src="' + images[rand] + '"/>');
  });

}
$(document).ready(function() {
// Disable start button after first click
$('#startbutton').click(function(){
	$(this).attr('onclick','');
	return false;
});
// Start game play
// Set flashlight sprite at b21 and beam at b16 on document load
var flashlightStart = $('#b21').append('<img id="flashlight" src="ghost_png/flashlight_up.png"/>');
var beamStart = $('#b16').append('<img id="beam" src="ghost_png/beam_up.png"/>');
var containGhost = ['<img class="hidden" src="ghost_png/ghost_png/003-ghost.png"/>', '<img class="hidden" src="ghost_png/ghost_png/004-ghost.png"/>'];
// Move flashlight and beam up or right using keys
// Change flashlight and beam image depending on key
// i.e. if move up, flashlight image = up, beam image = up, original cell where flashlight was = blank
var board = {
  row1: [$('#b1'),$('#b2'),$('#b3'),$('#b4'),$('#b5')],
  row2: [$('#b6'),$('#b7'),$('#b8'),$('#b9'),$('#b10')],
  row3: [$('#b11'),$('#b12'),$('#b13'),$('#b14'),$('#b15')],
  row4: [$('#b16'),$('#b17'),$('#b18'),$('#b19'),$('#b20')],
  row5: [$('#b21'),$('#b22'),$('#b23'),$('#b24'),$('#b25')]
}

// Get position and image src of flashlight and beam
var x, y;
var a, b;

$(function() {
  // set how many pixels to move on each press
  var step = 60;
  // cache references to flashlight and beam jquery objects
  var theFlashlight = $('#flashlight');
  var theBeam = $('#beam')
  var theContainer = $('.container');

  $('body').on('keydown', function(e) {
      // get the current position
      var pos_flash = theFlashlight.position();
      var pos_beam = theBeam.position();
      // now check which key was pressed
      switch(e.which)
      {
          case 38: // up
              if(pos_flash.top >= step) {    // check it will not go out the container
                  pos_flash.top -= step;     // update the stored position
                  theFlashlight.css('top', pos_flash.top + 'px'); // move the image
              }
              if(pos_beam.top >= step) {    // check it will not go out the container
                  pos_beam.top -= step;     // update the stored position
                  theBeam.css('top', pos_beam.top + 'px'); // move the image
              }
              break;

          case 40: // down
              if(pos_flash.top <= theContainer.height() - theFlashlight.height() - step) {
                  pos_flash.top += step;
                  theFlashlight.css('top', pos_flash.top + 'px');
              }
              if(pos_beam.top <= theContainer.height() - theBeam.height() - step) {
                  pos_beam.top += step;
                  theBeam.css('top', pos_beam.top + 'px');
              }
              break;

          case 37: // left
              if(pos_flash.left >= step) {
                  pos_flash.left -= step;
                  theFlashlight.css('left', pos_flash.left + 'px');
              }
              break;
              if(pos_beam.left >= step) {
                  pos_beam.left -= step;
                  theBeam.css('left', pos_beam.left + 'px');
              }
              break;

          case 39: // right
              if(pos_flash.left <= theContainer.width() - theFlashlight.width() - step) {
                  pos_flash.left += step;
                  theFlashlight.css('left', pos_flash.left + 'px');
              }
              if(pos_beam.left <= theContainer.width() - theBeam.width() - step) {
                  pos_beam.left += step;
                  theBeam.css('left', pos_beam.left + 'px');
              }
              break;

      }
      // store the co-ordinates
      x = pos_flash.left;
      y = pos_flash.top;
      a = pos_beam.left;
      b = pos_beam.top;
      console.log(x, y);
      console.log(a, b);

      // prevent default event, usually page scrolling
      return false;
  });

  $('body').on('keyup', function(e) {

      // now check which key was pressed
      switch(e.which)
      {
          case 37: case 38: case 39: case 40:
              break;
      }
  });
})
  // LOGIC
    // for key up, false for values in row 1 = board[0]
    // for key left, false for values in row1[0], row2[0], row3[0], row4[0], row5[0]
    // for key right, false for values in row1[4], row2[4], row3[4], row4[4], row5[0]
    // for key down, false for values in row 5
    // for flashlight_up + beam_up in board[y] and row[x]
      // if key up, append image_up to new positions: board[y]--
      // if key down, append image_down to current positions
      // if key right, append image_right to current positions
      // if key left, append image_left to current positions
    // for flashlight_left + beam_left in board[y] and row[x]
      // if key up, append image_up to current positions
      // if key down, append image_down to current positions
      // if key right, append image_right to current positions
      // if key left, append image_left to new positions: row[x]--
    // for flashlight_right + beam_right in board[y] and row[x]
      // if key up, append image_up to current positions
      // if key down, append image_down to current positions
      // if key right, append image_right to new postions: row[x]++
      // if key left, append image_left to current positions
    // for flashlight_down + beam_down in board[y] and row[x]
      // if key up, append image_up to current positions
      // if key down, append image_up to new positions: board[y]++
      // if key right, append image_right to current positions
      // if key left, append image_left to current positions
      // Keydown listener


  function checkGhost (){
    // if beam in the same cell as ghost, remove beam image and show hidden class image
    // then remove image from div and add beam image to cell
    // then score ++
  }
  function winGhostHunter(){
    // if all boxes no longer has images and countdown > 0, winner
    // append winner div + show total score to board
    // if boxes still have images and countdown < 0, loser
    // append loser div to board
  }
// begin ghost tracker here
var score = 0;
// repeat/for loop until the player has found all the ghosts
// if the countdown is at 0 before the player has found all the ghosts, the player loses, game ends
// if the countdown is greater than 0 and the player has found all the ghosts, the player wins, game ends
});
