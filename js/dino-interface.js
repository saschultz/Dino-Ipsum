var Dino = require('./../js/dino.js').dinoModule;

var displayDino = function(dinoTranslation) {
  $('.results').text(dinoTranslation);
}

$(document).ready(function(){
  var currentDinoObject = new Dino();
  $('#dino-me').click(function(){
    var paragraphNumber = $('#paragraph-number').val();
    var wordNumber = $('#word-number').val();
    currentDinoObject.getDino(paragraphNumber, wordNumber, displayDino);
  });
});
