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

//************************************************************************************************************************************************** */
/**
 * 9. programa una function que obtenga un numeo aleatorio entre 501 y 600
 * 10. programa una funcion que reciba u numero y evalue si es capicúa o no(que se lee igual en un sentido que otro) pi.miFuncion(2002) devolvera true 
 * 11. programa una funcion que calcule el factorial de un numero(el factorial de un entero positivo n, se define como el producto de todos los numeros enteros positivos desde 1 hasta n). pemiFuction(5) devolverá 120
 */

/**
 * Resolucion de problemas 9:
 */
/*
const aleatorio = () => console.info(Math.round((Math.random()* 100) + 500)); 

aleatorio(); 
*/
/**
 * Resolucion de problemas 10:
 */
/*
const capicua = (numero = 0) => {
    if(!numero) return console.warn("no ingresaste un numero");

    if(typeof numero !== "number") return console.error(`el valor "${numero}" ingresado, No es un numero`);

    numero = numero.toString(); 
    let alReves = numero.split("").reverse().join(""); 

    return (numero === alReves) 
    ? console.info(`si es capicua, numero original ${numero}, numero al reves${alReves}`)
    : console.info(`no es capicua, numero original ${numero}, numero al reves${alReves}`)
}
capicua();
capicua("19");
capicua({});
capicua(2000);
capicua(2002);
capicua(212.212);
capicua(18.99);

*/
/**
 * Resolucion de problemas 11:
 */
/*
const factorial = (numero = undefined)=> {
    if(numero === undefined) return console.warn("no ingresaste un numero");

    if(typeof numero !== "number") return console.error(`el valor "${numero}" ingresado, No es un numero`);


    if(numero === 0) return console.error(`el numero no pude ser 0`);

    if(Math.sign(numero) === -1) return console.error(`el numero no puede ser negativo`);

    let factorial = 1; 

    for (let i = numero; i > 1; i--){
        factorial *= i ; 
    }

    return console.info(`el factorial de ${numero} es factorial ${factorial}`); 
}
factorial();
factorial("5");
factorial([1, 2, 3]);
factorial(0);
factorial(-5);
factorial(5);
factorial(8);
//hacer las validaciones, las mas posibles 
*/
//******************************************************************************************************************************************************************************* */

/**
 * 12. programa una funcion que determine si un numero es primo(aquel que solo es divisible por si mismo y 1) o no, pe.miFuncion(7) devolvera true
 * 13. programa una funcion que determine si un numero es par o impar, pe.miFuncion(29) devolvera impar
 * 14. programa una funcion para convertir grados Celsius a Farenheit y viceversa pe.miFiuncion(0, "c")devolvera 32°f
 */

//12
/*
const primo = (primo /= 2){

}

//13
function n (n = 2) {
    if (n = 2){
        return console.log(`el numero ${n} es impar`)
    } else {
        return console.log(`el numero ${n} es par`)
    };
}
n(); 
n(2); 
*/

/**
 * Resolucion de problemas 12:
 */
/*
const numeroPrimo = (numero =undefined) => {
    if(numero === undefined) return console.warn("no ingresaste un numero");

    if(typeof numero !== "number") return console.error(`el valor "${numero}" ingresado, No es un numero`);

    if(numero === 0) return console.error(`el numero no pude ser 0`);
    if(numero === 1) return console.error(`el numero no pude ser 1`);

    if(Math.sign(numero) === -1) return console.error(`el numero no puede ser negativo`);

    let divisible = false; 

    for (let i = 2; i <numero; i++){
        if ((numero %i) === 0){
            divisible= true; 
            break; 
        }
    }
    return(divisible)
    ? console.log(`el valor "${numero}" ingresado, No es un primo`)
    : console.log(`el valor "${numero}" ingresado, si es primo`); 
}
numeroPrimo();
numeroPrimo("230");
numeroPrimo(true);
numeroPrimo(0);
numeroPrimo(1);
numeroPrimo(-13);
numeroPrimo(13);
numeroPrimo(200);
*/

/**
 * Resolucion de problemas 13:
 */
