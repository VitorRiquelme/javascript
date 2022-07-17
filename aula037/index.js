var px=0
var py=0

document.addEventListener("keydown", function(event){
    let obj=document.getElementById("dv1")
    let tecla=event.keyCode

    if(tecla==37){
        px-=10
        obj.style.left=px+"px"
    }else if(tecla==38){
        py-=10
        obj.style.top=py+"px"
    }else if(tecla==39){
        px+=10
        obj.style.left=px+"px"
    }else if(tecla==40){
        py+=10
        obj.style.top=py+"px"
    }
})