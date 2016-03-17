// Your JS goes here
var body = document.getElementsByTagName('body')[0];
var color1 = [0,0,150];
var color2 = [255,255,255];

function color(square, i) {
  if (i % 9 === 0){
    for (v in color1) {
      color1[v] += 15;
    }
    for (v in color2) {
      color2[v] -= 28;
    }
  }

  i % 2 === 0 ? square.style.backgroundColor = 'rgb('+color1[0]+','+color1[1]+','+color1[2]+')' : square.style.backgroundColor = 'rgb('+color2[0]+','+color2[1]+','+color2[2]+')';
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

makeBoard(81);
