function executarExerciciom(){
alert("Elaborar um programa que efetue a leitura de três valores (A,B e C) e apresente como resultado final o quadrado da soma dos três valores lidos. ")

    let a =  parseFloat(prompt("Digite o valor de A: "))
    let b =  parseFloat(prompt("Digite o valor de B: "))
    let c =  parseFloat(prompt("Digite o valor de B: "))

    let resultado    = (a + b+ c) * (a + b+ c)

    alert("O resultado do quadrado da soma dos três valores informados é: "+resultado)

}