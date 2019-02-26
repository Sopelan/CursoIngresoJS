function mostrar()
{
var contador=0
var num;
var sumapositivos=0;
var sumanegativos=0;
var cantidadceros=0;
var cantidadnumerospares=0;
var promediopositivos=0;
var promedionegativos=0;
var diferencia;
var promediop;
var promedion;
	//declarar contadores y variables 
	
var respuesta="si";

while(respuesta=="si")
	{
	contador=contador+1;
	num=prompt("ingresar numero " + contador);
	num=parseFloat(num);
	if (num>0)
		{
		sumapositivos=sumapositivos+num;
		promediopositivos=promediopositivos+1;
		}
	else if (num<0) 
		{
		sumanegativos=sumanegativos+num;
		promedionegativos=promedionegativos+1;
		}
	else
		{
		cantidadceros=cantidadceros+1;
		}
	respuesta=prompt("queres ingresar otro numero?");
	}
promedion=sumanegativos/promedionegativos;
promediop=sumapositivos/promediopositivos;
diferencia=sumapositivos+sumanegativos
alert("La Suma de los positivos es de " + sumapositivos);
alert("La Suma de los negativos es de " + sumanegativos);
alert("La cantidad de positivos es de " + promediopositivos);
alert("La cantidad de negativos es de " + promedionegativos);
alert("La cantidad de ceros es de " + cantidadceros);
alert("El promedio de positivos es de " + promediop);
alert("El promedio de negativos es de " + promedion);
alert("La diferencia entre positivos y negativos es de " + diferencia);


}