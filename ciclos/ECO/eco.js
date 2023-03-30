let letra = prompt("Ingrese una letra")
let eco = parseInt(prompt("Cantidad de ECOS"))
let acomulador = "";
let i=1
while (i<=eco) {
    acomulador=letra+acomulador
    
    i++
}
console.log(acomulador)