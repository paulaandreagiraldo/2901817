

function operacion(){
    let numeroUno = parseInt(document.getElementById("txtNumUno").value);
    let numeroDos = parseInt(document.getElementById("txtNumDos").value);
    
    let mayor;
    mayor =  numeroUno > numeroDos ? "numero uno es mayor" : "numero dos es mayor";
    
    document.getElementById(`operacion`).innerHTML=`<strong> Es mayor: </strong> ${mayor} `;
    return false;
}
