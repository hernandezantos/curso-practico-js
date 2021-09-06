//codigo del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El aréa del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

//código del triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
    "Los lados del traingulo miden: " 
    + ladoTriangulo1 
    + "cm, "
    + ladoTriangulo2 
    + "cm y "
    + baseTriangulo 
    + "cm"
);

const alturaTriangulo = 5.5;
console.log("La altura del triangulo mide: " + alturaTriangulo + "cm");

const perimetroTiangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTiangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//código del triangulo
console.group("Círculo");
//radio
const radioCirculo = 4
console.log("El radio del circulo es: " + radioCirculo + "cm");
//diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm");
//pi
const pi = Math.PI;
console.log("Pi es: " + pi);
//circunferencia
const perimetroCirculo = pi * diametroCirculo;
console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

const areaCirculo = pi * (radioCirculo * radioCirculo);
console.log("El area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();