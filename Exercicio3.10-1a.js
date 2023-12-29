function executarExercicio310a(){
alert("Elaborar um programa de computador que efetue a leitura de quatro valores inteiros (variáveis A, B, C e D). Ao final o programa deve apresentar o resultado do produto (variável P) do primeiro com o terceiro valor, e o resultado do produto (variável P) do primeiro com o terceiro valor, e o resultado da soma (variável S) do segundo com o quarto valor. ")

let a = parseFloat(prompt("Digite o valor de A: "))
let b = parseFloat(prompt("Digite o valor de B: "))
let c = parseFloat(prompt("Digite o valor de C: "))
let d = parseFloat(prompt("Digite o valor de D: "))

let produto = a * c
let soma = b +d

alert("O resultado do produto é: "+produto)
alert("O resultado do soma é: "+soma)



}