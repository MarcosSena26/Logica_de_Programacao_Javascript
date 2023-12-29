function executarExercicio474b(){

alert("Efetuar a leitura de um valor inteiro positivo ou negativo e apresentar o número lido como sendo um valor positivo, ou seja, o programa deverá apresentar o módulo de um número fornecido. Lembre-se de verificar se o número fornecido é menor que zero; sendo, multiplique-o por -1. ")

let numero =  parseFloat(prompt("Digite um valor: "))
let final
if (numero < 0){
    final = numero * -1
}
else {
    final  = numero
}
alert("O valor final é: "+final)

}