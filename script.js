const dia = document.querySelector("#dia");
const parcial = document.querySelector("#parcial");
const completo = document.querySelector("#completo");
const totalUnitario = document.querySelector("#totalUnitario");
const cantidad = document.getElementById("valor");
const total = document.querySelector("#total");
const cambiarPlan = document.querySelector("#cambiarPlan");
const form = document.querySelector("#form");
const cancelar = document.querySelector("#cancelar");
const select = document.getElementById("select");
const pagarCredito = document.querySelector("#pagarCredito");
const pagarEfectivo = document.getElementById("pagarEfectivo");
const pagarDebito = document.getElementById("pagarDebito");
const totalFinal = document.getElementById("totalFinal");
const creditoCuotas = document.getElementById("creditoCuotas");


completo.addEventListener("click", () => {
    cantidad.value = 0;
    total.innerHTML = 0;
    totalUnitario.innerHTML = 3000;
})

parcial.addEventListener("click", () => {
    cantidad.value = 0;
    total.innerHTML = 0;
    totalUnitario.innerHTML = 2000
})

dia.addEventListener("click", () => {
    cantidad.value = 0;
    total.innerHTML = 0;
    totalUnitario.innerHTML = 1500;
})



cantidad.addEventListener("input", () => {
    let num = cantidad.value;
    let unitario = parseInt(totalUnitario.innerHTML);
    let resultado = num * unitario;
    creditoCuotas.value = "";


    if (num === "") {
        total.innerHTML = 0;
        totalFinal.innerHTML = 0;
    } else {
        total.innerHTML = resultado;

        totalFinal.innerHTML = resultado;

    }

})

cambiarPlan.addEventListener("click", () => {
    cantidad.value = 0;
    total.innerHTML = 0;
    totalUnitario.innerHTML = 0;
    totalFinal.innerHTML = 0;
    select.value = "";
    pagarCredito.classList.add("esconder");
    pagarDebito.classList.add("esconder");
    pagarEfectivo.classList.add("esconder");


})


cancelar.addEventListener("click", () => {
    cantidad.innerHTML = 0;
    total.innerHTML = 0;
    totalUnitario.innerHTML = 0;
    pagarCredito.classList.add("esconder");
    pagarDebito.classList.add("esconder");
    pagarEfectivo.classList.add("esconder");
    totalFinal.innerHTML = 0;

})


select.addEventListener("change", function () {
    let valor = +select.value;

    switch (valor) {
        case 1:
            pagarCredito.classList.remove("esconder");
            pagarDebito.classList.add("esconder");
            pagarEfectivo.classList.add("esconder");
            tarifaCredito();
            break;
        case 2:
            pagarCredito.classList.add("esconder");
            pagarDebito.classList.remove("esconder");
            pagarEfectivo.classList.add("esconder");
            descuentoDebito();
            break;
        case 3:
            pagarCredito.classList.add("esconder");
            pagarDebito.classList.add("esconder");
            pagarEfectivo.classList.remove("esconder");
            descuentoEfectivo();
            break;
    }

})



function descuentoEfectivo() {
    let final = +total.innerHTML - (+total.innerHTML * 0.15);
    creditoCuotas.value = 1;
    totalFinal.innerHTML = final;
}

function descuentoDebito() {

    let final = +total.innerHTML - (+total.innerHTML * 0.10);
    totalFinal.innerHTML = final;
    creditoCuotas.value = 1;
}

function tarifaCredito() {
    let final;
    let valor = +creditoCuotas.value;

    switch (valor) {
        case 1:
            final = +total.innerHTML + (+total.innerHTML * 0.10);
            totalFinal.innerHTML = final;
            break;
        case 3:
            final = +total.innerHTML + (+total.innerHTML * 0.15);
            totalFinal.innerHTML = final;
        case 6:
            final = +total.innerHTML + (+total.innerHTML * 0.20);
            totalFinal.innerHTML = final;

    }

}


creditoCuotas.addEventListener("change", function () {
    let final;
    let valor = +creditoCuotas.value;

    switch (valor) {
        case 1:
            final = +total.innerHTML + (+total.innerHTML * 0.10);
            totalFinal.innerHTML = final;
            break;
        case 3:
            final = +total.innerHTML + (+total.innerHTML * 0.15);
            totalFinal.innerHTML = final;
            break;
        case 6:
            final = +total.innerHTML + (+total.innerHTML * 0.20);
            totalFinal.innerHTML = final;
            break;

    }
})










