console.log("insanity check")

i = 60;
function onTimer() {
  document.getElementById('mycounter').innerHTML = i;
  i--;
  if (i < 0) {
    console.log('You lose!');
  }
  else {
    setTimeout(onTimer, 1000);
  }
}
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
