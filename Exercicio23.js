function executarExercicio23(){
alert("Para o enunciado a seguir foi elaborado um algoritmo em Português Estruturado que contém erros, identifique os erros no algoritmo apresentado abaixo: Enunciado: Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule e mostre seu peso ideal, utilizando as seguintes fórmulas: ")

let nome = prompt("Digite seu nome: ")
let altura = parseFloat(prompt("Digite sua altura: "))
let sexo = prompt("Digite seu sexo: ")
let ideal

if (sexo == "masculino"){
    ideal = (72.7 * altura - 58)
    
}
 else if (sexo == "feminino") {
    ideal = (62.1 * altura - 44.7)

 }
 alert("O peso ideal de " +nome +" é: "+ +ideal)
}