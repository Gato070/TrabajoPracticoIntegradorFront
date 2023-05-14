

function calcPrecTotal(){
    //Traer desde html el valor ingresado
let cantEnt=document.getElementById("cantEntrada").value;

    //Traer seleccion del usuario al descuento
let porcDesc = document.getElementById("porcDescuento").value;

    // En descuento almaceno el total a descontar 
let descuento =(cantEnt*2000) * porcDesc/100;

    //Valor total entradas sin descuentos
let precioFinalSinDesc=(cantEnt*2000);

    //Valor final a pagar con descuentos
let precioFinal=(precioFinalSinDesc-descuento);

document.getElementById("costoEntrada").innerHTML=precioFinalSinDesc;

document.getElementById("entradaConDesc").innerHTML=precioFinal;
}

function compTickets(){
    
    alert(" ¡¡ MUCHAS GRACIAS POR TU COMPRA !!");
    
}

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})