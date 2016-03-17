// Your JS goes here
var body = document.getElementsByTagName('body')[0];

function color(square) {
  var char = '0123456789abcdef';
  char.split;
  var color = '#';
  for (var i = 0; i < 6; i++){
    var ranGen = Math.ceil(Math.random() * 15);
    color += char[ranGen];
  }
  square.style.backgroundColor = color;
}

function makeBoard(num) {
  for (var i = 0; i < num; i++){
    var square = document.createElement('div');
    square.style.paddingBottom = '11.1%';
    square.style.width = '11.1%';
    square.style.cssFloat = 'left';
    color(square);
    body.appendChild(square);
  }
}

makeBoard(81);
