function executarExercicio24(){

    alert("Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que ultrapassar este valor, calcular e escrever o seu salário total. ")

    let salario = parseFloat(prompt("Digite o salário fixo do trabalhador: "))
    let vendas = parseFloat(prompt("Digite o valor total de vendas no mês: "))
    let percentual

    if (vendas <= 1500) {
        percentual = (vendas / 100) * 3
    }

    else if (vendas > 1500){
    percentual = (vendas / 100) * 5
    }

    alert("O valor total do salário no mês é: "+(salario + percentual))
}