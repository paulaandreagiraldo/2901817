let bingo=[];
let multiplicar;
let tablaMulti;
let tabla;

for(tabla=0; tabla<5;tabla++){
    let interno=[
        ['B','2','4']
    ];
    console.log(interno);
    for (multiplicar=0;multiplicar<5; multiplicar++){
        tablaMulti=multiplicar+1;
        interno.push(tablaMulti);
    }
bingo.push(interno);
}
console.log(bingo);