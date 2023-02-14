'use strict'

// 1. Calcular la distancia de un vehiculo que se mueve de un lugar a otro a velocidad constante.
function calculateDistance() {
    const velocity = document.getElementById("velocity1");
    const time = document.getElementById("time1");
    const textError = document.getElementById("textError1");
    const presult = document.getElementById("result1");

    if(validate(velocity) && validate(time)){
        let result = velocity.value * time.value;
        presult.innerHTML = `${result}km`;
        textError.classList.add("hide");
    } else {
        textError.classList.remove("hide");
    }

}

// 2. Calcular el tiempo transcurrido de un outo que se desplaza de un lugar a otro a velocidad constante
function calculateTime() {
    const velocity = document.getElementById("velocity2");
    const distance = document.getElementById("distance2");
    const textError = document.getElementById("textError2");
    const presult = document.getElementById("result2");

    if(validate(velocity) && validate(distance)){
        let result = distance.value / velocity.value;
        presult.innerHTML = `${result}h`;
        textError.classList.add("hide");
    } else {
        textError.classList.remove("hide");
    }
}

// 3. Algoritmo para calcular la velocidad a la recorria un carro que mantenía movimiento constante a cierta distancia a través del tiempo.
function calculateVelocity() {
    const time = document.getElementById("time3");
    const distance = document.getElementById("distance3");
    const textError = document.getElementById("textError3");
    const presult = document.getElementById("result3");

    if(validate(velocity) && validate(distance)){
        let result = distance.value / time.value;
        presult.innerHTML = `${result}km/h`;
        textError.classList.add("hide");
    } else {
        textError.classList.remove("hide");
    }
}

// 4. Algoritmo visualizar la cantidad de dígitos que se le indique de la sucessión de fibonacci.
function showFibonacci() {
    const cant = document.getElementById("fibonacciCant");
    const textError = document.getElementById("textError3");
    const presult = document.getElementById("result3");

    if(validate(cant.value)){
        presult.innerHTML = fibonacci(cant.value);
        textError.classList.add("hide");
    } else {
        textError.classList.remove("hide");
    }

}

        // fibonacci function
function fibonacci(cant) {
   return cant <= 0 ? [] : Array.from({ length: cant }, (_, i) => (i < 2) ? i : (i - 1) + (i - 2));
}
console.log(fibonacci(10));
// Validando campos
function validate(input) {
    let val = true;
    if(isNaN(input.value) || input.value == 0 || input.value == "") {
        val = false;
    }
    return val;
}