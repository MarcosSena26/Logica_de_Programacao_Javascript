function executarExercicio474g(){
alert("Efetuar a leitura de quatro números inteiros e apresentar os números que são divisíveis por 2 e 3. ")

    let a = parseFloat(prompt("Digite o primeiro valor: "))
    let b = parseFloat(prompt("Digite o segundo valor: "))
    let c = parseFloat(prompt("Digite o terceiro valor: "))
    let d = parseFloat(prompt("Digite o quarto valor: "))

    if (a && b && c && d % 2 === 0 && a && b && c && d % 3 === 0) {
        alert("O valor é divisível por 2 e 3.")
    }
    
else {
    ("Os valores não são divisíveis por 2 ou 3.")
}

}