function executarExerciciog(){
alert("Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D, devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de multiplicação e apresentar doze resultados de saída. ")

let numero1 = parseInt(prompt("Digite um número sem vírgulas: "))
let numero2 = parseInt(prompt("Digite um número sem vírgulas: "))
let numero3 = parseInt(prompt("Digite um número sem vírgulas: "))
let numero4 = parseInt(prompt("Digite um número sem vírgulas: "))
 
let soma1 = numero1 + numero2
let soma2 = numero1 + numero3
let soma3 = numero1 + numero4
let soma4 = numero2 + numero3
let soma5 = numero2 + numero4
let soma6 = numero3 + numero4

let multiplicacao1 = numero1 * numero2
let multiplicacao2 = numero1 * numero3
let multiplicacao3 = numero1 * numero4
let multiplicacao4 = numero2 * numero3
let multiplicacao5 = numero2 * numero4
let multiplicacao6 = numero3 * numero4

alert("O valor da soma do primeiro número com o segundo é: "+soma1)
alert("O valor da soma do primeiro número com o terceiro é: "+soma2)
alert("O valor da soma do primeiro número com o quarto é: "+soma3)
alert("O valor da soma do segundo número com o terceiro é: "+soma4)
alert("O valor da soma do segundo número com o quarto é: "+soma5)
alert("O valor da soma do terceiro número com o quarto é: "+soma6)


alert("O valor da multiplicação do primeiro número com o segundo é: "+multiplicacao1)
alert("O valor da multiplicação do primeiro número com o terceiro é: "+multiplicacao2)
alert("O valor da multiplicação do primeiro número com o quarto é: "+multiplicacao3)
alert("O valor da multiplicação do segundo número com o terceiro é: "+multiplicacao4)
alert("O valor da multiplicação do segundo número com o quarto é: "+multiplicacao5)
alert("O valor da multiplicação do terceiro número com o quarto é: "+multiplicacao6)
}