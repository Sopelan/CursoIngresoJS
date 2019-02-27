function mostrar()
{
	var marca;
	var peso;
	var temperatura;
	var temperaturapares=0;
	var marcamaspesado;
	var cantidadproductos0grados=0;
	var sumapeso=0;
	var promediopeso;
	var pesomax;
	var pesomin;
	var pesomax2;
	var pesomin2;
	var contador=0;
	var respuesta=true
	while(respuesta==true)
	{
		contador=contador+1
		marca=prompt("cual es la marca del producto?");
		peso=prompt("cual es el peso del producto?");
		peso=parseFloat(peso);
		while(peso>100 || peso<1 || isNaN(peso))
		{
			alert("error");
			alert("ingrese un numero entre 1 y 100");
			peso=prompt("cual es el peso del producto?");
			peso=parseFloat(peso);
		}
		temperatura=prompt("cual es la temperatura?");
		temperatura=parseFloat(temperatura);
		while(temperatura>30 || temperatura<-30 || isNaN(temperatura))
		{
			alert("error");
			alert("ingrese una temperatura entre -30 y 30");
			temperatura=prompt("cual es la temperatura?");
			temperatura=parseFloat(temperatura);
		}
		if(temperatura % 2 == 0 && temperatura!=0)
		{
			temperaturapares=temperaturapares+1;
		}
		if (temperatura<0)
		{
			cantidadproductos0grados=cantidadproductos0grados+1;
		}
		sumapeso=peso+sumapeso;
		if (contador==1)
		{	
			pesomax=peso;
			pesomin=peso;
			marcamaspesado=marca
		}
		else
		{
			if (pesomax<peso) 
			{
				pesomax=peso;
				marcamaspesado=marca;
			}
			else
			{
				if (pesomin>peso) 
				{
					pesomin=peso;
				}
			}
		}
		respuesta=confirm("queres poner otro producto?")
	}
	promediopeso=sumapeso/contador
	document.open();
	document.write("<br>La cantidad de temperaturas pares es "+ temperaturapares +  "</br>");
	document.write("<br>La marca del producto más pesado es "+ marcamaspesado + "</br>");
	document.write("<br>La cantidad de productos que se conservan a menos de 0 grados es "+ cantidadproductos0grados + "</br>");
	document.write("<br>El promedio del peso de todos los productos es "+ promediopeso+ "</br>");
	document.write("<br>El peso máximo es "+ pesomax + "</br>");
	document.write("<br>El peso mínimo es "+ pesomin + "</br>");	
	document.close();

}
