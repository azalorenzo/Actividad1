function verificar() {
  var num = document.getElementById("edad_Input").value;
  document.getElementById("advertencia").innerHTML = "";
  if (isNaN(num)) {
    document.getElementById("resultado").value = "";
    document.getElementById("advertencia").innerHTML = "Solo puedes ingresar numeros";
  } else if (num == "") {
    document.getElementById("resultado").value = "";
    document.getElementById("advertencia").innerHTML = "El campo no puede estar vacío.";
  } else if (num <= 0) {
    document.getElementById("resultado").value = "";
    document.getElementById("advertencia").innerHTML = "No se aceptan números negativos.";
  } else {
    var numero = parseInt(num);
    if (numero >= 18) {
      document.getElementById("resultado").value = "Puedes votar";
    } else {
      document.getElementById("resultado").value = "No puedes votar";
    }
  }
}
