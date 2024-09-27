/* Faça um programa JavaScript que receba 3 números informados pelo usuário e em seguida 
apresente uma mensagem de alerta informando qual é o maior número dentre os números informados.
 */

let A = parseInt(prompt("Dgite o primeiro numero: "));
let B = prompt("Dgite o segundo numero: ");
let C = prompt("Dgite o terceiro numero: ");

const maior = (A,B)=> (A+B+Math.abs(A-B))/2;
var e = maior (A, maior (B,C));
document.write(e);


