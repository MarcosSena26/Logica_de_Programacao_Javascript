function executarExercicio36(){
alert("Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais novo com a mulher mais velha. ")

let homemVelho = parseInt(prompt("Digite a idade do primeiro homem: "))
let homemNovo = parseInt(prompt("Digite a idade do segundo homem: "))
let mulherVelha = parseInt(prompt("Digite a idade da primeira mulher: "))
let mulherNova = parseInt(prompt("Digite a idade da segunda mulher: "))
let auxiliar

if (homemVelho < homemNovo){
    auxiliar = homemVelho
    homemVelho = homemNovo
    homemNovo = auxiliar
}

if (mulherVelha < mulherNova){
    auxiliar = mulherVelha
    mulherVelha = mulherNova
    mulherNova = auxiliar
}

alert("A soma das idades do homem mais velho com a mulher mais nova é: "+(homemVelho + mulherNova))
alert("A soma das idades do homem mais novo com a mulher mais velha é: "+(homemNovo + mulherVelha))








}