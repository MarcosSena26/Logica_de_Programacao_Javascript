function executarExercicio42(){

alert("Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para estar em condições, um dos seguintes requisitos deve ser satisfeito: Ter no mínimo 65 anos de idade. Ter trabalhado no mínimo 30 anos. Ter no mínimo 60 anos  e  ter trabalhado no mínimo 25 anos. Com base nas informações acima, faça um algoritmo que leia: o número do empregado (código), o ano de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o tempo de trabalho do empregado e a mensagem 'Requerer aposentadoria'  ou  'Não requerer'. ")

let ano = 2023
let codigo = parseInt(prompt("Entre com seu código."))
let idade = parseInt(prompt("Entre com seu ano de nascimento."))
let ingresso = parseInt(prompt("Entre com o ano de ingresso na empresa."))

if (ano - idade >=16 || ano - idade >=65){
    alert("Requerer Aposentadoria.")
}
if (ano - ingresso >=30){
    alert("Requerer Aposentadoria.")
}
if (ano - idade >=60 & ano - ingresso >= 25){
    alert("Requerer Aposentadoria.")
}
else  {
    alert("Não Requerer Aposentadoria.")
}



}