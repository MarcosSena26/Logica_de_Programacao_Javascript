function executarExercicio20(){
alert("Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente. ")

let valor1 = parseInt(prompt("Digite o primeiro valor. "))
let valor2 = parseInt(prompt("Digite o segundo valor. "))
let primeiro
let segundo

if (valor1 > valor2){
   primeiro = valor1
    segundo = valor2
}
else {
    primeiro = valor2
    segundo = valor1
}
alert("Os valores em ordem crescente é: "+segundo +" e "+ +primeiro)
}