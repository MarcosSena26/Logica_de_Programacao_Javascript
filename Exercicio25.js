function executarExercicio25(){
alert("Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'. ")

let numero = parseInt(prompt("Digite o número de sua conta: "))
let saldo = parseInt(prompt("Digite o seu saldo: "))
let debito = parseInt(prompt("Digite o seu débito: "))
let credito = parseInt(prompt("Digite o seu crédito: "))

let saldoAtual = (saldo - debito) + credito

if (saldoAtual >=0) {
    alert("Saldo Positivo. R$"+saldoAtual)
}

else {
    alert("Saldo Negativo. R$"+saldoAtual)
}
}