/*
const numeroParImpar =(numero =undefined) => {
    if(numero === undefined) return console.warn("no ingresaste un numero");

    if(typeof numero !== "number") return console.error(`el valor "${numero}" ingresado, No es un numero`);

    return((numero %2) === 0)
    ? console.info(`el valor "${numero}" es par`)
    : console.info(`el valor "${numero}" es impar`); 
}
numeroParImpar();
numeroParImpar("23");
numeroParImpar(-398);
numeroParImpar(19);
*/

/**
 * Resolucion de problemas 14:
 */

/*
const convertirGrados = (grados = undefined, unidad= undefined)=>{
  
    if(grados === undefined) return console.warn("no ingresaste un numero");

    if(typeof grados !== "number") return console.error(`el valor "${grados}" ingresado, No es un numero`);

    if(unidad === undefined) return console.warn("no ingresaste el tipo de grado a convertir");
    if(typeof unidad !== "number") return console.error(`el valor "${unidad}" ingresado, No es un numero`);

    if(unidad.length !== 1|| !/(C|F)/.test(unidad)) return console.warn(`valor de unidad no reconocido`);
   
    if(unidad === "C"){
        return console.info(`${grados} °C = ${Math.round((grados*(9/5))+ 32)}°F`);
    } else if (unidad === "F"){
        return console.info(`${grados} °F = ${Math.round(((grados-32) * (5/9)))}°C`);
    } else {
        return console.error("el tipo de grados a convertir no es valido"); 
    }

    console.log("funciono")
}

convertirGrados();
convertirGrados("2");
convertirGrados(2);
convertirGrados(2, true);
convertirGrados(2, "hola");
convertirGrados(2, "E");
convertirGrados(0, "C");
convertirGrados(2, "F");
*/

//************************************************************************************************************************************************************** */

/**
 * 15. programa una función para convertir numeros de base binaria a decimal y viceversa. pemiFuncion(100.2) evolvera 4 de base 10
 * 16. programa una funcion que devuelva el monto final despues de aplicar un descuento a una cantidad dada. pemiFuncion(100, 200) devolvera 800 
 * 17. programa una funcion que dada una fecha valida etermina cuantos años han pasado ahasta el ia de hoy. pemiFuncion Date (1984,4,23) devolvera 35 años(en 2020) 
 */

/**
 * Resolucion de problemas 15:
 */
/*
const convertirBinarioDecimal = (numero=undefined, base= undefined) => {
    if(numero === undefined) return console.warn("no ingresaste el numero a convertir");

    if(typeof numero !== "number") return console.error(`el valor "${numero}" ingresado, No es un numero`);

    if(base === undefined) return console.warn("no ingresaste la base a convertir");
    if(typeof base !== "number") return console.error(`el valor "${base}" ingresado, No es un numero`);
   
    if(base === 2){
        return console.info(`${numero} base ${base}= ${parseInt(numero, base)} base 10`);
    } else if (base === 10) {
        return console.info(`${numero} base ${base}= ${(numero.toString(2))} base 2`);
    } else {
        return console.error("el tipo de base a convertir NO es válido"); 
    }

}
convertirBinarioDecimal(); 
convertirBinarioDecimal("2"); 
convertirBinarioDecimal(100); 
convertirBinarioDecimal(100, "2"); 
convertirBinarioDecimal(100, 2); 
convertirBinarioDecimal(1110010,2); 
convertirBinarioDecimal(4,10); 
convertirBinarioDecimal(114,10); 
*/

/**
 * Resolucion de problemas 16:
 */
/*
const aplicarDescuento = (monto = undefined, descuento = 0) => {
    if(monto === undefined) return console.warn("no ingresaste un numero");
    if(typeof monto !== "number") return console.error(`el valor "${monto}" ingresado, No es un numero`);
    if(monto === 0) return console.error(`el numero no pude ser 0`);
    if(Math.sign(monto) === -1) return console.error(`el numero no puede ser negativo`);
    if(typeof descuento !== "number") return console.error(`el valor "${descuento}" ingresado, No es un numero`);
    if(Math.sign(descuento) === -1) return console.error(`el numero no puede ser negativo`);
    return console.info(`${monto}- ${descuento} % = ${monto-((monto* descuento)/100)}`);
}
aplicarDescuento(); 
aplicarDescuento("200");
aplicarDescuento(0);
aplicarDescuento(-1000);
aplicarDescuento(1000, "20");
aplicarDescuento(1000, -20);
aplicarDescuento(1000);
aplicarDescuento(1000, 25);
*/

