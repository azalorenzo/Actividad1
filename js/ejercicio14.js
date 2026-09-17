function calcular() {
  document.getElementById("resultadoMaximo").value = "";
  document.getElementById("resultadoMinimo").value = "";
  document.getElementById("resultadoPromedio").value = "";
  let cadena = document.getElementById("edad_Input").value;
  if (cadena.trim() === "") {
    document.getElementById("advertencia").innerHTML = "Debes ingresar al menos un número";
    return;
  }

  let arreglo = cadena.split(",");

  let invalido = arreglo.some((valor) => valor.trim() === "" || isNaN(valor));

  if (invalido) {
    document.getElementById("advertencia").innerHTML = "Solo puedes ingresar números separados por comas";
  } else {
    document.getElementById("advertencia").innerHTML = "";
    let numeros = arreglo.map(Number);
    let maximo = Math.max(...numeros);
    let minimo = Math.min(...numeros);
    let suma = numeros.reduce((acc, valor) => acc + valor, 0);
    let promedio = suma / numeros.length;

    document.getElementById("resultadoMaximo").value = maximo;
    document.getElementById("resultadoMinimo").value = minimo;
    document.getElementById("resultadoPromedio").value = promedio;
  }
}
