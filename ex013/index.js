
/*function CalcularAreaTerreno (largura, comprimento){
  var area = largura*comprimento
  
  return area
}

  var largura = prompt('digite a largura')
  var comprimento = prompt('digira o comprimento')
  var area = CalcularAreaTerreno(largura,comprimento)
  document.write('caralho ' + area)*/

  /*function soma (a,b){
    return a + b
  }
  console.log(soma(7,2))*/

  //3 escopos em javascript: global, função e o de bloco

  /*var serie = 'friends'

  if(true){//Variaves dentro do escopo global e de bloco podem ser chamadas a qualquer hora 
    document.write(serie)
    var sexo = oi
  }
  function x(){//variaves dentro de funções não podem ser chamadas pois só pertecem a eles
    document.write('iae')
    return x
  }*/

  /*var vitor = function(){
    document.write('olá tudo bem ?')
  }
  vitor()*/


  //funções de callback 
 /* function exibirArtigo(id, callbacksucesso, callbackerro){
    if(true){
      callbacksucesso('titulo', 'funções são chatas')
    }else{
      callbackerro('erro')
    }
  }
  
  var callbacksucesso =  function(titulo, descricao){
    document.write(titulo)
    document.write(descricao)
  }
  var callbackerro = function(erro){
    document.write(erro)
  }

  exibirArtigo(1, callbacksucesso, callbackerro)*/

  //length

  //document.write('vitoriquleme'.length)

  //= é um sinal de atribuação

  //Função void não retorna nada para quem fez a chamada
  /*function calcularAreaTerreno ( largura, comprimento){
    var area = largura * comprimento
  }*/

  /*function calcularAreaTerreno ( largura, comprimento){
    var area = largura * comprimento
    
    return area
  }

  var largura = prompt('Dgite uma largura')
  var comprimento = prompt('Digite um comprimento')

  var area = calcularAreaTerreno(largura, comprimento)

  document.write('o terreno possui ' + area + ' metros quadrados')*/

  /*function soma(a, b){
    return a + b
  }
  
  console.log(soma(12,10))*/

  //escopo global é o escopo do java script como um todo
  //escopo de fução referese a um escopo dentro de uma função
