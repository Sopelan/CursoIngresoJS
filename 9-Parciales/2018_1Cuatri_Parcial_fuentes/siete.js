function mostrar()
{
var sexo;
var numero;
var contador=0;
var suma=0;
var minimo=11;
var sexo2;
var cantidadvaronesaprobados=0;
while(contador<5)
	{
	contador=contador+1;
	sexo=prompt("sos de sexo f o m");	
	while(sexo!="f" && sexo!="m")
		{
		sexo=prompt("sos de sexo f o m");
		}
	numero=prompt("eligir un numero entre 0 y 10");
	numero=parseInt(numero);	
	while(numero<0 || numero>10)
		{
		numero=prompt("eligir un numero entre 0 y 10");
		numero=parseInt(numero);
		while(isNaN(numero))
			{ 
			numero=prompt("eligir un numero entre 0 y 10");
			numero=parseInt(numero);
			}
		}
	if (minimo>numero) 
		{
		minimo=numero;
		if(sexo=="f")
			{
			sexo="femenino";
			}
		else
			{
			sexo="masculino";
			}
		sexo2=sexo;
		}
	if (sexo=="m")
		{
		if (numero>=6) 
			{
			cantidadvaronesaprobados=cantidadvaronesaprobados+1;
			}
		}		
	suma=numero+suma
	}	
alert("El promedio de las notas totales es " + suma/contador)
alert("La nota mas baja es " + minimo +" y el sexo de esa persona es " + sexo2)
alert("La cantidad de varones que su nota haya sido mayor o igual a 6 son: "+ cantidadvaronesaprobados)
}
