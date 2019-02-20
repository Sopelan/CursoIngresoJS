/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
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
intentos.value=10;
contadorIntentos=intentos.value;

}

function verificar()
{
var num;
num=numero.value;
num=parseInt(num);
contadorIntentos=intentos.value-1;
pierde5=intentos.value-5;
int=10-intentos.value;
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
