/* Author:

*/

var options = [
  'Why not? Fuck it.',
  'Sure, fuck it.',
  'Fuck it, man.',
  'YOLO. Fuck it.',
  'Don\'t be a pussy. Fuck it.',
  'Seriously? Fuck it.',
  'Really? Fuck it.',
  'Is it that big of a deal? Fuck it.',
  'It won\'t kill you. Fuck it.',
  'What would Jesus do? Fuck it.',
  'Come on champ. Fuck it.',
  'Dude, fuck it.',
  'Grow some balls. Fuck it.'
];

$(function() {

  $('#should').submit(function() {
    show();
    return false;
  });

  $('#answer').live('click', function() {
    hide();
    return false;
  });

});

function show() {
  var text = rand(options);
  $('#should').hide(0, function() {
    $('#answer').text(text).show();
  });
}

function hide() {
  $('#answer').hide(0, function() {
    $('#fuckit').val('');
    $('#should').show(0, function() {
      $('#fuckit').focus();
    });
  });
}

function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}