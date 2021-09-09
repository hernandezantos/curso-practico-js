function moda(lista){

    const listaCount = {};

    lista.map(
        function (elemento){             //aqui guardamos en el objeto listacount
            if(listaCount[elemento]){    //los elementos del array y las veces que
            listaCount[elemento] += 1;   //se repiten
            }else{
            listaCount[elemento] = 1;
            }
        }
    );
    
    const listaArray = Object.entries(listaCount).sort(  //aqui convertimos el objeto en array
        function(elementoA, elementoB){                  //y lo ordenamos de mayor a menor de
            return elementoA[1] - elementoB[1];      //acuerdo a la cantidad que se repite
    }
    )

    return listaArray[listaArray.length - 1]; 
    //aqui seleccionamos el valor que mas se repite y lo retornamos
}


//ejercicio---------------------

/* const lista1 = [1, 2, 3, 4, 1, 1, 1, 2, 2, 3];

const lista1Count = {};

lista1.map(
    function (elemento){
        if(lista1Count[elemento]){
        lista1Count[elemento] += 1;
        }else{
        lista1Count[elemento] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    function(elementoA, elementoB){
        return elementoA[1] - elementoB[1];
}
)

const moda = lista1Array[lista1Array.length - 1]; */