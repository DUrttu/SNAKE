function Ruoka() {
  this.x = f;
  this.y = j;

  this.uusi = function() {
    f = Math.floor(Math.random() * 30) * 30;
    j = Math.floor(Math.random() * 30) * 30;
  }

  this.syö = function() {
    if (m.x === f && m.y === j) {
      this.uusi();
      m.total++;
    }
  }


  var f = Math.floor(Math.random() * 30) * 30;
  var j = Math.floor(Math.random() * 30) * 30;

  this.show = function() {
    fill(200, 0, 0);
    rect(f, j, grid, grid,);
  }
}
