/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */
const numbers =100;

for(let i =1; i <= numbers; i++){

    let numbersDivisiblebyThree = i % 3 ==0;
    let numbersDivisiblebyFive = i % 5 ==0;
    
    if (numbersDivisiblebyThree && numbersDivisiblebyFive){
        console.log('fizzbuzz', i);
    }else if(numbersDivisiblebyThree){
        console.log('fizz', i);
    }
    else if(numbersDivisiblebyFive){
        console.log('buzz', i);
    }else{
        console.log('non-divisible numbers',i);
    }
    
}