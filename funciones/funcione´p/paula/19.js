// function contar5 (ptabla,pmultplicador){
//     let tabla=ptabla=5;
//     let multiplicador=pmultplicador=5;
//     let contadorTabla=1;
//     let contadorImpares=0;
//     let resultado;
//     let contadormultiplicador;
//     let contadorPares;

//     for (tabla = 1; tabla <= multiplicador; tabla++){
//         contadormultiplicador=1;
//         console.log ("tabla del " +contadorTabla+ ".");

//         for (contadormultiplicador; contadormultiplicador<= tabla;contadormultiplicador ){
//             resultado=contadorTabla * contadormultiplicador;
//             contadormultiplicador ++;
//             console.log (contadorTabla+ "x" +contadormultiplicador+ "=" +resultado);

//             if (resultado%2==0){
//                 contadorPares = contadorPares+1;
//                 return (resultado+ "buzz");
//             }
//             else{
//                 contadorImpares= contadorImpares +1;
//                 return (resultado+ "bass");
//             }
//       }contadorTabla++;
//     }
//     return ("cantidad de numeros pares" + contadorPares +":" + resultado +"\n" +"cantidad de numeros imapres" +contadorImpares +resultado +":");

// }

function contar5 (pcont1,pcont2){
    let cont1=pcont1;
    let cont2=pcont2;
    let tabla =0;
    let resultado;
    let contadorPares;
    let contadorImpares;
    let multi;

    while(tabla<cont1){
        tabla++;
        multi=0;

        while(multi<cont2){
            multi++;
            resultado=tabla * multi;
            console.log(tabla+ "x" +multi+ "=" + resultado);
            if(resultado%2==0){
                return (resultado+ "buzz");
                contadorPares++;
            }
            else {
                return (resultado+ "bass");
                contadorImpares++;
            }
        }
    }return resultado;
}

// const contar5= function (pcont1,pcont2){
//     let cont1=pcont1;
//     let cont2=pcont2;
//     let tabla =0;
//     let resultado;
//     let contadorPares;
//     let contadorImpares;
//     let multi;

//     while(tabla<cont1){
//         tabla++;
//         multi=0;

//         while(multi<cont2){
//             multi++;
//             resultado=tabla * multi;
//             console.log(tabla+ "x" +multi+ "=" + resultado);
//             if(resultado%2==0){
//                 console.log(resultado+ "buzz");
//                 contadorPares++;
//             }
//             else {
//                 console.log(resultado+ "bass");
//                 contadorImpares++;
//             }
//         }
//     }return resultado;
// }