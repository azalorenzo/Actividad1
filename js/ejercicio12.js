function convertir() {
  var pesos = document.getElementById("pesosMexicanos").value;

  document.getElementById("resultado").value = "";

  if (pesos == "") {
    document.getElementById("advertencia").innerHTML = "El campo no puede estar vacío.";
  } else if (isNaN(pesos)) {
    document.getElementById("advertencia").innerHTML = "Ingrese solo números.";
  } else if (pesos <= 0) {
    document.getElementById("advertencia").innerHTML = "Ingrese una cantidad mayor o igual a cero.";
  } else {
    document.getElementById("advertencia").innerHTML = "";
    var mxn = parseFloat(pesos);
    var dolares = mxn * 0.055;
    document.getElementById("resultado").value = dolares;
  }
}
