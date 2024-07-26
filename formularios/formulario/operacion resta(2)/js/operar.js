

function operacion(){
    let numeroUno = parseInt(document.getElementById("txtNumeroUno").value);
    let numeroDos = parseInt(document.getElementById("txtNumeDos").value);
    let resta;
    resta = numeroUno - numeroDos ;
    
    document.getElementById(`operacion`).innerHTML=`<strong>Resta:</strong> ${resta} `;
    return false;
}