/**
 * Resolucion de problemas 17:
 */

/*
const calcularAnios = (fecha = undefined) => {
    if(fecha === undefined) return console.warn("no ingresaste la fecha");
    if(!(fecha instanceof Date)) return console.error(`el valor que registraste no es una fecha`);
    let hoyMenosFecha= new Date().getTime()- fecha.getTime(), 
        animosEnMS = 1000 * 60 * 60 * 24 * 365, 
        aniosHumanos= Math.floor(hoyMenosFecha/animosEnMS);
    
    return(Math.sign(aniosHumanos)=== -1)
        ? console.info(`faltan "${Math.floor(aniosHumanos)} años para el ${fecha.getFullYear()}.`)
        : (Math.sign(aniosHumanos)=== 1)
        ? console.info(`han pasado "${aniosHumanos} años desde ${fecha.getFullYear()}.`)
        : console.info(`estamos en el año actual ${fecha.getFullYear()}.`)
}
calcularAnios(); 
calcularAnios({});
calcularAnios(false);
calcularAnios(new Date());
calcularAnios(new Date(1996, 9, 3));
calcularAnios(new Date(1896,9,3));
calcularAnios(new Date(2080, 9, 3));
*/ 
//************************************************************************************************************************************************************** */
/**
 *  /* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5 */
    /* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero */
    /* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero 
    */

/**
 * Resolucion de problemas 18:
 */

/*
const contarLetras = (cadena = "")=>{
  
    if(!cadena) return console.warn("no ingresaste ninguna cadena de texto");

    if(typeof cadena !== "string") return console.error(`el valor "${cadena}" ingresado, No es una cadena de texto`);

   let vocales = 0, 
        consonantes=0;
        
    cadena = cadena.toLocaleLowerCase(); 

    for(let letra of cadena){
        if(/[AEIOUÁÉÍÓÚaeiouáéíóú]/.test(letra)){
            vocales ++; 
        }
    }    

    if (/[BCDFGHJKLMNÑOPQRSTVWXZbcdfghjklmnñopqrdtvwxyz]/.test(letra)){
        consonantes++;
    }
    return console.info({
        cadena,
        consonantes,
        vocales
    })

    }
contarLetras(); 
contarLetras(3); 
contarLetras("hola mundo"); 
contarLetras("ñoño"); 
*/
/**
 * Resolucion de problemas 19:
 */
/*
const validarNombre = (nombre = "")=>{
     if(!nombre) return console.warn("no ingresaste ningun nombre");

    if(typeof nombre !== "string") return console.error(`el valor "${nombre} ingresado, No es un nombre`);

    let expReg = /^[A-Za-zñÁáÉéÍíÓóÚú\s]+$/g.test(nombre);

    return(expReg)
    ? console.info(`${nombre} es un nombr valido`)
    : console.info(`${nombre} no es un nombr valido`); 
}
validarNombre(); 
validarNombre(3);
validarNombre("maritere mont"); 
validarNombre("maritere mont, 29");  
//^ dice No puede haber nada antes de la expresion y el $ no puede estar despues de la expresion []+ evaluar cada caracter a evaluar 
// s acepta espacios en blanco 
*/

/**
 * Resolucion de problemas 20:
 */

/*
const validarEmail = (email = "")=>{
    if(!email) return console.warn("no ingresaste ningun nombre");

    if(typeof email !== "string") return console.error(`el valor "${email} ingresado, No es un email`);

    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);
    return (expReg)
    ? console.info(`${email} es un email valido`)
    : console.info(`${email} no es un email valido`); 

}

validarEmail(); 
validarEmail(3);
validarEmail("mari-floy");
validarEmail("mari_floydQhotmail.com");
*/

/**
 * Resolucion de problemas 19 y 20:
 */

