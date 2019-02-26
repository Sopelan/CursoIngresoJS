function mostrar()
{

var contador=0;
	// declarar variables
var num;
var respuesta='si';
var maximo1=0;
var minimo1=999999999999999999;
while(respuesta=='si')
	{
	contador=contador+1;
	num=prompt("ingresar numero " + contador);
	num=parseFloat(num);
	if(maximo1<num)
		{
		maximo1=num;	
		}
	if (minimo1>num)
		{
		minimo1=num;
		}
	respuesta=prompt("quieres ingresar otro numero?. ");
	}
maximo.value=maximo1
minimo.value=minimo1




}//FIN DE LA FUNCIÓN