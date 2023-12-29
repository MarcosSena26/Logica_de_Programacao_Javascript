function executarExercicio32(){

    alert("Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE. ")

    let time1 = prompt("Digite o nome do primeiro time: ")
    let time2 = prompt("Digite o nome do segundo time: ")

    let gols1 = parseInt(prompt("Digite a quantidade de gols do primeiro time: "))
    let gols2 = parseInt(prompt("Digite a quantidade de gols do segundo time: "))

    if (gols1 > gols2){
        alert("O vencedor é: "+time1)
    }
    else if (gols1< gols2){
        alert("O vencedor é: "+time2)
    }

    else if (gols1 == gols2){
        alert("A partida terminou em empate.")
    }

}