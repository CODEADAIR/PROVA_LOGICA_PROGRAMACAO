/* Crie um programa que solicite ao usuário 3 notas (valores numéricos) e calcule a 
média aritmética dessas notas. Se a média for maior ou igual a 7, exiba a mensagem "Aprovado"; 
caso contrário, exiba "Reprovado". */

let n1 = parseFloat(prompt("Digite a nota 1:"));
let n2 = parseFloat(prompt("Digite a nota 2:"));
let n3 = parseFloat(prompt("Digite a nota 3:"));

media = (n1 + n2 + n3) / 3


if (media >= 7.0){
    document.write(media, " Aprovado");
} else {
    document.write(media, " Reprovado");
}
