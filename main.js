let cantidad=document.getElementById('cantidad');
let boton=document.getElementById('generar');
let contraseña=document.getElementById('contrasena');
let comprobar=document.getElementById('comprobar')

const cadenaCaracteres="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

function generar(){

    let numDigital=parseInt (cantidad.value);
    // console.log(numDigital);

    if(numDigital < 8){
    alert("La cantidad de caracteres tiene que ser mayor que 8");
}
    if (numDigital==8 && numDigital<=10){
        comprobar.innerHTML='CONTRASEÑA MUY DÉBIL';
        comprobar.style.color='#FF0000';
    }else if(numDigital>10 && numDigital<=12){
        comprobar.innerHTML='CONTRASEÑA DEBIL'; 
        comprobar.style.color='#FF8000';
    }else if(numDigital>12 && numDigital<=14){
        comprobar.innerHTML='CONTRASEÑA ACEPTABLE'; 
        comprobar.style.color='#FFFF00';
    }else if(numDigital>14 && numDigital<=16){
        comprobar.innerHTML='CONTRASEÑA FUERTE'; 
        comprobar.style.color='#80FF00';
    }else if(numDigital>16 && numDigital<=18){
        comprobar.innerHTML='CONTRASEÑA MUY FUERTE'; 
        comprobar.style.color='#00FF00';
    }
    let password='';
    for(let i=0; i<numDigital; i++){
        let caractAleatorio= cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];  
        password+=caractAleatorio;
    }
    contraseña.value = password;
}

function reiniciar(){
    
    let numDigital=parseInt (cantidad.value);

    let password='';
    for(let i=0; i<numDigital; i++){
        let caractAleatorio= cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];  
        password+=caractAleatorio;
    }
    contraseña.value = password;
}







