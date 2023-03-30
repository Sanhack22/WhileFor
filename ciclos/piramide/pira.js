let letra = prompt("Ingrese una letra")
let cantidad = parseInt(prompt("Ingrese la cantidad"))
/*let i = 1*/



/*while (i<=cantidad) {

    contador = contador+letra

    console.log(contador);

        while (i>=cantidad) {
            contador=contador+letra
            console.log(i);
            
            
            i--

            
        }
        
        
        i++
    }
    
    
    
    

console.log("name");*/

let i;
let a;


for (i = 1; i <= cantidad; i++) {
    let letras = "";

    for (a = 1; a <= i; a++) {
        letras = letras + letra;
        
        
    }
    console.log(letras);
}

for (i = cantidad; i >= 1; i--) {
    let letras = "";

    for (a = i; a >= 1; a--) {
        letras = letras + letra;
        
        
    }
    console.log(letras);
}


