function executarExercicio08(){
    alert("Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. ")

let votosMunicipio = parseInt(prompt("Digite a quantidade de votos da população do município: "))

let votosNulos = parseInt(prompt("Digite a quantidade de votos Nulos: "))

let votosBrancos = parseInt(prompt("Digite a quantidade de votos Brancos: "))

let votosValidos = parseInt(prompt("Digite a quantidade de votos válidos: "))

N = votosNulos / (votosMunicipio * 100)
B = votosBrancos / (votosMunicipio * 100)
V = votosValidos / (votosMunicipio * 100)

alert("O percentual de votos Nulos em relação aos total votos é: "+N+"%")
alert("O percentual de votos Brancos em relação aos total votos é: "+B+"%")
alert("O percentual de votos Válidos em relação aos total votos é: "+V+"%")
}