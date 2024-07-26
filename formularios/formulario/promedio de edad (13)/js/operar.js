
function calcularEdad(){
    
    let fechaNacimiento = document.getElementById(`txtFecNac`).value;
    let fechaNacimiento2 = document.getElementById(`txtFecNacD`).value;
    let fechaNacimiento3 = document.getElementById(`txtFecNacT`).value;
    let promedio;

    const fechaNac = new Date(fechaNacimiento);
    const fechaNac2 = new Date(fechaNacimiento2);
    const fechaNac3 = new Date(fechaNacimiento3);
    const hoy = new Date();

    
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    let edad2 = hoy.getFullYear() - fechaNac2.getFullYear();
    let edad3 = hoy.getFullYear() - fechaNac3.getFullYear();
    promedio = (edad + edad2)/3;
  

    
    const mes = hoy.getMonth() - fechaNac.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }
    
    const mesD = hoy.getMonth() - fechaNac2.getMonth();
    if (mesD < 0 || (mesD === 0 && hoy.getDate() < fechaNac2.getDate())) {
        edad2--;
    }

    const mesT = hoy.getMonth() - fechaNac3.getMonth();
    if (mesT < 0 || (mesT === 0 && hoy.getDate() < fechaNac3.getDate())) {
        edad3--;
    }

    
    document.getElementById(`edad`).innerHTML=`<strong>EdadUno :</strong>${edad}  <strong>EdadDos :</strong>${edad2}   <strong>EdadTres :</strong>${edad3}  <strong>promedio :</strong>${promedio}`;

    return false;
}

  
  