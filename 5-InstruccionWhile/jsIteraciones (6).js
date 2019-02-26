function mostrar()
{
var num1
var contador=0;
var acumulador=0;
while(contador<5)
	{
 	contador++;
 	num1=prompt("insertar numero " + contador);
	num1=parseFloat(num1);
 	while(isNaN(num1))
 		{
 		num1=prompt("insertar numero " + contador);
		num1=parseFloat(num1);
 		}
 	acumulador=num1+acumulador;
	}
suma.value=acumulador;
promedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN