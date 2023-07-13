var dato = document.getElementsByClassName("precio-anterior");
var actualPersonal = document.getElementsByClassName("p");
var actualMovistar = document.getElementsByClassName("m");
var actualLn = document.getElementsByClassName("l");
var archivoTXT = new XMLHttpRequest();
var fileRuta = 'mobile.txt';

archivoTXT.open("GET", fileRuta, false);
archivoTXT.send(null);
var txt = archivoTXT.responseText;
for(var i = 0; i<dato.length; i++){
    dato[i].innerText = "$" + txt.split(",")[i];
    actualPersonal[i].innerText = "$" + (parseInt(txt.split(",")[i]) * 0.6);
    actualMovistar[i].innerText = "$" + (parseInt(txt.split(",")[i]) * 0.3);
    actualLn[i].innerText = "$" + (parseInt(txt.split(",")[i]) * 0.3);
}
