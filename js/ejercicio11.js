function convertir() {
  var kilometros = document.getElementById("kilometrosEntrada").value;
  document.getElementById("resultado").value = "";
  if (kilometros == "") {
    document.getElementById("advertencia").innerHTML = "El campo no puede estar vacío.";
  } else if (isNaN(kilometros)) {
    document.getElementById("advertencia").innerHTML = "Ingrese solo números.";
  } else {
    document.getElementById("advertencia").innerHTML = "";
    var millas = kilometros * 0.621371;
    document.getElementById("resultado").value = millas;
  }
}
