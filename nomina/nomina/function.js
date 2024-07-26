const salario=function(pvalorDia,pdiasTrabajados){
         let valorDia=pvalorDia;
         let diasTrabajados=pdiasTrabajados;
         let resultado=valorDia * diasTrabajados;
    
         return resultado;
    }

    const salud= function(pvalorDia,pdiasTrabajados){
             let salarioPersona=salario(pvalorDia,pdiasTrabajados);
            let saludPersona;
             saludPersona=salarioPersona*0.12;
             return saludPersona;
    }

    const pension=function(pvalorDia,pdiasTrabajados){
             let pensionPersona;
             let salarioPersona=salario(pvalorDia,pdiasTrabajados);
             pensionPersona=salarioPersona*0.16 ;
        
             return pensionPersona;
        }

        const arl=function(pvalorDia,diasTrabajados){
                  let arlPersona;
                  let salarioPersona=salario(pvalorDia,diasTrabajados);
                  arlPersonaPersona = salarioPersona*0.052 ;
                    
                  return arlPersona;
            }    

            const subtrans= function(pvalorDia,pdiasTrabajados){
                     let salarioPersona=salario(pvalorDia,pdiasTrabajados);
                     let subsidioT;
                     let salarioMinimo=1300000;
                
                     if (salarioPersona<=2*salarioMinimo){
                         subsidioT=114000;
                     }
                     else{
                         subsidioT=0;
                     }
                     return subsidioT;
             }
                

             const renta= function (pvalorDia,pdiasTrabajados){
                     let salarioPersona = salario(pvalorDia,pdiasTrabajados);
                     let retencion;
                     let salarioMinimo=1300000;
                
                     if (salarioPersona <= 4 * salarioMinimo){
                         retencion=salarioPersona * 0.04;
                
                     }
                     else{
                         retencion=0;
                
                     }
                     return retencion;
                }
                const deducible=function(pvalorDia,pdiasTrabajados){
                         let descuento;
                         let dsalud=salud(pvalorDia,pdiasTrabajados);
                         let dpension= pension(pvalorDia,pdiasTrabajados);
                         let darl= arl(pvalorDia,pdiasTrabajados);
                         let dretencion = renta(pvalorDia,pdiasTrabajados);
                         descuento = dsalud + dpension + darl + dretencion;
                    
                         return descuento;
                     }

                     const extra=function(pvalorDia,pdiasTrabajados){
                        let edadPersona = nomina[iteracion].edad;
                        let salarioPersona = salario(pvalorDia,pdiasTrabajados);
                        let extraPersona;
                    
                        if (edadPersona>40){
                            extraPersona=salarioPersona*0.06;
                        
                        }else if (edadPersona>60){
                            extraPersona=salarioPersona*0.08;
                        }
                        else{
                            extraPersona=0;
                        }
                        return extraPersona;
                    }

                const pagoTotal= function (pvalorDia,pdiasTrabajados){
                         let salarioPersona = salario (pvalorDia,pdiasTrabajados);
                         let subsidioT=subtrans(pvalorDia,pdiasTrabajados);
                         let deducibles=deducible(pvalorDia,pdiasTrabajados);
                         let pago;
                         let extraPersona=extra(pvalorDia,pdiasTrabajados);

                         pago=(salarioPersona+subsidioT+extraPersona)-deducibles ;
                    
                         return deducible;
                     }              


