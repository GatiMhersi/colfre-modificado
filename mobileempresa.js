var dato = document.getElementsByClassName("mobiles");
var actualPersonal = document.getElementsByClassName("p");
var actualMovistar = document.getElementsByClassName("m");
var actualLn = document.getElementsByClassName("l");
var archivoTXT = new XMLHttpRequest();
var archivoTXT2 = new XMLHttpRequest();
var fileRuta = 'mobileempresa.txt';
var fileRuta2 = 'descuentosportaempresa.txt'

archivoTXT.open("GET", fileRuta, false);
archivoTXT.send(null);
archivoTXT2.open("GET", fileRuta2, false);
archivoTXT2.send(null);
var txt2 = archivoTXT2.responseText;
var txt = archivoTXT.responseText;
for(var i = 0; i<dato.length; i++){
    dato[i].innerText = "$" + txt.split(",")[i];
    actualPersonal[i].innerText = "$" + (parseInt(txt.split(",")[i]) * (100 - parseInt(txt2.split(",")[1])/100);
    actualMovistar[i].innerText = "$" + (parseInt(txt.split(",")[i]) * (100 - parseInt(txt2.split(",")[2])/100));
    actualLn[i].innerText = "$" + (parseInt(txt.split(",")[i]) * (100 - parseInt(txt2.split(",")[0])/100));
}
