function executarExercicio42w(){
    alert(`Exercicio 42)\nFaça um programa que leia um número inteiro e exiba se ele é um número primo usando o loop "while".`)

    let contadora = 0, contadoraPrimo = 0

    let numero = parseInt(prompt(`Digite um numero: `))

    while (numero >= contadora) {
        if (numero % contadora == 0) {
            contadoraPrimo++
        }
        contadora++
    }

    if (contadoraPrimo == 2) {
        alert(`${numero} é primo`)
    } else {
        alert(`${numero} não é primo`)
    }
}