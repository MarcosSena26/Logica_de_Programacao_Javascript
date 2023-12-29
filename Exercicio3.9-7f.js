function executarExerciciof(){
alert("Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da variável A. Apresentar os valores trocados ")

let a  = parseInt(prompt("Digite o primeiro valor: "))
let b  = parseInt(prompt("Digite o segundo valor: "))

let c = a
a = b
b = c

alert("Valor de A: "+a)
alert("Valor de B: "+b)

}