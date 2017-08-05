window.onload = function () {
  var audio = document.getElementById("bgsound");
  audio.volume = 0.4;
  audio.play();

  particlesJS.load('DustJs', '/javascripts/particles.json', function () {
    console.log('callback - particles.js config loaded');
  });
}


