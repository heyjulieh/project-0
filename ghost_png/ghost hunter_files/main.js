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
$( document ).ready(function() {
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
var currFlashlightImg = $('#flashlight').attr('src');
var currBeamImg = $('#beam').attr('src');
var currFlashlightPos = $('#flashlight').attr('id');
var currBeamPos = $('#beam').attr('id');
var flashlightLeft = $('#'+currFlashlightPos).append('<img id="flashlight" src="ghost_png/flashlight_left.png"/>');
var beamLeft = $('#'+currBeamPos).append('<img id="beam" src="ghost_png/beam_left.png"/>');
var nextLeftFPos = function(){
  for (var i=0; i<currFlashlightPos.length; i--){
    row1[i]--;
    row2[i]--;
    row3[i]--;
    row4[i]--;
    row5[i]--;
  }
}
var nextLeftBeamPos = function(){
  for (var i=0; i<currBeamPos.length; i--){
    row1[i]--;
    row2[i]--;
    row3[i]--;
    row4[i]--;
    row5[i]--;
  }
}
  var flashlightRight = $('#'+currFlashlightPos).append('<img id="flashlight" src="ghost_png/flashlight_right.png"/>');
  var beamRight = $('#'+currBeamPos).append('<img id="beam" src="ghost_png/beam_right.png"/>');
  var nextRightFPos = function(){
    for (var i=0; i<currFlashlightPos.length; i++){
      row1[i]++;
      row2[i]++;
      row3[i]++;
      row4[i]++;
      row5[i]++;
    }
  }
  var nextRightBeamPos = function(){
    for (var i=0; i<currBeamPos.length; i++){
      row1[i]++;
      row2[i]++;
      row3[i]++;
      row4[i]++;
      row5[i]++;
    }
  }
  var flashlightUp = $('#'+currFlashlightPos).append('<img id="flashlight" src="ghost_png/flashlight_up.png"/>');
  var beamUp = $('#'+currBeamPos).append('<img id="beam" src="ghost_png/beam_up.png"/>');
  var nextUpFPos = function(){
    for (var i=0; i<currFlashlightPos.length; i++){
      board[i]--;
    }
  }
  var nextUpBeamPos = function(){
    for (var i=0; i<currBeamPos.length; i++){
      board[i]--;
    }
  }
  var flashlightDown = $('#'+currFlashlightPos).append('<img id="flashlight" src="ghost_png/flashlight_down.png"/>');
  var beamDown = $('#'+currBeamPos).append('<img id="beam" src="ghost_png/beam_down.png"/>');
  var nextDownFPos = function(){
    for (var i=0; i<currFlashlightPos.length; i++){
      board[i]++;
    }
  }
  var nextDownBeamPos = function(){
    for (var i=0; i<currBeamPos.length; i++){
      board[i]++;
    }
  }
  document.addEventListener('keydown', function(event){
    // event = event || window.event;
      // var keycode = event.charCode || event.keyCode;
      if(event.keyCode == 37){
        left();
        event.preventDefault();
        console.log(event.keyCode);
      }
      if(event.keyCode == 39){
        right();
        event.preventDefault();
        console.log(event.keyCode);
      }
      if(event.keyCode == 38){
        up();
        console.log(event.keyCode);
        event.preventDefault();
        console.log(event.keyCode);
      }
      if(event.keyCode == 40){
        down();
        event.preventDefault();
        console.log(event.keyCode);
      }
  });
// Begin playing
  function movePlayer (){
    function left(){
      if (row1[0] === 1 || row2[0] === 1 || row3[0] === 1 || row4[0] === 1 || row5[0] === 1){
        return false;
      }
      else if (currFlashlightImg === 'ghost_png/flashlight_up'){
        return flashlightLeft;
      }
      else if (currBeamImg === 'ghost_png/beam_up'){
        return beamLeft;
      }
      else if (currFLashlightImg === 'ghost_png/flashlight_down'){
        return flashlightLeft;
      }
      else if (currBeamImg === 'ghost_png/beam_down'){
        return beamLeft;
      }
      else if (currFlashlightImg === 'ghost_png/flashlight_right'){
        return flashlightLeft;
      }
      else if (currBeamImg === 'ghost_png/beam_right'){
        return beamLeft;
      }
      else if (currFlashlightImg === 'ghost_png/flashlight_left'){
        $('#'+nextLeftFPos).append('<img id="beam" src="ghost_png/beam_left.png"/>');
        return flashlightLeft;
      }
      else if (currBeamImg === 'ghost_png/beam_left'){
        $('#'+nextLeftBeamPos).append('<img id="beam" src="ghost_png/beam_left.png"/>');
        return beamLeft;
      }
    }
    function right(){
      if (row1[4] === 1 || row2[4] === 1 || row3[4] === 1 || row4[4] === 1 || row5[4] === 1){
        return false;
      }
      else if (currFlashlightImg === 'ghost_png/flashlight_up'){
        return flashlightRight;
      }
      else if (currBeamImg === 'ghost_png/beam_up'){
        return beamRight;
      }
      else if (currFLashlightImg === 'ghost_png/flashlight_down'){
        return flashlightRight;
      }
      else if (currBeamImg === 'ghost_png/beam_down'){
        return beamRight;
      }
      else if (currFlashlightImg === 'ghost_png/flashlight_right'){
        $('#'+nextRightFPos).append('<img id="beam" src="ghost_png/beam_right.png"/>');
        return flashlightRight;
      }
      else if (currBeamImg === 'ghost_png/beam_right'){
        $('#'+nextRightBeamPos).append('<img id="beam" src="ghost_png/beam_right.png"/>')
        return beamRight;
      }
      else if (currFlashlightImg === 'ghost_png/flashlight_left'){
        return flashlightRight;
      }
      else if (currBeamImg === 'ghost_png/beam_left'){
        return beamRight;
      }
    }
    function up(){
      if (board[1] === 1){
        return false;
      }
      else if (currFlashlightImg === 'ghost_png/flashlight_up'){
        $('#'+nextUpFPos).append('<img id="flashlight" src="ghost_png/flashlight_up.png"/>');
        return flashlightUp;
      }
      else if (currBeamImg === 'ghost_png/beam_up'){
        $('#'+nextUpBeamPos).append('<img id="beam" src="ghost_png/beam_up.png"/>');
        return beamlightUp;
      }
      else if (currFLashlightImg === 'ghost_png/flashlight_down'){
        return flashlightUp;
      }
      else if (currBeamImg === 'ghost_png/beam_down'){
        return beamUp;
      }
      else if (currFlashlightImg === 'ghost_png/flashlight_right'){
        return flashlightUp;
      }
      else if (currBeamImg === 'ghost_png/beam_right'){
        return beamUp;
      }
      else if (currFlashlightImg === 'ghost_png/flashlight_left'){
        return flashlightUp;
      }
      else if (currBeamImg === 'ghost_png/beam_left'){
        return beamUp;
      }
    }
    function down(){
      if (board[4] === 1){
        return false;
      }
      else if (currFlashlightImg === 'ghost_png/flashlight_up'){
        return flashlightDown;
      }
      else if (currBeamImg === 'ghost_png/beam_up'){
        return beamDown;
      }
      else if (currFLashlightImg === 'ghost_png/flashlight_down'){
          $('#'+nextDownFPos).append('<img id="flashlight" src="ghost_png/flashlight_down.png"/>');
        return flashlightDown;
      }
      else if (currBeamImg === 'ghost_png/beam_down'){
        $('#'+nextDownBeamPos).append('<img id="beam" src="ghost_png/beam_down.png"/>');
        return beamDown;
      }
      else if (currFlashlightImg === 'ghost_png/flashlight_right'){
        return flashlightDown;
      }
      else if (currBeamImg === 'ghost_png/beam_right'){
        return beamDown;
      }
      else if (currFlashlightImg === 'ghost_png/flashlight_left'){
        return flashlightDown;
      }
      else if (currBeamImg === 'ghost_png/beam_left'){
        return beamDown;
      }
    }

  // GAME LOGIC
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

  }

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
