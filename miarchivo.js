
class Servicio {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}
const comboNovia = new Servicio("Combo Novia", 10000);
const comboQuince = new Servicio ("Combo quince años", 8000);
const comboGraduacion = new Servicio ("Combo Graduacion", 7000);

const arrayServicios = [comboNovia, comboQuince, comboGraduacion];

let cliente = prompt("Ingrese su nombre")
let evento = prompt("Ingrese el evento por el cual consulta")
alert (" Bienvenida/o " + cliente + " felicidades por tu " + evento);


function menu(){
    let opcion =parseInt(prompt("Seleccione el servicio a cotizar 1)Combo Novia, 2)Combo 15 años, 3)Combo Graduacion, 4)Gift Card, 5)Salir"))
    return opcion;
}
function altaGiftCard() {
    let nombreGift = prompt("Ingrese el nombre del homenajeado")
    let mail = prompt("Ingrese el mail al que enviaremos la Gift Card")
    let motivo = prompt("Ingrese algun mensaje que quisiera agregar como dedicatoria")
    let monto = parceint(prompt("ingrese el monto de la Gift Card"))

}
let eleccionServ = menu();

switch(eleccionServ){
    case 1 :
        alert("El valor del servicio es de $" + comboNovia.precio)
        break;
    case 2 :
        alert("El valor del servicio es de $" + comboQuince.precio)
        break;
    case 3:
        alert("El valor del servicio es de $"+ comboGraduacion.precio)
        break;
    case 4 :
        alert("A continuacion complete los datos para emitir la Gift Card")
        let altaGift = altaGiftCard();
        alert("Enviaremos un mail a "+nombreGift +".¡Muchas gracias por elegirnos!")
        break;
        
}



const arrayServicioConDescuento = arrayServicios.map( (Servicio) => {
    return {
        nombre: Servicio.nombre,
        precio: Servicio.precio - 2000,

    }
});

console.log("Precios con descuento")
console.log(arrayServicioConDescuento);