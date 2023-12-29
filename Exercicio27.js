function executarExercicio27(){
alert("Ler um valor e escrever se é positivo, negativo ou zero. ")

let valor = parseInt(prompt("Digite um valor: "))

if (valor > 0) {
    alert("Valor positivo.")
}
else if (valor == 0){
    alert("Valor igual a 0.")
}
else {
    alert("Valor negativo.")
}
}