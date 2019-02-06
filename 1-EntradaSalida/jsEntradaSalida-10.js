/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
 var importar;
 var Descuento;
importar=importe.value;
importar=parseInt(importar);
Descuento= importar-25/100;
resultado.value=Descuento;
	
}
