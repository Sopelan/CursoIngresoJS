var eleccionMaquina;
var ContadorDeEmpates;
var ContadorDeGanadas;
var ContadorDePerdidas;
var mensaje;



function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
eleccionMaquina=Math.floor((Math.random()*3)+1);	 	
ganadas.value=0;
perdidas.value=0;
empatadas.value=0;
ContadorDeEmpates=empatadas.value;
ContadorDeGanadas=ganadas.value;
ContadorDePerdidas=perdidas.value;
ContadorDeEmpates=parseFloat(ContadorDeEmpates);
ContadorDeGanadas=parseFloat(ContadorDeGanadas);
ContadorDePerdidas=parseFloat(ContadorDePerdidas);

}
function piedra()
{
eleccionMaquina=Math.floor((Math.random()*3)+1);
switch(eleccionMaquina){
case 1:
mensaje="empate";
break;
case 2:
mensaje="perdiste";
break;
case 3:
mensaje="ganaste";
break;


}
alert(mensaje);
switch(mensaje)
{case "ganaste":
ContadorDeGanadas=ContadorDeGanadas+1;
ganadas.value=ContadorDeGanadas;
break;
case "empate":
ContadorDeEmpates=ContadorDeEmpates+1;
empatadas.value=ContadorDeEmpates;
break;
case "perdiste":
ContadorDePerdidas=ContadorDePerdidas+1;
perdidas.value=ContadorDePerdidas;
}

}//FIN DE LA FUNCIÓN
function papel()
{

eleccionMaquina=Math.floor((Math.random()*3)+1);
switch(eleccionMaquina){
case 1:
mensaje="ganaste";
break;
case 2:
mensaje="empate";
break;
case 3:
mensaje="perdiste";
break;
}
alert(mensaje);
switch(mensaje)
{case "ganaste":
ContadorDeGanadas=ContadorDeGanadas+1;
ganadas.value=ContadorDeGanadas;
break;
case "empate":
ContadorDeEmpates=ContadorDeEmpates+1;
empatadas.value=ContadorDeEmpates;
break;
case "perdiste":
ContadorDePerdidas=ContadorDePerdidas+1;
perdidas.value=ContadorDePerdidas;
}
}//FIN DE LA FUNCIÓN
function tijera()
{

eleccionMaquina=Math.floor((Math.random()*3)+1);
switch(eleccionMaquina){
case 1:
mensaje="perdiste";
break;
case 2:
mensaje="ganaste";
break;
case 3:
mensaje="empate";
break;
}	
alert(mensaje)
switch(mensaje)
{case "ganaste":
ContadorDeGanadas=ContadorDeGanadas+1;
ganadas.value=ContadorDeGanadas;
break;
case "empate":
ContadorDeEmpates=ContadorDeEmpates+1;
empatadas.value=ContadorDeEmpates;
break;
case "perdiste":
ContadorDePerdidas=ContadorDePerdidas+1;
perdidas.value=ContadorDePerdidas;
}
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{

}