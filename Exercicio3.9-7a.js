function executarExercicioa(){



    alert("Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de conversão é F  (9 * C + 160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius. ")
    
    let grausCelsisus = parseFloat(prompt("Digite um valor em graus Celsius para ser convertido em Farenheint:"))

    let resultado = ((9 * grausCelsisus) + 160) / 5

    alert("O resultado da conversão é: "+resultado)


    }