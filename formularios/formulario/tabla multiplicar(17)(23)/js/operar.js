function multiplicar(){
    let contador;
    let  numero = parseFloat(document.getElementById(`txtNumeroUno`).value);
    let resultElement = document.getElementById('operacion');
    contador = 0;
    resultElement.innerText = '';
    
    
    while(contador < 10){
        contador=contador+1;
        let multiplicar = numero * contador;
        console.log(numero,"x",contador,"=",multiplicar);
        
       

        resultElement.innerText += `${numero} x ${contador} = ${multiplicar}\n`;
        
    }
    return false;
}
