let i = 0
let n = parseInt(prompt("Ingrese los primeros N numeros hasta los que quiere sumar"))
let sumar = 0
while (i<=n) {

  sumar = i+sumar

  i++
  
}
console.log("La suma de ",n,"digitos es de",sumar);