/*
1. programa una function que cuente el numero de caracteres de una cadena de texto, pe.miFuncion("Hola Mundo") devolvera 10
2. programa una funcion que te devuelva el texto recortado segun el numero de caracteres indicados. pe.miFuncion(Hola mundo)
3. programa una function que dada una String te devuelva un Array de textos separados por cierto caracter pe.miFuncion('hola que tal', '')
devolvera ['hola', 'que', 'tal']
4. programar una function que repita un texto X veces, pe.miFuction('hola Mundo') devolvera hola mundo, hola mundo 
*/

/*
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
*/

/**
 * Resolucion de problemas 1:
 */

/*
//forma 1:
function contarCaracteres (cadena =""){
    if(!cadena){
        console.warn("no ingresaste ninguna cadena");
    } else{
        console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`); 
    }
}
//forma 2: 
const contarCaracteres=(cadena = "")=>(!cadena) ? console.warn("no ingresaste ninguna cadena") : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);

contarCaracteres();
contarCaracteres("hola Mundo"); 
*/

/**
 * Resolucion de problemas 2:
 
const recortarTexto= (cadena = "", longitud= undefined) => 
    (!cadena) 
    ? console.warn("no ingresaste una cedena de texto") 
    : (longitud === undefined) 
    ? console.log("no ingresaste la longitud de recortar el texto")
    : console.info(cadena.slice(0, longitud));

recortarTexto("hola mundo", 4); 
recortarTexto(); 
recortarTexto("hola hola"); 
recortarTexto("", 5); 
*/
/**
 * Resolucion de problemas 3:
 */
/*
const cadenaAArreglo = (cadena ="", separador =undefined)=>
    (!cadena)
    ? console.warn("no ingresaste una cedena de texto") 
    : (separador === undefined) 
    ? console.log("no ingresaste  el caracter separador")
    : console.info(cadena.split(separador));

cadenaAArreglo("Lorem ipsum"); 
cadenaAArreglo("enero, Feb, Mar, Abri, May"); 
cadenaAArreglo(); 
cadenaAArreglo("hola mundo"); 
cadenaAArreglo("", "-"); 
*/
/**
 * Resolucion de problemas 4:
 */
/*
const repetirTexto = (texto="", veces=undefined) => {
    if(!texto) return console.warn("no ingresaste un texto"); 

    if(veces === undefined) return console.warn("no ingresaste el numero de veces a repetir el texto"); 

    if(veces === 0) return console.error("el numero de veces no puede ser 0"); 

    if(Math.sign(veces) === 1) return console.error("el numero de veces no puede ser negativo"); 

    for (let i = 1; i <= veces; i++) console.info(`${texto}, ${i}`); 

}
repetirTexto("hola Mundo", 3); 
repetirTexto("hola Mundo", 0);
repetirTexto("hola Mundo", -20);
repetirTexto("", 20);
repetirTexto("hola Mundo");    

*/

//*************************************************************************************************************************************************************************** */

//video  2:

/*
5. programa una funion que invierta las palabras de una cadena de texto: pe.miFuncion("hola mundo")
6. programa una funcion para contar el numero de vveces que se repite una palabra en un texto largo, pe.miFuncion("hola mundo adios mundo", "mundo") devolvera 2
7. programa una funio que valide si una palabra o frase dada, es un palindromo(que se lee igual en un sentido que en otro), pe.miFuncion("salas") devolvera true 
8. prograa ua funcion que elimine cierto patron de caracteres de un teexto dado. pe.miFuncion("xyz1, xyz2, xyz3, syz4, xyz5") devolverá "1, 2, 3, 4, 5"
*/
//5
/*
function invertirPalabras(cadena) {
  // Divide por espacios, invierte el array, y une con espacios
  return cadena.split(' ').reverse().join(' ');
}
console.log(invertirPalabras("Hola Mundo")); // "Mundo Hola"

/*
Split: Separa la cadena en un array basado en un delimitador (espacio " ").
Reverse: Invierte el orden de los elementos dentro del array.
Join/Unir: Combina el array invertido en una nueva cadena. 
*/
//6
/*
function contarPalabras(cadena2 = " ") {
    return cadena2.split("hola"); 
}

console.log(contarPalabras); 

function contarPalabras (cadena =""){
    if(!cadena){
        console.warn("no ingresaste ninguna cadena");
    } else{
        console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`); 
    }
}
contarPalabras("hola"); 
*/
//7
/*
function palabras(palabra = " ") {
   if (palabra === palabra) {
        return true;
   } else {
    return false;   
   } 
}
palabras("hola", "hola"); 
*/
//8
/*
function patron = (cadena = "xyz1, xyz2, xyz3")=>(!cadena.split);  
console.log(patron);
*/

/**
 * Resolucion de problemas 5:
 */
/*
const invertirCadenas = (cadena="") =>(!cadena)
? console.warn("no ingresaste una cade")
: console.info(cadena.split("").reverse().join(""));
invertirCadenas(); 
invertirCadenas("hola mundo"); 
invertirCadenas("lorem"); 
*/

/**
 * Resolucion de problemas 6:
 */
/*
const textoEnCadena = (cadena ="", texto = "")=> {
    if (!cadena) return console.warn("no ingresaste el texto largo"); 

    if (!texto) return console.warn("no ingresaste la palabra a evaluar"); 

    let i = 0, 
        contardor = 0; 

    while (i !== -1) {
        i = cadena.indexOf(texto,i);
        if (i !== -1){
            i++;
            contardor++;
        }
    }
    return console.info(`la palabra ${cadena} se repite ${contardor} veces`);

}

textoEnCadena();
//indexOf la psocion en la que encontro el caracter 
textoEnCadena("", "mundo"); 
textoEnCadena("holaa mundo", "mundo"); 
*/

/**
 * Resolucion de problemas 7:
 */
/*
const palindromo =(palabra = "") => {
if(!palabra) return console.warn("no ingresastte una palabra o frase"); 
    
    palabra = palabra.toLowerCase();
    let alReves = palabra.split("").reverse().join("");

    return(palabra === alReves)
    ? console.info(`si es un palindromo, palabra original ${palabra}, palabra al reves ${alReves}`)
    : console.info(`no es un palindromo, palabra original ${palabra}, palabra al reves ${alReves}`);
}
palindromo();
palindromo("hola mundo");
palindromo("Salas");
*/
/**
 * Resolucion de problemas 8:
 */
/*
const eliminarCaracteres =(texto ="", patron ="") => 
(!texto)
? console.warn("no ingresastte una palabra o frase")
: (!patron)
? console.warn("no ingresastte una palabra o frase")
: console.info(texto.replace(new RegExp(patron, "ig"), ""));

eliminarCaracteres(); 
eliminarCaracteres("xyz1, xyz2, xyz3, syz4, xyz5");
eliminarCaracteres("xyz1, xyz2, xyz3, syz4, xyz5", "xyz");
*/
