
function tablamulti(){
    let nume = parseFloat(document.getElementById(`txtNumeroUno`).value);;
  let tabla;
  let multi;
  let resul;
  let resultElement = document.getElementById('operacion');
  resultElement.innerText = '';

  
  tabla=0; 
  while(tabla < nume) {
     tabla++
    multi=0;
  
    while(multi < nume ) { 
  
          multi++;
          resul= tabla* multi;
        console.log(tabla , "x" , multi , "=" , resul); 

        resultElement.innerText += `${tabla} x ${multi} = ${resul}\n` 
  
    }
  
  }
  
  return false;
  }
