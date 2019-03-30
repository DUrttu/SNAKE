var m;
var grid = 30;
var r;
var nappi;
var leveys = 200 + 850;
var korkeus = 76 + 550;

let kuva;
let kuva2;
let kuva3;
let omena;
let fontti;

let hg;

let äö;

function preload() {
  fontti = loadFont('Antreas.ttf')
}

function setup() {
  var cnv = createCanvas(850, 550);
  m = new Mato();
  frameRate(9);
  r = new Ruoka();
  m.madonpaikka();
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  kuva2 = loadImage('matopeli tausta coming soon.png')
  kuva = loadImage('Imported piskel (2).png')
  omena = loadImage('omena paras.png');
  hg = 0
}

function draw() {
  background(kuva2);
  m.show();
  m.update();
  m.takasin();
  r.show();
  r.syö();
  m.kuoli();
  textAlign(CENTER)
  textFont(fontti)
  textSize(60);
  text(äö, 655, 170, 204);
  text(hg, 655, 380, 204);
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
