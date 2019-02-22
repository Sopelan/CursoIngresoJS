function mostrar()
{

var contador=0;
var acumulador=0;
var num1=prompt("insertar el numero 1."," ");
var num2=prompt("insertar el numero 2."," ");
var num3=prompt("insertar el numero 3."," ");
var num4=prompt("insertar el numero 4."," ");
var num5=prompt("insertar el numero 5."," ");
num1=parseFloat(num1);
num2=parseFloat(num2);
num3=parseFloat(num3);
num4=parseFloat(num4);
num5=parseFloat(num5);
acumulador=num1+num3+num2+num4+num5;
while(acumulador<1000000 && acumulador!=0)
	{
	acumulador=acumulador+acumulador;
	acumulador=parseFloat(acumulador);
	alert(acumulador);
	}
suma.value=acumulador;
promedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN