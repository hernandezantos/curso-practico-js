//codigo del cuadrado------------------------------------------------------------
console.group("Cuadrado");

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado (lado){
    return lado * lado;
}

console.groupEnd();

//código del triangulo----------------------------------------------------------
console.group("Triangulo");

function perimetroTiangulo(lado1, lado2, base){
    var a = Number(lado1); //los argumentos recibidos los convierto a number ya que los concatenaba en lugar de sumar
    var b = Number(lado2);
    var c = Number(base);
    var suma = a + b + c;
    return suma;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

//código del circulo-----------------------------------------------------------
console.group("Circulo");

function diametroCirculo(radio){
    return radio * 2;
}

const pi = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return pi * diametro;
}

function areaCirculo(radio){
    return pi * (radio * radio);
}

console.groupEnd();

//aqui empieza javascript

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
    
}

//aqui empieza el ejercicio
function comprobar(lado1, lado2, base){ //comprobamos que si sea isosceles
    if(lado1===lado2 && lado1!=base){
        return true;
    }else{
        return false;
    }
}

function alturaIsosceles(lado1, base){  //calculamos la altura
    const mediaBaseCuadrada = (base / 2) * (base / 2);
    const ladoCuadrado = lado1 * lado1;
    return Math.sqrt(ladoCuadrado - mediaBaseCuadrada);
    

}

function alturaEjercicio(){  //sacamos la altura
    const input1 = document.getElementById("inputLado1");
    const value1 = input1.value;
    const input2 = document.getElementById("inputLado2");
    const value2 = input2.value;
    const inputBase = document.getElementById("inputBase");
    const valueBase = inputBase.value;

    const avanzar = comprobar(value1, value2, valueBase);
    
    if(avanzar === true){
        const altura= alturaIsosceles(value1, valueBase);
        alert("La altura es: " + altura);
    }else{
        alert("No es un triangulo isosceles");
    }
}

function perimetroEjercico(){
    const input1 = document.getElementById("inputLado1");
    const value1 = input1.value;
    const input2 = document.getElementById("inputLado2");
    const value2 = input2.value;
    const inputBase = document.getElementById("inputBase");
    const valueBase = inputBase.value;

    const perimetro = perimetroTiangulo(value1, value2, valueBase);
    alert(perimetro);
}

function areaEjercico(){
    const input1 = document.getElementById("inputLado1");
    const value1 = input1.value;
    const input2 = document.getElementById("inputLado2");
    const value2 = input2.value;
    const inputBase = document.getElementById("inputBase");
    const valueBase = inputBase.value;

    const avanzar = comprobar(value1, value2, valueBase);
    
    if(avanzar === true){
        const altura= alturaIsosceles(value1, valueBase);
        const area = areaTriangulo(valueBase, altura);
        alert(area);
    }else{
        alert("No es un triangulo isosceles,, no podemos calcular la altura");
    }
}
