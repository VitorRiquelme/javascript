let num = [5, 9 , 2 , 3]
num.push(1)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posições `)
console.log(`o primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(9)
if(pos <= -1){
    console.log("o valor não foi encontrado tente novamente")
} else{
    console.log(`o valor está na posição ${pos}`)
}
