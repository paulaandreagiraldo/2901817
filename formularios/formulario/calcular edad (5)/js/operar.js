

function calcularEdad(){
    
    let fechaNacimiento = document.getElementById(`txtFecNac`).value;
    
    
   
    const fechaNac = new Date(fechaNacimiento);
    const hoy = new Date();

    
    let edad = hoy.getFullYear() - fechaNac.getFullYear();

    
    const mes = hoy.getMonth() - fechaNac.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }

    
    document.getElementById(`edad`).innerHTML=`<strong>Edad :</strong>${edad}`;

    return false;
}