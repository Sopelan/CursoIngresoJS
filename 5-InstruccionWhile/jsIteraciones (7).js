function mostrar()
{
var contador=0;
var acumulador=0;
var num1=prompt("insertar el numero 1."," ");
var num2=prompt("insertar el numero 2."," ");
var num3=prompt("insertar el numero 3."," ");
var num4=prompt("insertar el numero 4."," ");
var num5=prompt("insertar el numero 5."," ");
var promiedo=prompt("insertar el promedio?");
var acumuladores=prompt("insertar la suma acumulada?"," ");
promiedo=parseFloat(promiedo);
acumuladores=parseFloat(acumuladores);
num2=parseFloat(num2);
num1=parseFloat(num1);
num3=parseFloat(num3);
num4=parseFloat(num4);
num5=parseFloat(num5);
acumulador=num1+num3+num2+num4+num5;

while(acumulador<acumuladores)
	{
	acumulador=acumulador+acumulador;
	alert(acumulador);
	}
suma.value=acumulador;
promedio.value=acumulador/promiedo;
}

//FIN DE LA FUNCIÓN