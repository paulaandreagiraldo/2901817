// function areastriangulos(pbaseUno,pbaseDos,palturaUno,palturaDos){
//     let rectanguloUno;
//     let rectanguloDos;
//     let baseUno=pbaseUno;
//     let baseDos=pbaseDos;
//     let alturaUno=palturaUno;
//     let alturaDos=palturaDos;

//     rectanguloUno= baseUno * alturaUno;
//     rectanguloDos= baseDos * alturaDos;

//     if (rectanguloUno == rectanguloDos){
//         return "son iguales";
//     }
//     else if (rectanguloUno>rectanguloDos){
//         return "rectangulo uno es mayor";
//     }
//     else{
//         return "rectangulo dos es mayor";
//     }
// }


const areastriangulos= function(pbaseUno,pbaseDos,palturaUno,palturaDos){
    let rectanguloUno;
    let rectanguloDos;
    let baseUno=pbaseUno;
    let baseDos=pbaseDos;
    let alturaUno=palturaUno;
    let alturaDos=palturaDos;

    rectanguloUno= baseUno * alturaUno;
    rectanguloDos= baseDos * alturaDos;

    if (rectanguloUno == rectanguloDos){
        return "son iguales";
    }
    else if (rectanguloUno>rectanguloDos){
        return "rectangulo uno es mayor";
    }
    else{
        return "rectangulo dos es mayor";
    }
}