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
