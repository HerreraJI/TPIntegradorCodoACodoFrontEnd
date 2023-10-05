const dia = document.querySelector("#dia");
const parcial = document.querySelector("#parcial");
const completo = document.querySelector("#completo");
const totalUnitario = document.querySelector("#totalUnitario");
const cantidad = document.getElementById("valor");
const total = document.querySelector("#total");
const cambiarPlan =document.querySelector("#cambiarPlan");
const form =document.querySelector("#form");
const cancelar = document.querySelector("#cancelar");


completo.addEventListener("click",()=>{
    cantidad.value=0;
    total.innerHTML = 0;
    totalUnitario.innerHTML = 3000;
})

parcial.addEventListener("click",()=>{
    cantidad.value=0;
    total.innerHTML = 0;
    totalUnitario.innerHTML = 2000
})

dia.addEventListener("click",()=>{
    cantidad.value=0;
    total.innerHTML = 0;
    totalUnitario.innerHTML = 1500;
})



cantidad.addEventListener("input", ()=>{ 
    let  num = cantidad.value;
    let unitario = parseInt(totalUnitario.innerHTML);
    let resultado = num * unitario;

    if(num === ""){
        total.innerHTML =  0;
    }else{
        // num = parseInt(num);
        total.innerHTML =  resultado ;       
    }

})

cambiarPlan.addEventListener("click", ()=>{
    cantidad.value=0;
    total.innerHTML = 0;
    totalUnitario.innerHTML= 0;
})



cancelar.addEventListener("click",()=>{
    cantidad.innerHTML=0;
    total.innerHTML = 0;
    totalUnitario.innerHTML= 0;
})

