// Funcionas que generan diferentes tipos de acciones

generarAvisos = function functionName(ubicacion, aviso) {
  ubicacion.innerHTML = aviso;

  setTimeout(function() {
    ubicacion.innerHTML = ''
  }, 5000);
};
