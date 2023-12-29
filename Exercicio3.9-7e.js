function executarExercicioe(){
    alert("Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula  PRESTACAO 	 VALOR + (VALOR * TAXA/100) * TEMPO). ")
    
    let valor = parseFloat(prompt("Digite o valor da prestação: "))
    let taxa = parseFloat(prompt("Digite o valor da taxa: "))
    let tempo = parseFloat(prompt("Digite o valor do tempo: "))
    
    let prestacao = valor + (valor * taxa / 100 * tempo)
    
    alert("O valor da prestação em atraso é: R$"+prestacao)
    
    }