

function operacion(){
    let numeroUno = parseFloat(document.getElementById("txtNotaUno").value);
    let numeroDos = parseFloat(document.getElementById("txtNotaDos").value);
    let numeroTres = parseFloat(document.getElementById("txtNotaTres").value);
    let promedio;
    promedio = (numeroUno + numeroDos + numeroTres)/3;
    
    document.getElementById(`operacion`).innerHTML=`<strong>Promedio: </strong> ${promedio} `;
    return false;
}
