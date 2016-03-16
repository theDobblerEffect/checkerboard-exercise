// Your JS goes here
var body = document.getElementsByTagName('body')[0];

function color(square, i) {
  i % 2 === 0 ? square.style.backgroundColor = 'red' : square.style.backgroundColor = 'black';
}

function makeBoard(num) {
  for (var i = 0; i < num; i++){
    var square = document.createElement('div');
    square.style.paddingBottom = '11.1%';
    square.style.width = '11.1%';
    square.style.cssFloat = 'left';
    color(square, i);
    body.appendChild(square);
  }
}

makeBoard(54);
