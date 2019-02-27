function mostrar()
{
var letra;
var numero;
var cantidadnumpares=0;
var cantidadnuminpares=0;
var cantidadceros=0;
var sumapositivos=0
var promedionumero=0;
var sumanumeronegativos=0;
var numeromaximo;
var numerominimo;
var respuesta=true;
var contador=0;
var letraminimo;
var letramaximo;

while(respuesta==true)
	{
	contador=contador+1;
	letra=prompt("pedir una letra");
	while(isNaN(letra)==false && letra.length>1)
	numero=prompt("pedir un numero entre -100 y 100")
	numero=parseFloat(numero);
	while(numero<-100 || numero>100 ||isNaN(numero)==true)
		{
		numero=prompt("pedir un numero entre -100 y 100" );
		numero=parseFloat(numero);
		}
	if(numero % 2 == 0)
		{
		cantidadnumpares=cantidadnumpares+1;
		}	
	else 
		{
		if(numero==0)
			{
			cantidadceros=cantidadceros+1;
			}
		else
			{
			cantidadnuminpares=cantidadnuminpares+1;	
			}
		}
	if(numero>0)
		{
		sumapositivos=numero+sumapositivos;
		}	
	else
		{
		sumanumeronegativos=numero+sumanumeronegativos;
		}
	if(contador==1)
		{
		numeromaximo=numero;
		numerominimo=numero;
		letramaximo=letra;
		letraminimo=letra;		}
	else
		{
		if (numeromaximo<numero) 
			{
			numeromaximo=numero;
			letramaximo=letra;
			}
		else 
			{
				if (numerominimo>numero)
					{
					numerominimo=numero;
					letraminimo=letra;
					}
			}
		}
	
	respuesta=confirm("queres otro numero?");
	}
promedionumero=sumapositivos/contador;
document.open();
document.write("<br>La cantidad de números pares es  " + cantidadnumpares +"</br>");
document.write("<br>La cantidad de números impares es  "+ cantidadnuminpares + "</br>");
document.write("<br>La cantidad de ceros es  " + cantidadceros + "</br>");
document.write("<br>El promedio de todos los números positivos ingresados es  " + promedionumero + "</br>");
document.write("<br>La suma de todos los números negativos es  " + sumanumeronegativos +"</br>");
document.write("<br>El número y la letra del minimo es " + numerominimo + "  " + letraminimo+ "</br>");
document.write("<br>El número y la letra del maximo es " + numeromaximo + "  " + letramaximo+ "</br>");
document.close();
}
