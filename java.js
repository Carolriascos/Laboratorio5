const opciones = ["PIEDRA", "PAPEL", "TIJERA"]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);

}
let computadora = "";

let jugar = true;
let entrada_usuario = "";
alert
while (jugar) {
    entrada_usuario = prompt("Juege PIEDRA, PAPEL o TIJERA").toUpperCase();
    computadora = opciones[getRandomInt(3)];
    alert("La maquina selecciono: " + computadora);

    if (entrada_usuario == computadora) {
        alert("EMPATADOS");
    } else if (entrada_usuario == "PIEDRA" && computadora == "TIJERA") {
        alert("¡FELICIDADES...GANASTE! 😄");
    } else if (entrada_usuario == "PAPEL" && computadora == "PIEDRA") {
        alert("¡FELICIDADES...GANASTE! 😄");
    } else if (entrada_usuario == "TIJERA" && computadora == "PAPEL") {
        alert("¡FELICIDADES...GANASTE! 😄");
    } else if (entrada_usuario == "TIJERA" && computadora == "PIEDRA") {
        alert("LO SIENTO...PERDIpiSTE 🥺");
    } else if (entrada_usuario == "PIEDRA" && computadora == "PAPEL") {
        alert("LO SIENTO...PERDISTE 🥺");
    } else {
        alert("LO SIENTO...PERDISTE 🥺");
    }

    entrada_usuario = prompt("Desea jugar de nuevo? (S/N)").toUpperCase();
    if(entrada_usuario == "N"){
        jugar = false; 
    }

}
alert("GRACIAS JUGAR");


/* Ejercicio 2 */

let frutas =  ['manzana', 'banano', 'uva', 'pera', 'sandia', 'kiwi','naranja'];

let frutasOrden = frutas.sort();

function singularAPlural(palabra){
    let palabraSingular = "";
    let ultimaPalabra = palabra.endsWith();
    if(ultimaPalabra != "S"){
        palabraSingular = ultimaPalabra+"s";
    }else{
        palabraSingular = palabra;
    }
    return palabra;
}

let frutasPrural = [];

for (let fruta of frutas){
    frutasPrural = singularAPlural(fruta);
}

function existeFruta(fruta){
    let frutaEncontrada = frutas.includes(fruta);
    return frutaEncontrada;
}

let frutasCortas = [];

for (let fruta of frutas){
    if(fruta.length < 4){
        frutasCortas.push(fruta);
    }
}

