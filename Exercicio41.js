function executarExercicio41(){

alert("Faça um algoritmo para ler as 3 notas obtidas por um aluno nas 3 verificações e a média dos exercícios que fazem parte da avaliação. Calcular a média de aproveitamento, usando a fórmula abaixo e escrever o conceito do aluno de acordo com a tabela de conceitos mais abaixo: N1 + N2 * 2 + N3 * 3 + Média_dos_Exercícios Média_de_Aproveitamento  = 	--------------------------------------------------------- 7 A atribuição de conceitos obedece a tabela abaixo: Média de Aproveitamento 	Conceito > =  9,0  	A > =  7,5  e  <  9,0 	B > =  6,0  e  <  7,5 	C <  6,0 	D ")

let nome = prompt("Digite seu nome: ")
let n1 = parseFloat(prompt("Digite a primeira nota: "))
let n2 = parseFloat(prompt("Digite a segunda nota: "))
let n3 = parseFloat(prompt("Digite a terceira nota: "))
let exercicios = parseFloat(prompt("Digite a média dos exercícios: "))

let notaFinal = (n1 + n2 * 2 + n3 * 3 + exercicios) / 

alert ("Matricula: "+nome)

if (notaFinal >=9){
    alert("Conceito A.")
}

if (notaFinal >=7.5 & notaFinal <9){
    alert("Conceito B.")
}

if (notaFinal >=6 & notaFinal <7.5){
    alert("Conceito C.")
}

if (notaFinal <6){
    alert("Conceito D.")
}

}