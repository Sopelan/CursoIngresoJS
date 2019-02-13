function mostrar()
{
var precio;
var recargo;
var preciofinal;

precio=prompt("su precio?", " ");
precio=parseFloat(precio);
recargo= precio/10;
preciofinal=recargo+precio;
alert("el precio del producto en efectivo es: " + precio + " , con tarjeta tiene un recargo del 10% que seria " + recargo + " de recargo, costandole final " + preciofinal);

}