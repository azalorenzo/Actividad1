function calcularOperacion(operacion) {
  let numero1 = document.getElementById("numero1").value;
  let numero2 = document.getElementById("numero2").value;

  if (numero1 == "" || numero2 == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Ningún campo debe estar vacío!",
    });

    document.getElementById("resultado").value = "";
  } else if (isNaN(numero1) || isNaN(numero2)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Solo se admiten números!",
    });

    document.getElementById("resultado").value = "";
  } else {
    let a = parseFloat(numero1);
    let b = parseFloat(numero2);

    let resultado;

    if (operacion == "suma") {
      resultado = sumar(a, b);
    } else if (operacion == "resta") {
      resultado = restar(a, b);
    } else if (operacion == "multiplicacion") {
      resultado = multiplicar(a, b);
    } else {
      resultado = dividir(a, b);
    }

    document.getElementById("resultado").value = resultado;
  }
}

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => (b !== 0 ? a / b : "Error división por cero");
