function executarExercicio474f(){
    
    alert("Efetuar a leitura de três valores (variáveis A, B e C) e apresentá-los dispostos em ordem crescente.  ")

    let a = parseFloat(prompt("Digite o primeiro valor: "))
    let b = parseFloat(prompt("Digite o segundo valor: "))
    let c = parseFloat(prompt("Digite o terceiro valor: "))
    let valores = [a, b, c]
    
    valores.sort(function (x, y) {
        return x - y;
    })
    //Usamos a função sort() para classificar os valores em ordem crescente. A função de comparação (x, y) => x - y é usada para garantir a ordenação crescente.
alert("Os valors em ordem crescente são: "+valores)


}