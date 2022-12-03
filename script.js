let saida = window.document.getElementById('saida')

function calcular() {
    nome = document.getElementById("nome").value 
    altura = document.getElementById("altura").value
    peso = document.getElementById("peso").value
    imc = peso / (altura*altura)
    let classificacao 
    if(imc <= 18.5){
        classificacao = "abaixo do peso"
    }else if(imc >= 18.5 && imc <= 24.9){
        classificacao = "peso normal, parabéns"
    }else if(imc >= 24.9 && imc <= 29.9){
        classificacao = "você está sobrepeso"
    }else if(imc >= 29.9 && imc <= 39.9){
        classificacao = "você está obeso"
    }else{
        classificacao = "você está com obesidade grave, se cuide"
    }
    saida.innerHTML = `<p>${nome} seu IMC é ${imc.toFixed(2)}, ${classificacao}</p>`
}