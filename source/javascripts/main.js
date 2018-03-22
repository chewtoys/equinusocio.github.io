window.onload = function () {
  var audio = document.getElementById("bgsound");
  audio.volume = 0.4;
  audio.play();

  particlesJS.load('DustJs', '/javascripts/particles.json', function () {
    console.log('callback - particles.js config loaded');
  });

  var movementStrength = 55;
  var height = movementStrength / window.innerWidth;
  var width = movementStrength / window.innerWidth;

  document.addEventListener('mousemove', function (event) {
    var pageX = event.pageX - (window.innerWidth / 2);
    var pageY = event.pageY - (window.innerHeight / 2);
    var newvalueX = width * pageX * -1 - 25;
    var newvalueY = height * pageY * -1 - 50;
    var htmlElement = document.querySelector('.MoveBackground');
    htmlElement.style.backgroundPosition = newvalueX + 'px     ' + newvalueY + 'px';
  });
}


