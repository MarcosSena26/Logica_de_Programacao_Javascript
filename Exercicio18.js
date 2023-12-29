function executarExercicio18(){

    alert("Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu). ")

    let anoAtual = parseInt(prompt("Digite o ano atual: "))
    let ano = parseInt(prompt("Digite o ano de nascimento: "))

    if (anoAtual - ano > 17) {
        alert("Você pode votar.")
    }

     else { 
        alert("Você não pode Votar.")
     }

}