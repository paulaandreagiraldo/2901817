function contar5 (pcont1,pcont2){
    let cont1=pcont1;
    let cont2=pcont2;
    let tabla =0;
    let resultado;
    let contadorPares;
    let contadorImpares;
    let multi;

    for(tabla=1;tabla<=cont1;tabla++){
    

        for(multi=1;multi<=cont2; multi++){
            
            resultado=tabla * multi;
            console.log(tabla+ "x" +multi+ "=" + resultado);
            if(resultado%2==0){
                console.log (resultado+ "buzz");
                contadorPares++;
            }
            else {
                console.log(resultado+ "bass");
                contadorImpares++;
            }
        }
    }return resultado;
}