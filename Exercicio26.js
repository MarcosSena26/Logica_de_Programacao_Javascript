function executarExercicio26(){
alert("Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar compra'. ")

let atual = parseInt(prompt("Digite o estoque atual: "))
let maximo = parseInt(prompt("Digite o estoque máximo: "))
let minimo = parseInt(prompt("Digite o estoque mínimo: "))

let media = (maximo + minimo) / 2

if (atual >= media){
    alert("Não efetuar a compra!")
}
else {
    alert("Efetuar a compra!")
}
}