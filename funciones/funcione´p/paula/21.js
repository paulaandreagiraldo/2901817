function factorial5(){
    let numero =5;
    let factorial=1;
    let cont;

    for (let cont =1; cont <=numero;cont ++){
        factorial=factorial * cont;
       console.log(factorial);
    }
    return factorial;
}