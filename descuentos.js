// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    //const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return (precio * porcentajePrecioConDescuento) / 100
}


const coupons = [
    "Junio20",
    "primaRegalo",
    "verano22",
];

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    // const inputDiscount = document.getElementById("InputDiscount");
    // const discountValue = inputDiscount.value;

    const InputCoupon = document.getElementById("InputCoupon");
    const couponValue = InputCoupon.value;

    let discount;

    switch(couponValue){

        case coupons[0]:
            descuento = 55;
            break;

        case coupons[1]:
            descuento = 30;
            break;

        case coupons[2]:
            descuento = 22;
            break;

        default:
            descuento = 0;
            break;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("Resultp");

    resultP.innerText = "El precio con descuento son: $" + precioConDescuento


}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });

