function executarExercicio21(){

    alert("Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte. ")

    let horaInicio = parseFloat(prompt("Hora de início do jogo: "))
    let horaFinal = parseFloat(prompt("Hora de início do jogo: "))
    let duracao
    
    if (horaFinal<horaInicio) {
        duracao = (horaInicio-24) + horaFinal
    }
    if (horaFinal>horaInicio) {
        duracao = horaFinal - horaInicio
    }

    if (horaFinal == horaFinal) {
        duracao = 24
    }
    alert("A duração do jogo foi: "+duracao)
}