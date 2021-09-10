//helpers ----------------------------
function esPar(numerito){  //metodo para saber si un numero es par
    return (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista){  //calcular promedio
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / (lista.length);
    return promedioLista;
}

function medianaSalarios(lista){  //aqui obtemos la mediana de los salarios
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const personitaMitad1 = lista[mitad -1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;

    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

//helpers ----------------------------


const salariosCol = colombia.map( //obtenemos los salarios del 
    function (personita) {        //array
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){  //se ordenan de mayor a menor
    return salaryA - salaryB
    });

const medianaGeneralCol = medianaSalarios(salariosColSorted);//llamamos al metodo medianaSalarios y 
//le mandamos el array salariosSorted

//Mediana del top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const splaiceCount = salariosColSorted.length;

const salariosColTop10 = salariosColSorted.slice(
    spliceStart, 
    splaiceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);


console.log({
    medianaGeneralCol, 
    medianaTop10Col, 
});