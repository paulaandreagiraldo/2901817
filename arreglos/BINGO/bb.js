let bingo=[];
let interacion1;
let interacion2;
let contador=0;
let tabla;

console.log("Bingo General\n");

for (interacion1=0;interacion1<5; interacion1++){
    let interno=[];
    for(interacion2=0;interacion2<5; interacion2++){

        contador=contador+1;
        tabla=contador*2;
        interno.push(tabla);


    }
    bingo.push(interno);

}console.log(bingo)


console.log("letra B\n");
for (interacion2=0;interacion2<5;interacion2++){
    console.log(bingo [interacion2][0]+"");
}

console.log("letra I\n");
for (interacion2=0;interacion2<5;interacion2++){
    console.log(bingo [interacion2][1]+"");
}

console.log("letra N\n");
for (interacion2=0;interacion2<5;interacion2++){
    console.log(bingo [interacion2][2]+"");
}

console.log("letra G\n");
for (interacion2=0;interacion2<5;interacion2++){
    console.log(bingo [interacion2][3]+"");
}

console.log("letra O\n");
for (interacion2=0;interacion2<5;interacion2++){
    console.log(bingo [interacion2][4]+"");
}

console.log("primera X\n");

for(interacion1=0;interacion1<3;interacion1++){
    for(interacion2=0;interacion2<3;interacion2++){
      if(interacion1%2==0 && interacion2%2==0) {
        console.log(bingo[interacion1][interacion2]);
      } 
      else if(interacion1%2==1 && interacion2%2==1){
        console.log(bingo[interacion1][interacion2]);
      }
      else{
        console.log("");
      }
    }

}

console.log("segunda X\n");

for(interacion1=0;interacion1<3;interacion1++){
    for(interacion2=2;interacion2<5;interacion2++){
      if(interacion1%2==0 && interacion2%2==0) {
        console.log(bingo[interacion1][interacion2]);
      } 
      else if(interacion1%2==1 && interacion2%2==1){
        console.log(bingo[interacion1][interacion2]);
      }
      else{
        console.log("");
      }
    }

}
console.log("tercera X\n");

for(interacion1=2;interacion1<5;interacion1++){
    for(interacion2=1;interacion2<4;interacion2++){
      if(interacion1%2==0 && interacion2%2==1) {
        console.log(bingo[interacion1][interacion2]);
      } 
      else if(interacion1%2==1 && interacion2%2==0){
        console.log(bingo[interacion1][interacion2]);
      }
      else{
        console.log("");
      }
    }

}

console.log("X grande\n");

for(interacion1=0;interacion1<5;interacion1++){
  for(interacion2=0;interacion2<5;interacion2++){
    if(interacion1==interacion2) {
      console.log(bingo[interacion1][interacion2]);
    } 
    else if(interacion1+interacion2==4){
      console.log(bingo[interacion1][interacion2]);
    }
    else{
      console.log("");
    }
  }

}



