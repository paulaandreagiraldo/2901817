

function operacion(){
    let numeroUno = parseInt(document.getElementById("txtNumUno").value);
    let numeroDos = parseInt(document.getElementById("txtNumDos").value);
    let numeroTres = parseInt(document.getElementById("txtNumTres").value);
    let mayor;
    mayor =  numeroUno > numeroDos  && numeroUno > numeroTres ? "numero Uno es mayor" : "Numero Dos es mayor" && numeroUno < numeroDos && numeroDos >= numeroTres ? "Numero Dos es mayor" : "numero Tres es mayor" ;

    
    document.getElementById(`operacion`).innerHTML=`<strong> Es mayor: </strong> ${mayor} `;
    return false;
}
