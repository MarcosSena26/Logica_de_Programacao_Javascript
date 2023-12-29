function executarExercicio07(){


alert("Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias. ")

var anos = parseInt(prompt("Digite quantos anos você tem:"))
var meses = parseInt(prompt("Digite quantos meses você tem:"))
var dias = parseInt(prompt("Digite quantos dias você tem:"))

var idade = anos*365 + meses * 30 + dias

alert("A pessoa tem " + idade + "dias de vida")
}