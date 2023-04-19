function calculator(){
                 
    var altura = parseFloat(document.getElementById('altura').value)
    var peso = parseFloat(document.getElementById('peso').value)
    var resultado = document.getElementById('resultado')
    var body = document.getElementsByTagName('body')[0]
    
    altura = altura/100
    altura = altura * altura
    var imc = peso/altura
    var classificado
     
    
    if(imc < 18){
        body.style.background = '#ffff00'
        classificado = 'Baixo peso muito grave'
    }else if((imc >= 18.50)&&(imc <= 24.99)){
        body.style.background = '#2db200'
        classificado = 'Peso Normal'
    }else if((imc >= 25)&&(imc <= 29.99)){
        body.style.background = '#ff8000'
        classificado = 'Sobre Peso'
    }else if((imc >= 30)&&(imc <= 39.99)){
        body.style.background = '#ff0000'
        classificado = 'Obesidade grau I'
    }else if(imc > 40){
        body.style.background = '#8c0000'
        classificado = 'Obesidade grau III'
    }
    
    
    resultado.innerHTML = `<p>Classicação: ${classificado}<br></p> <p>Status IMC: ${imc.toFixed(2)}</p> `

}