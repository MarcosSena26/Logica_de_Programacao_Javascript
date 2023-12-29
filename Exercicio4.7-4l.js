function executarExercicio4l (){
    alert("Elaborar um programa que efetue a leitura do nome e do sexo de uma pessoa, apresentando com saída uma das seguintes mensagens: 'Ilmo Sr.', se o sexo informado como masculino, ou a mensagem 'Ilma Sra.', para o sexo informado como feminino. Apresente também junto da mensagem de saudação o nome previamente informado.")

    let nome = prompt("Digite o seu nome: ")
    let sexo = prompt("Digite seu sexo: 'M' para Masculino, 'F' para feminino.")

    if (sexo == 'M'){
        alert("Ilmo Sr. "+nome)
    }
    else if (sexo == 'F'){
        alert("Ilma Sra. "+nome)
    }
    else{
        alert("Não corresponde. Verifique se digitou da forma correta.")
    }
}