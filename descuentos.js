function calcularPrecionConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}

function onClickPriceDiscount(){
    const inputPrice = document.getElementById ("inputPrice");
    const priceValue = inputPrice.value;
    const inputDescount = document.getElementById ("inputDiscount");
    const descountValue = inputDescount.value;
    
    const precioDescuento = calcularPrecionConDescuento(priceValue, descountValue);
    
    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "El precion con descuento es: $" + precioDescuento;
}

/* console.log({
precioOriginal,
descuento,
porcentajePrecioConDescuento,
precioConDescuento
}); */