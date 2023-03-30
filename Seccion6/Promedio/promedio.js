let suma = 0;
let cantidad = 0;

while (true) {
  const numero = parseInt(prompt("Ingresa un número: "));
  if (numero === 0) {
    break;
  }
  suma += numero;
  cantidad += 1;
}

if (cantidad > 0) {
  const promedio = suma / cantidad;
  console.log("El promedio es: " + promedio);
} else {
  console.log("No se ingresaron números.");
}
