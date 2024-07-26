

function operacion(){
    let numeroUno = parseInt(document.getElementById("txtNumeroUno").value);
    let numeroDos = parseInt(document.getElementById("txtNumeDos").value);
    let division;
    division = numeroUno * numeroDos ;
    
    document.getElementById(`operacion`).innerHTML=`<strong>multiplicacion:</strong> ${division} `;
    return false;
}
