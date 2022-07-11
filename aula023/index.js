let amigo = {nome: `josé`
 , sexo:`masculino`,
  peso:87.9,
  engorda(p=0){
    console.log("engordou")
    this.peso += p
  }
}

amigo.engorda(8)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)