/*
const validarPatron = (cadena = "", patron = undefined) => {
    if(!cadena) return console.warn("no ingresaste ningun nombre");

    if(typeof cadena !== "string") return console.error(`el valor "${cadena} ingresado, No es un email`);

    if(patron === undefined) return console.warn("no ingresaste ningun nombre");

    if(!patron instanceof RegExp) return console.error(`el valor "${patron} ingresado, No es un email`);
    let expReg = patron.test (cadena)
    return (expReg)
    ? console.info(`${cadena} cumple con el patron ingresado`)
    : console.info(`${cadena} la cadena no cumple con el patron ingresado`); 
}
validarPatron("mari tere");
validarPatron("mari_dlof", /^[A-Za-zñÁáÉéÍíÓóÚú\s]+$/g);
validarPatron("mari fl 22", /^[A-Za-zñÁáÉéÍíÓóÚú\s]+$/g);
validarPatron("mari_floyd@hotmail.com",new RegExp("/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/", "i"));
*/

//************************************************************************************************************************************************** */
/**
 * /* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25] */
    /* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60] */
    /* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]} 
*/

/**
 * Resolucion de problemas 21:
 */

/*
const devolverCuadrados = (arr = undefined)=>{
     if(!arr) return console.warn("no ingresaste ningun nombre");

    if(arr instanceof Array) return console.error(`el valor "${arr} ingresado, No es un email`);

    if(arr.length === 0) return console.error("el aareglo esta vacio");
    for (let num of arr){
         if(typeof num !== "number") return console.error(`el valor "${num} ingresado, No es un email`);
    }
    const newArr = arr.map(el => el*el);
    return console.info(`arreglo original ${arr},  \n Arreglo elevdo al cuadradp${newArr}`);
}
devolverCuadrados();
devolverCuadrados(true);
devolverCuadrados({});
devolverCuadrados([]);
devolverCuadrados([1, "2", , {}]);
devolverCuadrados([1, 2,{}]);
devolverCuadrados([1,4, 8]);
*/

/**
 * Resolucion de problemas 22:
 */
/*
const arrayMinMax = (arr = undefined)=>{
    if(arr === undefined) return console.warn("no ingresaste ningun nombre");

    if(!(arr instanceof Array)) return console.error(`el valor  ingresado, No es un arreglo`);

    if(arr.length === 0) return console.error("el aareglo esta vacio");
    for (let num of arr){
         if(typeof num !== "number") return console.error(`el valor "${num} ingresado, No es un email`);
    }
    return console.info(`el arreglo original ${arr}, \n valor mayor ${Math.max(...arr)}, \n valor menor${Math.min(...arr)}`); 
}
arrayMinMax(); 
arrayMinMax(false);
arrayMinMax([]);
arrayMinMax([2, 3, true]);
arrayMinMax([1, 2, 5, 99, -60]);

*/
/**
 * Resolucion de problemas 23:
 */

/*
const separarParesImpares = (arr =undefined) =>{
    if(arr === undefined) return console.warn("no ingresaste ningun nombre");

    if(!(arr instanceof Array)) return console.error(`el valor  ingresado, No es un arreglo`);

    if(arr.length === 0) return console.error("el aareglo esta vacio");
    for (let num of arr){
         if(typeof num !== "number") return console.error(`el valor "${num} ingresado, No es un numero`);
    }
    return console.info({
        pares : arr.filter(num => num % 2 === 0), 
        impares : arr.filter(num => num % 2 === 1)
    }); 
}
separarParesImpares(); 
separarParesImpares("hola"); 
separarParesImpares([2, 4, "j"]); 
separarParesImpares([1,2,3,4,5,6,7,8,9]);  
*/
//****************************************************************************************************************************************************************************************************************************************************************************** */
/** /* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }
    /* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]  
    /* 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5 
    */
/**
 * Resolucion de problemas 24:
 */



/**
 * Resolucion de problemas 25:
 */



//*************************************************************************************************************************************************************************************************************************************************************************************************** */    

    /* 27) Programa una clase llamada Pelicula.
        La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
          - Todos los datos del objeto son obligatorios.
          - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
          - Valida que el título no rebase los 100 caracteres.
          - Valida que el director no rebase los 50 caracteres.
          - Valida que el año de estreno sea un número entero de 4 dígitos.
          - Valida que el país o paises sea introducidos en forma de arreglo.
          - Valida que los géneros sean introducidos en forma de arreglo.
          - Valida que los géneros introducidos esten dentro de los géneros aceptados*.
          - Crea un método estático que devuelva los géneros aceptados*.
          - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
          - Crea un método que devuelva toda la ficha técnica de la película.
          - Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

        * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
        */
