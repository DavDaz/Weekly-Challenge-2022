var container = document.getElementById("container");
var palabra1 = document.getElementById("palabra1");
var palabra2 = document.getElementById("palabra2");
var boton = document.getElementById("boton");
var resultado = Boolean;

boton.addEventListener('click', isAnagrama);
/*
********** Mi solucion que fue una mielda ********

boton.addEventListener('click', revisarAnagrama);

function revisarAnagrama(){
    arrPalabra1 = Array.from(palabra1.value);
    arrPalabra2 = Array.from(palabra2.value);

    if(arrPalabra1.length === arrPalabra2.length){
        for(i = 0; i <= arrPalabra1.length -1; i++){
            if( arrPalabra1.includes(arrPalabra2[i]) ){
                resultado = true;
            }else{
                resultado = false;
            }
        }
    }else{
        console.log("Son diferentes");
    }
    container.innerHTML += "La validacion Anagrama es: "+ resultado + "<br>"
}
*/

function isAnagrama(){
    if(palabra1.value === palabra2.value)
    return false
}