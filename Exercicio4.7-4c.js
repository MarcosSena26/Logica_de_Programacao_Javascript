function executarExercicio474c(){

alert("Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 5. Se o aluno não foi aprovado, indicar uma mensagem informando esta condição. Apresentar junto das mensagens o valor da média do aluno para qualquer condição. ")

let nota1 = parseFloat(prompt("Digite a primeira nota: "))
let nota2 = parseFloat(prompt("Digite a segunda nota: "))
let nota3 = parseFloat(prompt("Digite a terceira nota: "))
let nota4 = parseFloat(prompt("Digite a quarta nota: "))

let nota5 = (nota1 + nota2 + nota3 + nota4)/4

if (nota5 >= 5){
    alert("Parabéns, você foi aprovado, sua nota é: "+nota5)
}
else{
    alert("Você foi reprovado, sua nota é: "+nota5)
}
}