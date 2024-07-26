

function operacion(){
    let numeroUno = parseInt(document.getElementById("txtNumeroUno").value);
    let numeroDos = parseInt(document.getElementById("txtNumeDos").value);
    let suma;
    suma = numeroUno + numeroDos ;
    
    document.getElementById(`operacion`).innerHTML=`<strong>suma:</strong> ${suma} `;
    return false;
}
