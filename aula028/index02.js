var nota = 10
var res 
if(nota>=60){
    res ="aprovado"
    if(nota>=90){
        if(nota>=100){
            console.log(res+=" com excelencia")
        }else{
        console.log(res+=" com louvor ")}
    }else{
        console.log(res+=" normal")
    }
}else if(nota>=40){
    console.log("recuperação")
}else{
    res ="reprovado"
    if(nota>=20){
        console.log(res+=" normal")
    }else{
        console.log(res+=" com louvor")
    }
}