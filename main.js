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

var imagesArray = ["http://orig10.deviantart.net/d64b/f/2016/136/9/8/pixel_art__cute_ghost_by_slhqueenbee-da2dhir.png", "http://data.whicdn.com/images/170513401/superthumb.gif"];


//create a function named displayImage
//it should not have any values passed into it

var random1, random2;


//sets array variables to random numbers
function createLottoValues() {
  for (var i=0; i<imagesArray.length; i++) {
      imagesArray[i] = Math.floor(Math.random()*25 + 1);
  }
}

function updateTable() {
  createLottoValues();
  for (var i=0; i<imageArray.length; i++) {
    tmp = 'box'+(i+1);
    document.getElementById(tmp).innerHTML = imagesArray[i];
  }
}
