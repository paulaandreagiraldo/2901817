

function factorial(){
    let numero=document.getElementById(`txtNumeroUno`).value;
    let resultElement = document.getElementById('operacion');
    let factor;
    let contador;
    resultElement.innerText = '';
    
    
    contador=0
    factor=1
  
    while( contador < numero){
        contador=contador+1;
        factor=factor*contador;
        console.log(factor);
        
        
        resultElement.innerText += `${factor} * ${contador} = ${factor}\n`;

        
    }
    
   
    
    return false;
    
}