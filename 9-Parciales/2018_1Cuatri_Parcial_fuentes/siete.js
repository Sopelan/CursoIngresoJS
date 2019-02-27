function mostrar()
{
var sexo;
var numero;
var contador=0;
var suma=0;
var minimo;
var sexo2;
var cantidadvaronesaprobados=0;
while(contador<5)
	{
	contador=contador+1;
	sexo=prompt("sos de sexo f o m?");	
	while(isNaN(sexo)==false || (sexo!="f" && sexo!="m"))
		{
		sexo=prompt("error , sos de sexo f o m?");
		}
	numero=prompt("eligir un numero entre 0 y 10");
	numero=parseInt(numero);	
	while(isNaN(numero)==true || numero<0 || numero>10)
		{
		numero=prompt("error, eligir un numero entre 0 y 10");
		numero=parseInt(numero);
		}
	if (sexo=="m" && numero>=6)
		{
		cantidadvaronesaprobados=cantidadvaronesaprobados+1;
		}	
	if (contador==1)
		{
		minimo=numero
		if(sexo=="f")
			{
			sexo="femenino";
			}
		else
			{
			sexo="masculino";
			}	
		sexo2=sexo
		}
	else
		{
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
		}
		
	suma=numero+suma
	}	
alert("El promedio de las notas totales es " + suma/contador)
alert("La nota mas baja es " + minimo +" y el sexo de esa persona es " + sexo2)
alert("La cantidad de varones que su nota haya sido mayor o igual a 6 son: "+ cantidadvaronesaprobados)
}
