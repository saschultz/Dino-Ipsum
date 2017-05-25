Dino = function(){}

Dino.prototype.getDino = function(paragraphNumber, wordNumber, displayDino) {
  $.get(`http://dinoipsum.herokuapp.com/api/?format=text&paragraphs=${paragraphNumber}&words=${wordNumber}`).then(function(response) {
    displayDino(response);
  }).fail(function(error) {
    $('.results').text(error.responseJSON.message);
  });
};

exports.dinoModule = Dino;
