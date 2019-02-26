function mostrar()
{
var acumulador=0;
var contador=0;
var respuesta=true;
var num1;

while(respuesta==true )
	{	
	contador=contador+1;
	num1=prompt("insertar numero "+ contador);
	num1=parseFloat(num1);
 	while(isNaN(num1))
 		{
 		num1=prompt("insertar numero "+ contador);
		num1=parseFloat(num1);
 		}
 	acumulador=num1+acumulador;	
 	respuesta=confirm("queres otro numero?");
	}

suma.value=acumulador;
promedio.value=acumulador/contador;
}

//FIN DE LA FUNCIÓN