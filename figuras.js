// Código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
} 

//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
} 

//console.log("El área del cuadrado es: " + areaCuadrado+ "cm^2");

console.groupEnd();

// Código del triángulo
console.group("Triángulos");


function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();



// Código del Circulo
console.group("Círculos");


// Diámetro
function diametroCirculo(radio){
    return radio * 2;
}

// PI
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


// Área
function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();


// Aqui interactuamos con el HTML

// Cuadrados
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}


// Triángulos


function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("InputTrianguloLado1");
    const valueLado1 = parseInt(inputLado1.value);
    const inputLado2 = document.getElementById("InputTrianguloLado2");
    const valueLado2 = parseInt(inputLado2.value);
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = parseInt(inputBase.value);
   

    const perimetroT = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert(`El perimetro del triángulo es: ${perimetroT}`);

}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = inputBase.value;
    const inputAltura = document.getElementById("InputTrianguloAltura");
    const valueAltura = inputAltura.value;

    const areaT = areaTriangulo(valueBase, valueAltura);
    alert(`El área del triángulo es: ${areaT}`);

}



// Área
function areaCirculo(radio){
    return (radio * radio) * PI;
}

function calcularDiametroCirculo(){
    const inputRadio = document.getElementById("InputCirculoRadio");
    const radioValue = inputRadio.value;
    const diametroC = diametroCirculo(radioValue);
    alert(`El diametro del círculo es: ${diametroC}`) 
}

function calcularPerimetroCirculo(){
    const inputR= document.getElementById("InputCirculoRadio");
    const radioValue = inputR.value;
    const diametroC = diametroCirculo(radioValue);
    const perimetroC = diametroC * PI;
    alert(`El perimetro del círculo es: ${perimetroC}`) 
}

function calcularAreaCirculo(){
    const RInput= document.getElementById("InputCirculoRadio");
    const RValue = RInput.value;
    const areaC = (RValue * RValue) * PI;
    alert(`El área del círculo es: ${areaC}`) 
}

 // Triangulo isoceles
function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}

function calcularIsoceles(){
    const l1= document.getElementById("InputTrianguloLado1");
    const valueL1 = parseInt(l1.value);
    const l2= document.getElementById("InputTrianguloLado2");
    const valueL2 = parseInt(l2.value);
    const l3= document.getElementById("InputTrianguloBase");
    const valueL3 = parseInt(l3.value);

    const alturaIsoceles = alturaTrianguloIsosceles(valueL1, valueL2, valueL3);
    if (alturaIsoceles){
        alert(`La altura del triángulo isoceles es: ${alturaIsoceles}`);
    }
    else {
        alert('No es un Isoceles');
    }
    
    
}