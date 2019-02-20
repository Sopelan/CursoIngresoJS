/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var num1;
	var num2;
	var num3;
	num1=PrecioUno.value;
	num1=parseFloat(num1);
	num2=PrecioDos.value;
	num2=parseFloat(num2);
	num3=PrecioTres.value;
	num3=parseFloat(num3);
	var sumar;
    sumar=num1+num2+num3;
    alert("la suma es "+sumar);
}
function Promedio () 
{
	var num1;
	var num2;
	var num3;
	num1=PrecioUno.value;
	num1=parseFloat(num1);
	num2=PrecioDos.value;
	num2=parseFloat(num2);
	num3=PrecioTres.value;
	num3=parseFloat(num3);
	var sumar;
    sumar=(num1+num2+num3)/3;
    alert("el promedio es "+sumar);

}
function PrecioFinal () 
{
	var num1;
	var num2;
	var num3;
	num1=PrecioUno.value;
	num1=parseFloat(num1);
	num2=PrecioDos.value;
	num2=parseFloat(num2);
	num3=PrecioTres.value;
	num3=parseFloat(num3);
	var sumar;
    sumar=(num1+num2+num3);
    var preciofinal;
    preciofinal=(sumar)+(sumar*21/100);
    alert("el precio final es "+preciofinal);

}