function executarExercicio29(){
    
    alert("Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores. ")

let a = parseFloat(prompt("Digite o primeiro valor. "))
let b = parseFloat(prompt("Digite o segundo valor. "))
let c = parseFloat(prompt("Digite o terceiro valor. "))
let soma = 0

if (a < b) {
    if (b < c){
        soma = b + c
    }
    else {
        soma = c + b
    }
}
else if (b < c){
    if (a < b){
        soma = a +c
    }
    else {
        soma = c + a
    }
}
else if (a < b) {
    soma = a + b 
}
else {
    soma = b + a
}
alert("A soma dois maiores valores é: "+soma)
}