function Mato() {
  this.x
  this.y
  this.xspeed = 0;
  this.yspeed = 0;
  this.häntä = [];
  this.total = 0;

  this.madonpaikka = function() {
    this.x = Math.floor(Math.random() * 15) * 30 + 200;
    this.y = Math.floor(Math.random() * 15) * 30 + 76;
  }

  this.kuoli = function() {
    for (var i = 0; i < this.häntä.length; i++) {
      var d = dist(this.x, this.y, this.häntä[i].x, this.häntä[i].y);
      if (d < 1) {
        this.resetoi();
      }
    }
  }

  this.resetoi = function() {
    this.total = 0;
    this.häntä = [];
    this.xspeed = 0;
    this.yspeed = 0;
    this.madonpaikka();
    if (äö > hg ) {
      hg = äö;
    }
  }



  this.takasin = function() {
    if (this.x > 649) {
      this.resetoi()
    }else if (this.y > 525) {
      this.resetoi()
    }else if (this.x < 201) {
      this.resetoi()
    }else if (this.y > 76) {
      this.resetoi()
    }
  }
  
 




  this.show = function() {
    fill(211, 125, 92);
    for (var i = 0; i < this.häntä.length; i++) {
      rect(this.häntä[i].x, this.häntä[i].y, grid, grid)
    }
    rect(this.x, this.y, grid, grid);
  }

  this.update = function() {
    if (this.total === this.häntä.length) {
      for (var i = 0; i < this.häntä.length - 1; i++) {
        this.häntä[i] = this.häntä[i + 1];
      }
    }

    r.x !== this.häntä.x;
    r.y !== this.häntä.y;

    äö = this.häntä.length;



    this.häntä[this.total - 1 ] = createVector(this.x, this.y);





    this.x += this.xspeed * grid;
    this.y += this.yspeed * grid;
  }

  this.dir = function(g, h) {
    this.xspeed = g;
    this.yspeed = h;
  }


}
