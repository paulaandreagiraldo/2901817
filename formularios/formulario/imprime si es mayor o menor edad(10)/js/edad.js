

/**function operacion(){
    let numeroUno = parseInt(document.getElementById("txtNumeroUno").value);
    let numeroDos = parseInt(document.getElementById("txtNumeDos").value);
    let suma;
    suma = numeroUno + numeroDos ;
    
    document.getElementById(`operacion`).innerHTML=`<strong>suma:</strong> ${suma} `;
    return false;
}*/
function calcularEdad() {
    let fechaNacimiento = document.getElementById("txtFecNac").value;
    let condicional;
   
    const fechaNac = new Date(fechaNacimiento);
    const hoy = new Date();

    
    let edad = hoy.getFullYear() - fechaNac.getFullYear();

    
    const mes = hoy.getMonth() - fechaNac.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }

    condicional = edad < 18 ? "es menor de edad" : "es adolecente adulto" &  edad <= 35 ? "es adulto" : "es adulto mayor";
    
    document.getElementById(`edad`).innerHTML=`<strong>Edad :</strong>${edad} <strong>--></strong>${condicional}`;

    return false;
}



