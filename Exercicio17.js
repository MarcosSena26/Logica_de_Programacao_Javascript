function executarExercicio17(){
alert("Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o aluno é aprovado). Escrever também a média calculada. ")

let nota1 = parseFloat(prompt("Digite a primeira nota: "))
let nota2 = parseFloat(prompt("Digite a segundo nota: "))

let media = (nota1 + nota2) / 2

if (media>=6) {
    alert("Aluno aprovado, média: "+media)
}

else{
    alert("Aluno reprovado, média: "+media)
}
}