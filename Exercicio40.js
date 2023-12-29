function executarExercicio40(){
alert("Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total a pagar (total a pagar = total - desconto), sabendo-se que: Se quantidade  <= 5  o desconto será de 2% Se quantidade  > 5  e  quantidade  <=10  o desconto será de 3% Se quantidade  >  10 o desconto será de 5% ")

let desconto2 =  0.2
let desconto3 = 0.3
let desconto5 = 0.5
let desconto

let nome = prompt("Digite o nome do produto: ")
let quantidade = parseInt(prompt("Digite a quantidade adquirida do produto: "))
let preco = parseInt(prompt("Digite o preço unitário do produto: "))

let total  = quantidade * preco

if (quantidade <= 5){
    desconto  = total * desconto2
}
else if (quantidade > 5 & quantidade <=10){
desconto = total * desconto3
}
else if (quantidade > 10){
    desconto = total * desconto5
}
let totalaPagar = total - desconto
alert("O total a pagar é: "+totalaPagar)

}