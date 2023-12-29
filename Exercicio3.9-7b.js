function executarExerciciob(){

alert("Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius. A fórmula de conversão é C  (F - 32) * (5/9) , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius. ")

let  fahrenheit = parseFloat(prompt("Digite a temperatura em Farenheint, para fazer a conversão em graus Celsius:"))

let celsius = (fahrenheit - 32) * (5/9)

alert("A temperatura convertida para graus Celsius é: "+celsius)


}