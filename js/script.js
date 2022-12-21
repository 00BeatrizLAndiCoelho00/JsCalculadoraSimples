function calcular (n1, n2){
    n1 = parseFloat(document.getElementById("n1").value)
    n2 = parseFloat(document.getElementById("n2").value)

    selector = document.getElementById("selector").value

    switch(selector){
        case'+':
            calculo = (n1 + n2)
            document.getElementById("Resultado").innerHTML = `A soma de ${n1} + ${n2} é = ${calculo}`
            break

            case'-':
            calculo = (n1 - n2)
            document.getElementById("Resultado").innerHTML = `A subtração de ${n1} - ${n2} é = ${calculo}`
            break

            case'*':
            calculo = (n1 * n2)
            document.getElementById("Resultado").innerHTML = `A multiplicação de ${n1} X ${n2} é = ${calculo}`
            break

            case'/':
            calculo = (n1 / n2)
            document.getElementById("Resultado").innerHTML = `A divisão de ${n1} / ${n2} é = ${calculo}`
            break
    }
}
