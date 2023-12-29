function executarExercicio511c() {
    alert ("Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100). `)")

    let contadora = 0; acumuladora = 0
    while (contadora < 101) {
        acumuladora = acumuladora + contadora
        contadora++
    }
    alert(acumuladora)
}