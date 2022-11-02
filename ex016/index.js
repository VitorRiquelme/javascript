/*let variavel = 20
const pi = 3.14 //Const uma vez declarada não consegue mais mudar o valor

console.log(variavel)

variavel = 10 / 10

console.log(variavel)*
 
const precodocombustivel 5;79
const gastomedio = 10
const distancia = 100

let resultado = 100/10*5;79

console.log(resultado)
function digaMeuNome(name){
  console.log('seu nome é ' + name)
}

digaMeuNome('Vitor')

function quadrado(valor){
  return valor*valor
}
let quadradoDeDez = quadrado(12)
console.log('o valor da potencia de dez é ' + quadradoDeDez)

function incrementarJuros(valor, juros){
  let incrementarJuros = (juros/100)*valor
  return valor + incrementarJuros 
}
console.log(incrementarJuros(100,15))

function seuNome(nome){
  console.log('seu nome é ' + nome)
}
seuNome('vitor')

function idade(sua){
  if(sua>=18){
    console.log('voce é maior de idade')
  }else{
    console.log('voce è menor de idade')
  }
}
idade(19)

let vitor = {
  nome : 'vitor riquelme',
  peso : 50+'kg',
  idade : 19,

  descrever : function(){
      console.log(`meu nome é ${this.nome} e minha idade é ${this.idade} e eu peso ${this.peso}`)
  }
}
vitor.descrever()

class pessoa{
  nome 
  idade

  descrever(){
    console.log(`meu nome é ${this.nome} e eu tenho ${this.idade}`)
  }
}

let vitor = new pessoa()
vitor.nome = 'vitor riquelme oliveira mendes'
vitor.idade = 30+' anos'

let lucas = new pessoa()
lucas.nome = 'lucas oliveira mendes'
lucas.idade = 40+' anos'

vitor.descrever()
lucas.descrever()*/

/*class pessoa{
  nome
  idade
  anoDeNascimento

  constructor(nome,idade){
    this.nome=nome
    this.idade=idade
    this.anoDeNascimento= 2022 - idade
  }
  descrever(){
    console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos e eu nasci em ${this.anoDeNascimento}`)
  }
}

function compararPessoas(pessoa1,pessoa2){
  if(pessoa1.idade>pessoa2.idade){
    console.log('O ' + pessoa1.nome + ' é mais velho que o ' + pessoa2.nome)
  }else if(pessoa2.idade>pessoa1.idade){
    console.log('O ' + pessoa2.nome + ' é mais velho que o ' + pessoa1.nome)
  }else{
    console.log('O ' + pessoa1.nome + ' tem a mesma idade que ' + pessoa2.nome)
  }
}

const vitor = new pessoa('vitor', 20)
const lucas = new pessoa('lucas', 20)

compararPessoas(vitor,lucas)/*


/*Crie uma classe para comparar carros 
os carros possuem uma marca uma cor e um gasto médio de combustivel por kilometro rodado.
crie um metodo que que dado a quantidade de quilometro e o preço do combustivel de o valor gasto em reais
para realizar este percuso*/

class carros{
  marca
  cor 
  gastoMedioDeCombustivel

  constructor(marca,cor,gastoMedioDeCombustivel){
    this.marca=marca
    this.cor=cor
    this.gastoMedioDeCombustivel=gastoMedioDeCombustivel
  }
  calcularGastoDePercuso(distancia,precodocombustivel){
    return distancia*this.gastoMedioDeCombustivel*precodocombustivel
  }
}
const uno = new carros('Fiat','azul',1/12)
uno.calcularGastoDePercuso(70, 5)
console.log(uno.calcularGastoDePercuso(70, 5))

const palio = new carros('Palio','Vermelha',1/10)
console.log(palio.calcularGastoDePercuso(70, 5 ))
