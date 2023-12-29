function executarExerciciok(){

alert("Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível com o usuário, para que seja apresentado o valor em moeda americana. ")

let dolar = parseFloat(prompt("Digite o valor correspondente ao dólar atual: "))
let real = parseFloat(prompt("Digite a quantidade de reais que deseja converter: "))

dolar  = (dolar / 1) * real

alert("O valor convertido para dólar é: "+dolar)
}