var dato = document.getElementsByClassName("precio-anterior");
var actual = document.getElementsByClassName("precio-actual");
var archivoTXT = new XMLHttpRequest();
var fileRuta = 'mobile.txt';

archivoTXT.open("GET", fileRuta, false);
archivoTXT.send(null);
var txt = archivoTXT.responseText;
for(var i = 0; i<dato.length; i++){
    dato[i].innerText = "$" + txt.split(",")[i];
    actual[i].innerText = "$" + (parseInt(txt.split(",")[i]) * 0.5);
}
