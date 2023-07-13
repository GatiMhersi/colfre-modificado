var miDivs = document.querySelectorAll('.btn-stb');

miDivs.forEach(function(miDiv) {
  miDiv.addEventListener('click', function() {
    if (miDiv.hasAttribute('active')) {
        miDiv.removeAttribute('active');
    } else {
      miDiv.setAttribute('active', '');
}
  });
});

var miDivs = document.querySelectorAll('.boton-mb');

miDivs.forEach(function(miDiv) {
  miDiv.addEventListener('click', function() {
    if (miDiv.hasAttribute('active')) {
        miDiv.removeAttribute('active');
    } else {
      miDiv.setAttribute('active', '');
}
  });
});
