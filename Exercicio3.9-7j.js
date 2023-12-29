function executarExercicioj(){

alert("Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares disponível com o usuário, para que seja apresentado o valor em moeda brasileira. ")

let cotacaoDolar = parseFloat(prompt("Digite o valor da cotação do Dólar: "))
let valorDolar = parseFloat(prompt("Digite a quantidade de Dólar que se tem disponível: "))

let valorReal = cotacaoDolar * valorDolar

alert("O valor em reais é: R$"+valorReal)





}