var actual = document.getElementsByClassName("precio-actual");
var archivoTXT = new XMLHttpRequest();
var fileRuta = 'fibra.txt';

archivoTXT.open("GET", fileRuta, false);
archivoTXT.send(null);
var txt = archivoTXT.responseText;
for(var i = 0; i<dato.length; i++){
    actual[i].innerText = "$" + txt.split(",")[i];
}
