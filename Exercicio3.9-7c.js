function executarExercicioc(){
alert("Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula: Volume ←π*Raio2 * Altura ")

let raio = parseFloat(prompt("Digite o valor do raio em centímetros: "))
let altura = parseFloat(prompt("Digite o valor da altura em centímetros: "))

let area  = 3.14159 * (raio **2) * altura

alert("O raio da circunferência é: "+area+" ao cubo")


}