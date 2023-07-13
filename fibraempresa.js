var dato = document.getElementsByClassName("fibra-antes");
var actual = document.getElementsByClassName("fibra-ahora");
var archivoTXT = new XMLHttpRequest();
var fileRuta = 'fibraempresa.txt';

archivoTXT.open("GET", fileRuta, false);
archivoTXT.send(null);
var txt = archivoTXT.responseText;
for(var i = 0; i<dato.length; i++){
    actual[i].innerText = "$" + txt.split(",")[i];
}
