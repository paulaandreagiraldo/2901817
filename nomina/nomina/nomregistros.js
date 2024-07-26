//autor:paula andrea giraldo losada
//fecha: 09-05-2024
//nombre: nomina


//crear 7 registros para realizar una nomina
let nomina=[];
let iteracion;
let salarioPersona;
let saludPersona;
let pensionPersona;
let arlPersonaPersona;
let subsidioT;
let retencion;
let descuento;
let pago;
let totalPagar=[];

nomina=[
   { id:1,numeroDocumento:1076503416,nombres:'paula andrea',apellidos:'giraldo losada',edad:17,valorDia:500000,diasTrabajados:30},
   { id:2,numeroDocumento:1077224670,nombres:'juan carlos',apellidos:'jurado castañeda',edad:19,valorDia:120000,diasTrabajados:300},
   { id:3,numeroDocumento:1075790810,nombres:'daniel',apellidos:'salazar',edad:19,valorDia:120000,diasTrabajados:280},
   { id:4,numeroDocumento:1029880743,nombres:'reivyng',apellidos:'ramires',edad:17,valorDia:130000,diasTrabajados:330},
   { id:5,numeroDocumento:1129844804,nombres:'brayan stid',apellidos:'cortes lombana',edad:16,valorDia:125000,diasTrabajados:390},
   { id:6,numeroDocumento:1080427305,nombres:'maria alejandra',apellidos:'marin henriquez',edad:17,valorDia:110000,diasTrabajados:100},
   { id:7,numeroDocumento:1077722422,nombres:'catalina',apellidos:'cometa fierro',edad:18,valorDia:126000,diasTrabajados:240}
   
]
console.table(nomina);


for(iteracion=0;iteracion<7;iteracion++){
    valorDias=nomina[iteracion].valorDia;
    diasTrabajado=nomina[iteracion].diasTrabajados;
    salarioPersona=salario(valorDias,diasTrabajado);
    saludPersona=salud(valorDias,diasTrabajado);
    pensionPersona=pension(valorDias,diasTrabajado);
    arlPersonaPersona=arl(valorDias,diasTrabajado);
    subsidioT=subtrans(valorDias,diasTrabajado);
    retencion=renta(valorDias,diasTrabajado);
    extraPer=extra(valorDias,diasTrabajado);
    pago=pagoTotal(valorDias,diasTrabajado);
    totalPagar.push({id:nomina[iteracion].id,numeroDocumento:nomina[iteracion].numeroDocumento,nombres:nomina[iteracion].nombres,apellidos:nomina[iteracion].apellidos,edad:nomina[iteracion].edad,valorDiaP:valorDias,diasTrabajadoP:diasTrabajado,salarioPersonaP:salarioPersona,saludPersonaP:saludPersona,pensionPersonaP:pensionPersona,arlPersonaPersonaP:arlPersonaPersona,subsidioTP:subsidioT,retencionP:retencion,extraP:extraPer,pagoP:pago})
}

console.table(totalPagar);