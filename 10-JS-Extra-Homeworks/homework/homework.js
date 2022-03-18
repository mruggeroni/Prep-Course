// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let matriz = []
  for (let clave in objeto) {
    matriz.push([clave, objeto[String(clave)]]);
  }
  return matriz
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let arr = [];
  for (i = 0; i < string.length; i++) {
    arr.push(string[i]);
  }
  let obj = {};
  arr.forEach(function(j) {
    obj[j] = (obj[j] || 0) + 1; // BUENA aplicacion de forEach para crear objetos
  })
  return obj
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí}
  let FRA = '';
  let se = '';
  for (i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      FRA = FRA + s[i];
    }
    else {
      se = se + s[i];
    }
  }
  return FRA + se
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let inv;
  let arr = str.split(' ');
  let j = 0
  arr.forEach(function(i) {
    let x = ( Array.from(i) ).reverse();
    if (j === 0) {
      inv = x.join('');
    }
    else {
      inv += ' ' + x.join('');
    }
    j++;
  })
  return inv
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  for (i = 0; i < String(numero).length; i++) {
    if (String(numero)[i] !== String(numero)[String(numero).length - 1 - i]) {
      return "No es capicua"
    }
  }
  return "Es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let ncadena = '';
  for (i = 0; i < cadena.length; i++) {
    if ((cadena[i] !== 'a') && (cadena[i] !== 'b') && (cadena[i] !== 'c')) {
      ncadena += cadena[i];
    }
  }
  return ncadena
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(function(a,b) {
    return a.length - b.length
  })
  return arr
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  const arr1 = [...new Set(arreglo1)];
  const arr2 = [...new Set(arreglo2)];
  let intersec = [];
  let x;
  arr1.forEach(function(a1) {
    x = arr2.find(function(a2) {
      return a1 === a2;
    })
    if (x !== undefined) {
      intersec.push(x);
    }
  })
  return intersec
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

