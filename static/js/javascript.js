var kastKlassigaElemendid = document.getElementsByClassName("kast");

var muudaMitmeSisestatudNumbriFonti = function() {
  this.style.fontSize = "0.8em";
  this.style.paddingBottom = "24px";
  this.style.textAlign = "left";
};

var muudaMitmeSisestatudNumbriFonti2 = function() {
  if (this.value.length > 1) {
    this.style.fontSize = "0.8em";
    this.style.paddingBottom = "0px";
    this.style.textAlign = "center";
  }
  if (this.value.length == 1) {
    this.style.fontSize = "2em";
    this.style.paddingBottom = "0px";
    this.style.textAlign = "center";
  }
};

for (var i = 0; i < kastKlassigaElemendid.length; i++) {
  kastKlassigaElemendid[i].addEventListener('input', muudaMitmeSisestatudNumbriFonti2);
}

var vahetaChecki = function(key) {
  if (key.keyCode === 9) {
    key.preventDefault();
    var fookusesKast = document.activeElement;
    if (fookusesKast.localName == "body") return;
    if (document.getElementById("teine").checked == true) {
      document.getElementById("esimene").checked = true;
      fookusesKast.style.paddingBottom = "0px";
      fookusesKast.style.textAlign = "center";
      if (fookusesKast.value.length == 1) {
        fookusesKast.style.fontSize = "2em";
      }
      for (var i = 0; i < kastKlassigaElemendid.length; i++) {
        kastKlassigaElemendid[i].removeEventListener('input', muudaMitmeSisestatudNumbriFonti);
        kastKlassigaElemendid[i].addEventListener('input', muudaMitmeSisestatudNumbriFonti2);
      }
    }
    else {
      document.getElementById("teine").checked = true;
        fookusesKast.style.paddingBottom = "24px";
        fookusesKast.style.textAlign = "left";
        fookusesKast.style.fontSize = "0.8em";
      for (var i = 0; i < kastKlassigaElemendid.length; i++) {
        kastKlassigaElemendid[i].removeEventListener('input', muudaMitmeSisestatudNumbriFonti2);
        kastKlassigaElemendid[i].addEventListener('input', muudaMitmeSisestatudNumbriFonti);
      }
    }
  }
};
document.addEventListener('keydown', vahetaChecki);

var teeFookusesKastTühjaks = function(key) {
  if (key.keyCode === 27) {
    document.activeElement.value = "";
  }
};

document.addEventListener('keydown', teeFookusesKastTühjaks);
