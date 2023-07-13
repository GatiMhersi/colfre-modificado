var dato = document.getElementsByClassName("precio-anterior");
var actual = document.getElementsByClassName("precio-actual");
var archivoTXT = new XMLHttpRequest();
var fileRuta = 'mobile.txt';
var archivoTXT2 = new XMLHttpRequest();
var fileRuta2 = 'descuentosporta.txt'

archivoTXT2.open("GET", fileRuta2, false);
archivoTXT2.send(null);
var txt2 = archivoTXT2.responseText;

archivoTXT.open("GET", fileRuta, false);
archivoTXT.send(null);
var txt = archivoTXT.responseText;
for(var i = 0; i<dato.length; i++){
    dato[i].innerText = "$" + txt.split(",")[i];
    actual[i].innerText = "$" + (parseInt(txt.split(",")[i]) * (100 - parseInt(txt2.split(",")[1])/100));
}
