/*
1. programa una function que cuente el numero de caracteres de una cadena de texto, pe.miFuncion("Hola Mundo") devolvera 10
2. programa una funcion que te devuelva el texto recortado segun el numero de caracteres indicados. pe.miFuncion(Hola mundo)
3. programa una function que dada una String te devuelva un Array de textos separados por cierto caracter pe.miFuncion('hola que tal', '')
devolvera ['hola', 'que', 'tal']
4. programar una function que repita un texto X veces, pe.miFuction('hola Mundo') devolvera hola mundo, hola mundo 
*/

//1
let cadena ="hola, mi nombre es mari y tengo 29 años. vivo en San Pablo Tecalco"
function cadena2 (cadena) {
    return cadena.charAt(10);
        
}
console.log(cadena);
console.log(cadena2); 


let nombre= "maritere";
let apellidos= "montiel";
function selor (nombre, apellidos) {
    console.log(`hola ${nombre} ${apellidos}`); 
}
console.log(selor);

let arreglo=["hola que tal"]; 
function arreglo2(arreglo) {
    console.log("hola mundo"+ "hola mundo"); 
}
console.log(arreglo2); 
console.log(arreglo);