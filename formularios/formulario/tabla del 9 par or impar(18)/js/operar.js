function multiplicar(){
    let contador;
    let par;
    let impar;
    let  numero = parseFloat(document.getElementById(`txtNumeroUno`).value);
    let resultElement = document.getElementById('operacion');
    resultElement.innerText = '';

    contador = 0;
    par=0;
    impar=0;
    
    
    
    while(contador < 10){
        contador=contador+1;
        let multiplicar = numero * contador;
        console.log(numero,"x",contador,"=",multiplicar);
        

       par=(multiplicar % 2 === 0) ? "Par" : "Impar";

    resultElement.innerText += `${numero} x ${contador} = ${multiplicar}\n ${par}\n`;
        
    }
    return false;
}
