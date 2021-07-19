// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  i = 0;
  while (i < array.length) {
    array[i] = array[i] + 1;
    i = i + 1;
  } return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  i = 1;
  palabra = palabras[0]
  while (i < palabras.length) {
    palabra = palabra + ' ' + palabras[i];
    i = i + 1;
  } return palabra;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  i = 0;
  while (i < array.length) {
    if (array[i] === elemento) {
      return true;
    }
    i = i + 1;
  } return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  i = 0;
  suma = 0;
  while (i < numeros.length) {
    suma = suma + numeros[i];
    i = i + 1;
  } return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var i = 0;
  var promedio = 0;
  while (i < resultadosTest.length) {
    promedio = promedio + resultadosTest[i];
    i = i + 1;
  } 
  promedio = promedio / resultadosTest.length;
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var i = 0;
  var mayor = numeros[0];
  while (i < numeros.length) {
    if (mayor < numeros[i]) {
      mayor = numeros[i];
    }
    i = i + 1;
  }
  return mayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var i = 0;
  var multiplicacion = 1;

  if (arguments.length === 0) {
    return 0
  } else if (arguments.length === 1) {
    return arguments[0];
  }
  while (i < arguments.length) {
    multiplicacion = multiplicacion * arguments[i];
    i = i + 1;
  }
  return multiplicacion;
} 


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
var i = 0;
var contador = 0;
while (i < arreglo.length) {
  if (arreglo[i] > 18) {
    contador = contador + 1;
  }
  i = i + 1;
}
return contador;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  switch (numeroDeDia) {
    case 1:
    case 7:
      return "Es fin de semana";
      break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return "Es dia Laboral";
      break;
    default:
      return "Es dia Laboral"
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let num = n.toString();
  if (num[0] === "9") {
    return true;
  }
  return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var i = 0;
  while (i < arreglo.length) {
    if (arreglo[0] !== arreglo[i]) {
      return false
    }
    i++;
  } 
  return true;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var i = 0;
  var meses = [];
  while (i < array.length) {
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      meses.push(array[i]);
    }
    i++;
  }
  var j = 0;
  var Enero = false;
  var Marzo = false;
  var Noviembre = false;
  while (j < meses.length) {
    if (meses[j] === "Enero") {
      Enero = true;
    } 
    if (meses[j] === "Marzo") {
      Marzo = true;
    }
    if (meses[j] === "Noviembre") {
      Noviembre = true;
    }
    j++
  }
  if (Enero === true && Marzo === true && Noviembre === true) {
    return meses
  } return "No se encontraron los meses pedidos"
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var i = 0;
  var nvoarray = [];
  while (i < array.length) {
    if (array[i] > 100) {
      nvoarray.push(array[i]);
    }
    i++
  }
  return nvoarray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var i = 1;
  var valores = [numero+2];
  while (i < 10) {
    valores[i] = numero+ 2 + 2*i;
    if (i === valores [i]) {
      return "Se interrumpió la ejecución"
    }
    i++
  }
  return valores;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:+
  var i = 0;
  var suma = numero;
  var valores = [];
  while (i < 10) {
    i++
    if (i == 5) {
      continue;
    } else {
    suma = suma + 2;
    valores.push(suma)}  
  }
  return valores;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
