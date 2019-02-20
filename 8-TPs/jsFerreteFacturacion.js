/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;
    var precio2;
    var precio3;
    var en1
    var en2
    var en3
     precio1=precioUno.value;
     precio2=precioDos.value;
     precio3=precioTres.value;
     en3=parseInt(precio3);
     en1=parseInt(precio1);
     en2=parseInt(precio2);
var sumar
sumar=en1 + en2 + en3;
alert(sumar);
}
function Promedio () 
{
		var precio1;
    var precio2;
    var precio3;
    var en1
    var en2
    var en3
     precio1=precioUno.value;
     precio2=precioDos.value;
     precio3=precioTres.value;
     en3=parseInt(precio3);
     en1=parseInt(precio1);
     en2=parseInt(precio2);
var promedio
promedio=(en1 + en2 + en3)/3;
alert(promedio);

}
function PrecioFinal () 
{
	var precio1;
    var precio2;
    var precio3;
    var en1;
    var en2;
    var en3;
     precio1=precioUno.value;
     precio2=precioDos.value;
     precio3=precioTres.value;
     en3=parseInt(precio3);
     en1=parseInt(precio1);
     en2=parseInt(precio2);
var sumar;
var preciofinal;
sumar=en1 + en2 + en3;
preciofinal=(sumar*0.21)+sumar;
alert(preciofinal);

}
