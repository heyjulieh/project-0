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
  var images = ["ghost_png/001-halloween.png", "ghost_png/002-ghost-2.png", "ghost_png/003-ghost-1.png", "ghost_png/004-ghost.png", "ghost_png/005-game-ghost.png"];
  $('.box').each(function () {
      var rand = Math.floor(Math.random() * 5);
      $(this).append('<img src="' + images[rand] + '"/>');
      return;
  });
}
