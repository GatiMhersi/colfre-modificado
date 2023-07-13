var actual = document.getElementsByClassName("tv");
var archivoTXT = new XMLHttpRequest();
var fileRuta = 'tv.txt';

archivoTXT.open("GET", fileRuta, false);
archivoTXT.send(null);
var txt = archivoTXT.responseText;
actual[0].innerText = "$" + txt.split(",")[1];
