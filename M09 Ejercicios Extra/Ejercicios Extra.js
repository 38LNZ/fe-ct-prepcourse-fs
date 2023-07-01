/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]]. *se puede hacer con object.entries()*
   // Tu código:
   let arrayDad=[];
   for(let i in objeto){
   let arraySon=[];
   arraySon.push(i) //asi se accede al nombre de la propiedad
   arraySon.push(objeto[i])//asi se accede al valor de la propiedad
   arrayDad.push(arraySon)
   } return arrayDad;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var objeto={}; //creamos objeto vacio 
   
   var array=string.split(""); //creamos arreglo con "string"
   array.sort(); // ordena el array de forma alfabetica
   
   for(let i of array){
   var cantidad = objeto[i] || 0;
   objeto[i] = cantidad +1;
   }
   return objeto;
   }


function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código: 
   let mayusculas = "";
   let minusculas = "";

   for(let i of string){
      if(i === i.toUpperCase()){
         mayusculas += i;
      } 
      else {minusculas += i}; 
   }
   return mayusculas+minusculas;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
  let nose1=[]
   let array = frase.split(" ");//"The";" ";"Henry";" ";"Challenge";" ";"is";" ";"close!"

  for(let i=0 ; i<array.length ; i++){
   let reverso = array[i].split("").reverse().join("")
   nose1.push(reverso);
  }
   return nose1.join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   //¡OJO! LOS METODOS SON APLICABLES A STINGS!! O NUMEROS NO!!! ¡OJO!
   let stringNum = numero.toString();
   let stringRev = stringNum.split("").reverse().join("")
   if(stringRev === stringNum){
      return "Es capicua";
   }
   return "No es capicua";
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   // let nuevaStg = string.replace();
   // return nuevaStg;
   let stringArray = string.split("");
   let stringSabc = [];
   for(let i=0 ; i<stringArray.length ; i++){
      if(stringArray[i] !== "a" && stringArray[i] !== "b"&& stringArray[i] !== "c"){
         stringSabc.push(stringArray[i])
      }
   }return stringSabc.join("");
}


function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "arae", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
return arrayOfStrings.sort ((a,b)=> a.length - b.length);
}


function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   // let array3 = [];
   
   // for(let i=0 ; i<array1.length ; i++){
   //    for(let i=0 ; i<array2.length ; i++)
   //    if(array1[i] = array2[i]){
   //       array3.push(array1[i]);
   //    }
   //    return array3;
   // } 
   let array3 = [];
   
   for(let i=0 ; i<array1.length ; i++){
      if(array2.includes(array1[i])){
         array3.push(array1[i])
      }
      
   }return array3;
  
}


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
