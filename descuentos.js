const precioOriginal = 260;
const descuento = 18;
const coupons = [
    {
        name: "GABO",
        discount: 10,
    },
    {
        name: "GABY",
        discount: 30,
    },
    {
        name: "AMBOS",
        discount: 50,
    }
];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };

    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon) {
        alert("El cupón " + couponValue + " no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

        const priceResult = document.getElementById("priceResult");
        priceResult.innerText = "El precio con descuento de tus batatabits es: $ " + precioConDescuento;
    }
}

