function parimpa(n){
    if(n%2 == 0 ) {
        return "par"
    }
    else{
        return "impar"
    }
}

let res = parimpa(1101)
console.log(`o valor é ${res}`)