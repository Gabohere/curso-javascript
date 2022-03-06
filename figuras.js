//Cuadrado

console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado
}

console.groupEnd();

//Triangualo

console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
    return Number(lado1) + Number(lado2) + Number(base);
}

function calcularAlturaTriangulo(lado1, lado2, base){
    if(lado1 === lado2){
        return Math.sqrt((lado1 * lado1) - ((base / 2) * (base / 2)))
    } else{
        return (lado1 * lado2) / base
    }
}

function areaTriangulo(base, calcularAlturaTriangulo) {
    return (base * calcularAlturaTriangulo) / 2;
}

console.groupEnd(); 

//Circulo

console.group("Círculos");

function diametroCirculo(radio) {
    return radio * 2;
}

const PI = Math.PI;
function perimetroCiruclo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

//HTML
//Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perimetro del cuadrado es:" + perimetro);
}

function calcularAreaCuadrado () {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El area del cuadrado es:" + area);
}

//Triangulo
function calcularPerimetroTriangulo(lado1, lado2, base) {
    const input1 = document.getElementById("inputTrianguloLado1");    
    const value1 = Number(input1.value);
    const input2 = document.getElementById("inputTrianguloLado2");
    const value2 = Number(input2.value);
    const input3 = document.getElementById("inputTrianguloBase");
    const value3 = Number(input3.value);
    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert("El perimetro del triangulo es: " + perimetro);
}

function calcularAreaTriangulo () {
    const input1 = document.getElementById("inputTrianguloLado1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("inputTrianguloLado2");
    const value2 = Number(input2.value);
    const input3 = document.getElementById("inputTrianguloBase");
    const value3 = Number(input3.value);

    const altura = calcularAlturaTriangulo(value1,value2,value3)
    const area = areaTriangulo(altura, value3);

    alert("El area del triangulo es: " + area + " cm2");
}

//Circulo
function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = Number(input.value);

    const perimetro = perimetroCiruclo(value);
    alert("El perimetro del circulo es: " + perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = Number(input.value);

    const area = areaCirculo(value);
    alert("El area del circulo es: " + area);
}

function calcularDiametro() {
    const input = document.getElementById("inputCirculo");
    const value = Number(input.value);

    const diametro = diametroCirculo(value);
    alert("El diametro del circulo es: " + diametro);
}