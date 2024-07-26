

function salario1(){
    const vidias = 45;
    let PensionPersna;
    let subsidioT;
    let retencion;
    let dedusicble; 
   let salarioMinimo = 1300000;
    let ndias = document.getElementById(`txtValor`).value;
    let resultElement = document.getElementById('Resultado');
    resultElement.innerText = ``;
    
    let salario = vidias * ndias;

   let  saludPersna = salario * 0.12;
    let ArlPersna = salario * 0.052;
    PensionPersna = salario * 0.16;

    if (salario<=2 * salarioMinimo){
        subsidioT = 114000
    }
    
        else{ subsidioT = 0}
        
        if (salario<=4 * salarioMinimo){
            retencion = 114000
        }
        
            else{ retencion = 0}
    
    let dsalud = saludPersna;
    let dpension = PensionPersna;
    let darl = ArlPersna;
    dedusicble = dsalud + dpension + darl ;

    let salrioPersona =salario;
    let subtrasporte =subsidioT;
    let pdeducible = dedusicble;
    let pago
    pago = salrioPersona + subtrasporte - pdeducible;

    
    
   

    resultElement.innerText += `SALARIO :${salario} \n SALUD :${saludPersna}\n ARL :${ArlPersna}\nPENSION : ${PensionPersna}\n SUBSIDIOTRASPORTE : ${subsidioT}\n RETENCION :${retencion}\n DEDUCIBLE : ${dedusicble}\n PAGO TOTAL: ${pago}`;

   

 
    return false;
 }





    
