
function contador() {
 
    let numero = parseFloat(document.getElementById(`txtNumeroUno`).value);
    let contador = 0;
  
    
    function actualizarContador() {
        if (contador < numero) {
            contador += 1;
            
            document.getElementById('operacion').innerText = "cuento :"+contador;
  
         
            setTimeout(actualizarContador, 500); 
        }
    }
    
  
    
    actualizarContador();
  
    
    return false;
  }