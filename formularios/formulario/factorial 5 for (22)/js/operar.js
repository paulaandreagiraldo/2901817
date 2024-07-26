

 function factorial(){
  let numero =document.getElementById(`txtNumeroUno`).value;
  let factor = 1;
  let contador;
  let resultElement = document.getElementById('operacion');
    resultElement.innerText = '';
  
  
  for (contador = 1; contador <= numero; contador++) {
    
    factor *= contador;
    console.log(factor);
    resultElement.innerText += `${factor} x ${contador} = ${factor}\n `;
  
  }
  
  return false;
  }


  