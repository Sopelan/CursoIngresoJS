function mostrar()
{
var acumulador=0;
var promiedo=0;
var respuesta="si";
var num1;
while(respuesta=="si")
	{	
	promiedo=promiedo+1;
	num1=prompt("insertar numero "+ promiedo);
	num1=parseFloat(num1);
 	acumulador=num1+acumulador;
 	respuesta=prompt("queres otro numero?");
	}

suma.value=acumulador;
promedio.value=acumulador/promiedo;
}

//FIN DE LA FUNCIÓN