function convertir() {
  var num = document.getElementById("temperaturaEntrada").value;
  document.getElementById("resultado").value = "";
  if (num == "" || isNaN(num)) {
    document.getElementById("advertencia").innerHTML =
      "Ingrese una temperatura válida en números.";
  } else {
    document.getElementById("advertencia").innerHTML = "";
    var operacion = num * (9 / 5) + 32;
    var resultado = operacion + "°F";
    document.getElementById("resultado").value = resultado;
  }
}
