/* Elabore um programa em Javascript que leia a velocidade permitida 
em uma estrada e a velocidade de um condutor. 
Se a velocidade for inferior ou igual à permitida, exiba “Sem Multa”. 
Se a velocidade for de até 20% maior que a permitida, exiba “Multa Leve”. 
E, se a velocidade for superior a 20% da velocidade permitida, exiba “Multa Grave”.  
 */

const velocidade = 100;
var velCondutor = 121;


v1 = velocidade * 1.2



if (velCondutor > v1 ) {
    console.log("Multa Grave");

}if (velCondutor <= velocidade ) {
        console.log("Sem Multa");
}if (velCondutor !== v1 || velocidade){
    console.log("Multa Leve");
}