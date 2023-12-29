function executarExercicio33(){
alert("Ler dois valores e imprimir uma das três mensagens a seguir: ‘Números iguais’, caso os números sejam iguais ‘Primeiro é maior’, caso o primeiro seja maior que o segundo; ‘Segundo maior’, caso o segundo seja maior que o primeiro.")

let valor1 = parseInt(prompt("Digite o primeiro valor: "))
let valor2 = parseInt(prompt("Digite o segundo valor: "))

if (valor1 == valor2){
    alert("Números iguais.")
}

else if (valor1 > valor2){
    alert("Primeiro valor é maior.")
}
else if (valor1 < valor2){
    alert("Segundo valor é maior.")
}

}