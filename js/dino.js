Dino = function(){}

Dino.prototype.getDino = function(paragraphNumber, wordNumber) {
  $.get(`http://dinoipsum.herokuapp.com/api/?format=text&paragraphs=${paragraphNumber}&words=${wordNumber}`).then(function(response) {
    console.log(response);
    $('.results').text(response);
    // displayDino(response);
  }).fail(function(error) {
    $('.results').text(error.responseJSON.message);
  });
};

exports.dinoModule = Dino;
