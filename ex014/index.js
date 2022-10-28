var num1 = prompt('digite um numero')
var operacao = prompt('digite uma operação')
var num2 = prompt('digite um numero')

function calcularOperacao(num1, num2, operacao){
  num1 = parseFloat(num1)
  num2 = parseFloat(num2)

  var resultado = 0
  
  if(operacao == 'soma'){
   resultado=num1+num2
  }
  if(operacao == 'subtracao'){
    resultado= num1-num2
  }

  return resultado
}

document.write('O resultado é ' + calcularOperacao(num1,num2,operacao))