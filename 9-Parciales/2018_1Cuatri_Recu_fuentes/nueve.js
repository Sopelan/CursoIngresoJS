function mostrar()
{
	var nombre;
	var peso;
	var temperatura;
	var temperaturapares=0;
	var nombrepesado;
	var pesado;
	var temperaturapesado;
	var menos0gradoscantidad=0;
	var suma=0;
	var promedioanimales;
	var pesomax;
	var pesomin;
	var contador=0;
	var respuesta=true
	while(respuesta==true)
	{
		contador=contador+1
		nombre=prompt("ingrese el nombre del animal");
		while(nombre.length<1)
		{
			alert("error");
			alert("tiene que contener alguna letra o numero");
			nombre=prompt("ingrese el nombre del animal");
		}
		peso=prompt("cuanto pesa el animal?");
		peso=parseFloat(peso);
		while(peso<1 || peso>1000 || isNaN(peso))
		{
			alert("error");
			if(peso<1 || peso>1000);
			{
				alert("recuerda que el animal pesa entre 1 y 1000");
			}
			peso=prompt("cuanto pesa el animal?");
			peso=parseFloat(peso);		
		}
		temperatura=prompt("cual es su temperatura?");
		temperatura=parseFloat(temperatura);
		while(temperatura<-30 || temperatura>30 || isNaN(temperatura))
		{
			alert("error");
			if(temperatura<-30 || temperatura>30);
			{
				alert("recuerda que la temperatura tiene entre -30 y 30");
			}
			temperatura=prompt("cual es su temperatura?");
			temperatura=parseFloat(temperatura);
		}
		if(temperatura % 2 == 0 && temperatura!=0)
		{
			temperaturapares=temperaturapares+1;
		}
		if (contador==1) 
		{
			nombrepesado=nombre;
			pesado=peso;
			temperaturapesado=temperatura;			
		}	
		else
		{ 
			if (pesado<peso)
			{
				nombrepesado=nombre;
				pesado=peso;
				temperaturapesado=temperatura;
			}
		}
		if(temperatura<=0)
		{
			menos0gradoscantidad=menos0gradoscantidad+1;
		}
		suma=suma+peso;
		if (temperatura<=0) 
		{
			if(contador==1)
			{
				pesomax=peso;
				pesomin=peso;
			}
			else
			{
				if (pesomax<peso) 
				{
					pesomax=peso;
				}
				if (pesomin>peso)
				{
					pesomin=peso;
				}
			}
		}
		respuesta=confirm("queres poner a otro animal?");

	}
	promedioanimales=suma/contador;
	document.open();
	document.write("<br>La cantidad de temperaturas pares es " + temperaturapares + " </br>");
	document.write("<br>El nombre del animal más pesado es " + nombrepesado + " y la temperatura es " + temperaturapesado + " </br>");
	document.write("<br>La cantidad de animales que viven a menos de 0 grados es " + menos0gradoscantidad + " </br>");
	document.write("<br>El promedio del peso de todos los animales es " + promedioanimales + " </br>");
	document.write("<br>El peso máximo de todos los animales cuyas temperaturas sean bajo cero es " + pesomax + " </br>");
	document.write("<br>El peso mínimo de todos los animales cuyas temperaturas sean bajo cero es " + pesomin + " </br>");
	document.close();
}
