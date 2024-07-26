

function operacion(){
    
    let radio = parseInt(document.getElementById("txtArea").value);
    const  pi = 3.1416;
    let resultado;
    resultado = pi * (radio * radio) ;
    
    document.getElementById(`operacion`).innerHTML=`<strong>Area :</strong> ${resultado} `;
    return false;
}
