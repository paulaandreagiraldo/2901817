

function operacion(){
    let numeroUno = document.getElementById("txtNumeroUno").value;
    let numeroDos = document.getElementById("txtNumeDos").value;
    let multiplicacion;
    multiplicacion = numeroUno * numeroDos ;
    
    document.getElementById(`operacion`).innerHTML=`<strong>multiplicacion:</strong> ${multiplicacion} `;
    return false;
}
