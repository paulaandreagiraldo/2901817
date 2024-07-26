// function lee(pnumeroUno,pnumeroDos,pnumeroTres){
//     let numeroUno=pnumeroUno;
//     let numeroDos=pnumeroDos;
//     let numeroTres=pnumeroTres;


//     if(numeroUno>numeroDos && numeroUno>numeroTres){
//         return "numero uno es mayor";
//     }
//     else if (numeroDos>numeroUno && numeroDos>numeroTres){
//         return "numero dos es mayor";
//     }
//     else {
//         return "numero tres es mayor ";
//     }

// }

const lee= function(pnumeroUno,pnumeroDos,pnumeroTres){
    let numeroUno=pnumeroUno;
    let numeroDos=pnumeroDos;
    let numeroTres=pnumeroTres;


    if(numeroUno>numeroDos && numeroUno>numeroTres){
        return "numero uno es mayor";
    }
    else if (numeroDos>numeroUno && numeroDos>numeroTres){
        return "numero dos es mayor";
    }
    else {
        return "numero tres es mayor ";
    }

}