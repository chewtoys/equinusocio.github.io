window.onload = function () {
  var bgSound = document.getElementById("bgsound");
  var hoverSound = new Audio("../Expand.m4a");
  var outSound = new Audio("../Collapse.m4a");

  hoverSound.volume = 0.4;
  outSound.volume = 0.4;
  bgSound.volume = 0.4;
  bgSound.play();

  Array.prototype.forEach.call(
    document.querySelectorAll('.c-displayLink'), function (link) {
      link.addEventListener('mouseover', function(){
        outSound.pause();
        outSound.currentTime = 0;
        hoverSound.pause();
        hoverSound.currentTime = 0;
        hoverSound.play();
      });
      link.addEventListener('mouseout', function(){
        outSound.pause();
        outSound.currentTime = 0;
        outSound.play();
      });
    }
  )

  particlesJS.load('DustJs', '/javascripts/particles.json');


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


