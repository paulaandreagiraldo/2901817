

function operacion(){
    let base1 = document.getElementById("txtNumeroUno").value;
    let altura1 = document.getElementById("txtNumeDos").value;
    let base2 = document.getElementById("txtNumeroUno2").value;
    let altura2 = document.getElementById("txtNumeDos2").value;
    let multiplicacion1;
    let multiplicacion2;
    let resultado;
    multiplicacion1 = base1 * altura1 ;
    multiplicacion2 = base2 * altura2;

    resultado = multiplicacion1 > multiplicacion2 ? "triangulo uno es mayor" : "triangulo dos es mayor";
    resultado = multiplicacion2 > multiplicacion1 ? "triangulo Dos es mayor" : "triangulo uno es mayor";


    
    document.getElementById(`operacion`).innerHTML=`<strong>multiplicacion1:</strong> ${resultado}  `;
    return false;
}
