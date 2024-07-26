const tabla9 = function(pnumero,ptabla){
    let numero=pnumero;
    let contador=0;
    let resultado;
    let tabla=ptabla;
    for (let contador=1; contador<= numero;contador++){
    
        resultado= contador * tabla;
        console.log(contador);

    if (resultado% 2==0){
        console.log (+ tabla + "x" + contador + "=" + resultado + " el numero es par");
    }
    else {
         console.log(+ tabla + "x" + contador + "=" + resultado + " el numero es impar");
    }
    } return contador;

}