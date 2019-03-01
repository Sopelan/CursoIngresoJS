function mostrar()
{
	var nota;
	var sexo;
	var suma=0;
	var promedio;
	var notabaja;
	var sexobajo;
	var varmayor6=0;
	var contador=0;
	while(contador<5)
	{
		contador=contador+1;
		nota=prompt("ingrese un numero entre 0 y 10");
		nota=parseFloat(nota);
		while(nota<0 || nota>10 || isNaN(nota))
		{
			alert("error");
			nota=prompt("ingrese un numero entre 0 y 10");
			nota=parseFloat(nota);
		}
		sexo=prompt("ingrese si sos f o m");
		while(isNaN(sexo)==false || (sexo!="f" && sexo!="m") )
		{
			alert("error");
			sexo=prompt("ingrese si sos f o m");
		}
		suma=nota + suma;
		if(contador==1)
		{
			sexobajo=sexo;
			notabaja=nota;
		}
		else
		{
			if (notabaja>nota) 
			{
				sexobajo=sexo;
				notabaja=nota;
			}
		}
		if (nota>=6)
		{
			if(sexo=="m")
			{
				varmayor6=varmayor6+1;
			}
		}
	}
	promedio=suma/contador;
alert("El promedio de las notas totales es " + promedio);
alert("La nota más baja es " + notabaja + " y el sexo de esa persona es " + sexobajo);
alert("La cantidad de varones que su nota haya sido mayor o igual a 6 es " + varmayor6);

}
