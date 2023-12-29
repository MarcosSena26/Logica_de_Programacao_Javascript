function executarExercicio09(){
alert("Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário. ")

var atual = parseInt(prompt("Digite o valor do salário atual: "))
var reajuste = parseInt(prompt("Digite o valor do reajuste em porcentagem: "))

novo = atual + ((reajuste/100) * atual)

alert("O valor do novo salário com rejuste é: R$"+novo)



}
