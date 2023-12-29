function executarExercicio28(){

alert("Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles. ")

let valor1 = parseFloat(prompt("Digite o primeiro valor. "))
let valor2 = parseFloat(prompt("Digite o segundo valor. "))
let valor3 = parseFloat(prompt("Digite o terceiro valor. "))

if (valor1 == valor2 & valor3){
    alert("Erro, contém valores iguais.")
}
else if (valor1 >= valor2 && valor2 >= valor3){
    alert("O primeiro valor é o maior. "+valor1)
}

else if (valor2 >= valor1 && valor2 >= valor3){
    alert("O segundo valor é o maior. "+valor2)
}

else{
    alert("O terceiro valor é o maior. "+valor3)
}
}
