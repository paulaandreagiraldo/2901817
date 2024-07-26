// const salario=function(pvdias,pndias){
//     let vdias=pvdias;
//     let ndias=pndias;
//     let resultado=vdias * ndias;

//     return resultado;
// }

// function salario(pvdias,pndias){
//     let vdias=pvdias;
//     let ndias=pndias;
//     let resultado=vdias * ndias;

//     return resultado;
// }


// parte 1


// function salud(pvdias,pndias){
//     let salarioPersona=salario(pvdias,pndias);
//     let saludPersona;
//     saludPersona=salarioPersona * 0,12;
//     return saludPersona;

// }

// const salud= function(pvdias,pndias){
//     let salarioPersona=salario(pvdias,pndias);
//     let saludPersona;
//     saludPersona=salarioPersona * 0,12;
//     return saludPersona;

// }

// parte 2

// function pension (pndias,pvdias){
//     let pensionPersona;
//     let salarioPersona=salario(pvdias,pndias);
//     pensionPersona = salarioPersona * 0.16 ;

//     return pensionPersona;
// }

// const pension=function (pndias,pvdias){
//     let pensionPersona;
//     let salarioPersona=salario(pvdias,pndias);
//     pensionPersona = salarioPersona * 0.16 ;

//     return pensionPersona;
// }

// parte 3


// function pension (pndias,pvdias){
//     let arlPersona;
//     let salarioPersona=salario(pvdias,pndias);
//     arlPersonaPersona = salarioPersona * 0.16 ;
    
//     return arlPersona;
//     }
    

// const pension =function (pndias,pvdias){
//      let arlPersona;
//      let salarioPersona=salario(pvdias,pndias);
//      arlPersonaPersona = salarioPersona * 0.16 ;
        
//      return arlPersona;
//      }    

// parte 4

// function subtrans(pvdias,pndias){
//     let salarioPersona= salario(pvdias,pndias);
//     let subsidioT;
//     let salarioMinimo=1300000;

//     if (salarioPersona <= 2 * salarioMinimo){
//         subsidioT=114000;
//     }
//     else{
//         subsidioT=0;
//     }
//     return subsidioT;
// }

// const subtrans= function(pvdias,pndias){
//     let salarioPersona= salario(pvdias,pndias);
//     let subsidioT;
//     let salarioMinimo=1300000;

//     if (salarioPersona <= 2 * salarioMinimo){
//         subsidioT=114000;
//     }
//     else{
//         subsidioT=0;
//     }
//     return subsidioT;
// }

// parte 5

// function renta (pvdias,pndias){
//     let salarioPersona = salario (pndias,pvdias);
//     let retencion;
//     let salarioMinimo=1300000;

//     if (salarioPersona <= 4 * salarioMinimo){
//         retencion=salarioPersona * 0.04;

//     }
//     else{
//         retencion=0;

//     }
//     return retencion;
// }

// const renta= function (pvdias,pndias){
//     let salarioPersona = salario (pndias,pvdias);
//     let retencion;
//     let salarioMinimo=1300000;

//     if (salarioPersona <= 4 * salarioMinimo){
//         retencion=salarioPersona * 0.04;

//     }
//     else{
//         retencion=0;

//     }
//     return retencion;
// }

// parte 6

// function deducible (pvdias,pndias){
//     let descuento;
//     let dsalud=salud (pvdias,pndias);
//     let dpension= pension (pvdias,pndias);
//     let darl= arl (pvdias,pndias);
//     let dretencion = retencion (pvdias,pndias);
//     descuento = dsalud + dpension + darl + dretencion;

//     return descuento;
// }

// const deducible=function (pvdias,pndias){
//     let descuento;
//     let dsalud=salud (pvdias,pndias);
//     let dpension= pension (pvdias,pndias);
//     let darl= arl (pvdias,pndias);
//     let dretencion = retencion (pvdias,pndias);
//     descuento = dsalud + dpension + darl + dretencion;

//     return descuento;
// }
    
// parte 7


// function pagoTotal (pndias,pvdias){
//     let salarioPersona = salario (pndias,pvdias);
//     let subsidioT=subtrans(pndias,pvdias);
//     let deducibles=deducible(pndias,pvdias);
//     let pago;
//     pago= salarioPersona + subsidioT - deducibles;

//     return pago;
// }

// const pagoTotal= function (pndias,pvdias){
//     let salarioPersona = salario (pndias,pvdias);
//     let subsidioT=subtrans(pndias,pvdias);
//     let deducibles=deducible(pndias,pvdias);
//     let pago;
//     pago= salarioPersona + subsidioT - deducibles;

//     return pago;
// }

// parte 8

