var agora = new Date()
var hora = agora.getHours()
console.log (`agora são ${hora} horas `)
if( hora < 12){
    console.log("Bom dia!")

} else if ( hora < 17){
    console.log("boa tarde")
}
else if( hora >= 18){
    console.log("boa noite")
}
else if ( hora >= 0){
    console.log("boa madrugada")
}
