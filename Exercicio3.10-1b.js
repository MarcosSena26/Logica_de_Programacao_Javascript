function executarExercicio310b(){
alert("Ler o valor correspondente ao salário mensal (variável SM) de um trabalhador e também o valor do percentual de reajuste (variável PR) a ser atribuído. Apresentar o valor do novo salário (variável NS). ")

let salarioMensal = parseFloat(prompt("Digite o salário mensal do trabalhador: "))
let percentualReajuste = parseFloat(prompt("Digite o reajuste percentual do salário mensal do trabalhador: "))

let novoSalario = salarioMensal + (percentualReajuste / 100) * salarioMensal

alert("O novo salário é: "+novoSalario)
}