/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var grados;
	var Fahrenheit;
	Fahrenheit=Temperatura.value;
    Fahrenheit=parseFloat(Fahrenheit);
	grados=(Fahrenheit*1.8)+32;
	alert(Fahrenheit+ " fahrenheit son " + grados + " centigrados");
}

function CentigradosFahrenheit () 
{
	var grados;
	var fahrenheit;
	grados=Temperatura.value;
    grados=parseFloat(grados);
	fahrenheit=(grados-32)/1.8;
	alert(grados+ " centigrados son " + fahrenheit + " fahrenheit")
}
