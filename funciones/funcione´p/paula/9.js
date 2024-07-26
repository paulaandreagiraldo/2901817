function edades(edadUno,edadDos,edadTres){
    
    let edadPromedio;
    let yearNow=2024;
    let yearBeginUno=edadUno;
    let yearBeginDos=edadDos;
    let yearBeginTres=edadTres;
    let promedio=3;


    edadUno=yearNow - yearBeginUno;
    edadDos=yearNow - yearBeginDos;
    edadTres=yearNow - yearBeginTres;
     
    edadPromedio=(edadUno + edadDos + edadTres) / promedio

    return edadPromedio;
    

}

// const edades=function(edadUno,edadDos,edadTres){
    
//     let edadPromedio;
//     let yearNow=2024;
//     let yearBeginUno=edadUno;
//     let yearBeginDos=edadDos;
//     let yearBeginTres=edadTres;
//     let promedio=3;

//     edadUno=yearNow - yearBeginUno;
//     edadDos=yearNow - yearBeginDos;
//     edadTres=yearNow - yearBeginTres;
     
//     edadPromedio=(edadUno + edadDos + edadTres) / promedio

//     return edadPromedio;
    

// }