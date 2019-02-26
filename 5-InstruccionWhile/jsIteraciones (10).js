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
	
var respuesta=true

while(respuesta==true)
	{
	contador=contador+1;
	num=prompt("ingresar numero " + contador);
	num=parseFloat(num);
	while(isNaN(num))
		{
		num=prompt("ingresar numero " + contador);
		num=parseFloat(num);	
		}
	if (num>0)
		{
		sumapositivos=sumapositivos+num;
		promediopositivos=promediopositivos+1;
		}
	else 
	{
		if (num<0) 
			{
			sumanegativos=sumanegativos+num;
			promedionegativos=promedionegativos+1;
			}
		else
			{
			cantidadceros=cantidadceros+1;
			}
	}
	 
	  if (num % 2 == 0)

		{
		cantidadnumerospares=cantidadnumerospares+1;
		}
	respuesta=confirm("queres ingresar otro numero?");
	}
promedion=sumanegativos/promedionegativos;
promediop=sumapositivos/promediopositivos;
diferencia=sumapositivos+sumanegativos
document.open();
document.write("<br>La Suma de los positivos es de " + sumapositivos+"</br>");
document.write("<br>La Suma de los negativos es de " + sumanegativos+ "</br>");
document.write("<br>La cantidad de positivos es de " + promediopositivos+ " </br>");
document.write("<br>La cantidad de negativos es de " + promedionegativos+ " </br>");
document.write("<br>La cantidad de ceros es de " + cantidadceros+ " </br>");
document.write("<br>La cantidad de numeros pares es de " + cantidadnumerospares+ " </br>");
document.write("<br>El promedio de positivos es de " + promediop+ " </br>");
document.write("<br>El promedio de negativos es de " + promedion +"</br>");
document.write("<br>La diferencia entre positivos y negativos es de " + diferencia+ " </br>");
document.close();


}
