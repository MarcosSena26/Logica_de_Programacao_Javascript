function executarExercicio521a() {
    alert(`Exercicio 5.2.1 A)\nApresentar os quadrados dos números inteiros de 15 a 200. `)

    let contadora = 0;
    do {
        alert(`${contadora}^2 = ${contadora ** 2}`)
        contadora++
    } while (contadora < 200)
}