/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var int;
var numeroSecreto; 
var contadorIntentos;
var pierde5;
function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
numeroSecreto=Math.floor((Math.random()*100)+1);
numeroSecreto=parseInt(numeroSecreto);
intentos.value=20;
contadorIntentos=intentos.value;

}

function verificar()
{
var num;
num=numero.value;
num=parseInt(num);
contadorIntentos=intentos.value-1;
pierde5=intentos.value-5;
int=20-intentos.value+1;
//alert(numeroSecreto+ " "+num);
 if(intentos.value<=0)
	{alert("usted perdio");
    alert("el numero era "+ numeroSecreto);
numero.value="perdiste";
intentos.value=0;
}
  else if (numeroSecreto==num) 
{   alert("usted es el ganador y en solo " + int + " intentos");
    intentos.value="en "+ int +" intentos";
    numero.value=" ganador";
     if (int==1) 
     	{alert("Usted es un psiquico")};
     if (int==2) 
    	{alert("Excelente percepción")};
    if (int==3) 
     	{alert("Esto es suerte")};
     if (int==4) 
    	{alert("Excelente tecnica")};
    if (int==5) 
     	{alert("Usted esta en la media")};
    if (int>=6 && int<=10) 
     	{alert("Falta tecnica")};
     if (int>10) 
    	{alert("Afortunado en el amor")};
}
  else if (numeroSecreto>num)
{alert("falta para llegar al numero secreto");
alert("le quedan "+contadorIntentos +" intentos");
 intentos.value=contadorIntentos;

}
  else if(numeroSecreto<num)
{alert("se paso del numero secreto");
alert("le quedan "+contadorIntentos +" intentos");
 intentos.value=contadorIntentos;
}
else
{alert("al no poner nada te saque 5 puntos");
alert("le quedan "+pierde5 +" intentos");
intentos.value=pierde5;
}
}