function mostrar()
{
var precio;
 var descuento;
 var preciofinal;
 precio=prompt("precio?", " ");
 descuento=prompt("descuento?", " ");
 precio=parseFloat(precio);
 descuento=parseFloat(descuento);
 preciofinal=precio-(precio*descuento/precio);
 elPrecioFinal.value=preciofinal;




}

