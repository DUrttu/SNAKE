var m;
var grid = 30;
var r;
var nappi;

let kuva;
let kuva2;

let äö

function setup() {
  createCanvas(900, 900);
  m = new Mato();
  frameRate(10);
  r = new Ruoka();
  m.madonpaikka();
  kuva = loadImage('https://raw.githubusercontent.com/DUrttu/SNAKE/gh-pages/Imported%20piskel%20(1).png');
  //kuva2 = loadImage('')
}

function draw() {
  background(kuva);
  m.show();
  m.update();
  m.takasin();
  r.show();
  r.syö();
  m.kuoli();
  //textSize(30)
  //text('Score', 100, 100);
  nappi = createButton('Score ' + (äö));
  nappi.position(930, 60);
}


function keyPressed() {
  if (keyCode === UP_ARROW && m.yspeed !== 1) {
    m.dir(0, -1);
  }else if (keyCode === DOWN_ARROW && m.yspeed !== -1){
    m.dir(0, 1);
  }else if (keyCode === LEFT_ARROW && m.xspeed !== 1){
    m.dir(-1, 0);
  }else if (keyCode === RIGHT_ARROW && m.xspeed !== -1){
    m.dir(1, 0);
  }
}
