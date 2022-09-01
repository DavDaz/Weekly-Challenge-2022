var container = document.getElementById("container");
var palabra1 = document.getElementById("palabra1");
var palabra2 = document.getElementById("palabra2");
var boton = document.getElementById("boton");

boton.addEventListener('click', isAnagrama);

function isAnagrama(){
    word1 = palabra1.value;
    word2 = palabra2.value;
    var resultado = word1.toLowerCase().split("").sort().join() === word2.toLowerCase().split("").sort().join();
    container.innerHTML += "¿Son Anagramas ["+ word1 +"] = ["+ word2 +"]? : "+ resultado +"<br>"
  
}


/*
function esAnagrama(palabra, posibleAnagrama){
  // Cambiar a minúsculas ambas cadenas
  palabra = palabra.toLowerCase();
  posibleAnagrama = posibleAnagrama.toLowerCase();
  
  // Convertir ambas cadenas en un arreglo
  palabra = palabra.split("");
  posibleAnagrama = posibleAnagrama.split("");
  
  // Ordenar ese arreglo
  palabra = palabra.sort();
  posibleAnagrama = posibleAnagrama.sort();
  
  // Una vez ordenados, los convertimos a cadena nuevamente
  palabra = palabra.join("");
  posibleAnagrama = posibleAnagrama.join("");
  
  // Finalmente comparamos
  
  if(palabra === posibleAnagrama){
    return true;
  }else{
    return false;
  }
}
*/