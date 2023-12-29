function executarExercicio37(){

alert("Uma fruteira está vendendo frutas com a seguinte tabela de preços: Até 5 Kg 	Acima de 5 Kg  Morango 	R$ 2,50 por Kg 	R$ 2,20 por Kg Maçã 	R$ 1,80 por Kg 	R$ 1,50 por Kg Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente. ")

let precoMaca = 1.80
let precoMorango = 2.50
let totalMorango
let totalMaca
let final 

let pesoMorango = parseFloat(prompt)("Digite a quantidade de morangos em kilos: ")
let pesoMaca = parseFloat(prompt)("Digite a quantidade de maçãs em kilos: ")



if (pesoMorango > 5){
    totalMorango = (precoMorango - 0.30) * pesoMorango
}
else {
    totalMorango = (precoMorango * pesoMorango)
}

if (pesoMaca > 5){
    totalMaca = (precoMaca - 0.30) * pesoMaca
}
else {
    totalMaca = (precoMaca * pesoMaca)
}

if (totalMorango + totalMaca > 5 || pesoMaca + pesoMorango > 8){
final = (totalMorango + totalMaca) * 0.9
}
else {
    final = totalMorango + totalMaca
}
alert("O preço final da compra é: R$"+final)
}

