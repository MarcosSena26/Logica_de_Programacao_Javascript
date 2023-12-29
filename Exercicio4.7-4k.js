function executarExercicio4k (){
    alert("Elaborar um programa que efetue a leitura de um determinado valor inteiro, e efetue a sua apresentação, caso o valor não seja maior que três.")

    let valor = parseInt(prompt("Digite um valor: "))

    if (valor<=3){
        alert(`${valor} não é maior que três.`)
    }
    else{
        alert(`O valor digitado é maior que três.`)
    }
}