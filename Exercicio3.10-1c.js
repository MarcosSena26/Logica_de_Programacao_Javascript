function executarExercicio310c(){
    alert("Em uma eleição sindical concorreram ao cargo de presidente três candidatos (A, B e C). Durante a apuração dos votos foram computados votos nulos e votos em branco, além dos votos válidos para cada candidato. Deve ser criado um programa de computador que efetue a leitura da quantidade de votos válidos para cada candidato, além de efetuar  também a leitura da quantidade de votos nulos e votos em branco. Ao final o programa deve apresentar o número total de eleitores, considerando votos válidos, nulos e em branco; o percentual correspondente de votos válidos em relação à quantidade de eleitores; o percentual correspondente de votos válidos do candidato A em relação à quantidade de eleitores; o percentual correspondente de votos válidos do candidato B em relação à quantidade de eleitores; o percentual correspondente de votos válidos do candidato C em relação à quantidade de eleitores; o percentual correspondente de votos nulos em relação à quantidade de eleitores; e por último o percentual correspondente de votos em branco em relação à quantidade de eleitores. ")


    let presidenteA = parseInt(prompt("Digite o total de votos do Presidente A: "))
    let presidenteB = parseInt(prompt("Digite o total de votos do Presidente B: "))
    let presidenteC = parseInt(prompt("Digite o total de votos do Presidente C: "))
    let nulos = parseInt(prompt("Digite o total de votos nulos: "))
    let brancos = parseInt(prompt("Digite o total de votos brancos: "))

    let resultado = presidenteA + presidenteB + presidenteC + brancos + nulos
    alert("O ttal de eleitores é: "+resultado)

     percentualA = (presidenteA * 100) / resultado
     percentualB = (presidenteB * 100) / resultado
     percentualC = (presidenteC * 100) / resultado
     nulos = (nulos * 100) / resultado
     brancos = (brancos * 100) / resultado

     alert("O percentual correspondente de votos válidos do Presidente A em relação à quantidade de eleitores é: "+PercentualA+"%")
     alert("O percentual correspondente de votos válidos do Presidente B em relação à quantidade de eleitores é: "+PercentualB+"%")
     alert("O percentual correspondente de votos válidos do Presidente C em relação à quantidade de eleitores é: "+PercentualC+"%")
     alert("O percentual correspondente de votos nulos em relação à quantidade de eleitores é: "+nulos+"%")
     alert("O percentual correspondente de votos brancos em relação à quantidade de eleitores é: "+brancos+"%")

}