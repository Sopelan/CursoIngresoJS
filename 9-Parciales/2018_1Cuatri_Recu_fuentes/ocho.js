function mostrar()
{
	var num;
	var letra;
	var numpares=0;
	var numinpares=0;
	var cantidadcero=0;
	var sumapositivo=0;
	var promediopositivo=0;
	var cantidad=0;
	var sumanegativos=0;
	var nummax;
	var letramax;
	var nummin;
	var letramin;
	var contador=0;
	var respuesta=true;
	while(respuesta==true)
	{
		contador=contador+1;
		num=prompt("ingresar un numero entre -100 y 100");
		num=parseFloat(num);
		while(num<-100 || num>100 || isNaN(num))
		{
			alert("error");
			num=prompt("ingresar un numero entre -100 y 100");
			num=parseFloat(num);
		}
		letra=prompt("ingresar una letra");
		while(isNaN(letra)==false || letra.length>1)
		{
			alert("error");
			letra=prompt("ingresar una letra");
		}
		if(num % 2 == 0 && num!=0)
		{
			numpares=numpares+1;
		}
		else
		{
			if(num==0)
			{
				cantidadcero=cantidadcero+1;
			}
			else
			{
				numinpares=numinpares+1;
			}
		}
		if(num>0)
		{
			cantidad=cantidad+1;
			sumapositivo=num+sumapositivo;
		}
		else
		{
			sumanegativos=num+sumanegativos;
		}
		if (contador==1) 
		{
			nummin=num;
			nummax=num;
			letramin=letra;
			letramax=letra;
		}
		else
		{
			if(nummin>num)
			{
				nummin=num;
				letramin=letra;
			}
			if(nummax<num)
			{
				nummax=num;
				letramin=letra;
			}
		}
		respuesta=confirm("queres otro numero?");
	}
	promediopositivo=sumapositivo/cantidad;
	document.open();
	document.write("<br>La cantidad de números pares es " + numpares + " </br>");
	document.write("<br>La cantidad de números impares es " + numinpares + " </br>");
	document.write("<br>La cantidad de ceros es " + cantidadcero + " </br>");
	document.write("<br>El promedio de todos los números positivos es " + promediopositivo + " </br>");
	document.write("<br>La suma de todos los números negativos es " + sumanegativos + " </br>");
	document.write("<br>El número y la letra del máximo es " + nummax + letramax + " </br>");
	document.write("<br>El número y la letra del minimo es " + nummin + letramin + " </br>");
	document.close();
}
