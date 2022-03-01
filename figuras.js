//Cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + " cm2");
console.groupEnd();

//Triangualo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("Los lados del triangulo miden: " + ladoTriangulo1 + " cm," + ladoTriangulo2 + " cm," + baseTriangulo + " cm.");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del cuadrado es; " + perimetroTriangulo + " cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + " cm2");
console.groupEnd(); 

//Circulo
console.group("Círculos");

const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + " cm");

const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + " cm");

const PI = Math.PI;
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del Circulo es: " + perimetroCirculo + " cm");

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es: " + areaCirculo + " cm2");
console.groupEnd();