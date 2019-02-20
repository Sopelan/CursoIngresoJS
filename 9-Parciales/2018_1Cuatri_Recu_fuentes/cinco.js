// cada habitacio de un hotel tiene un precion, hay promocions segun el tipo de pago.
// si es con tarjeta visa un 10%, si es por paypal un 15%, por mercado libre un 10%, efectivo
// 20%, cualquier otro mando solo un 5%
// SI compraste el paquete "todoincluido" y pagas con paypal se le suma 10% al descuento.
// si pagas en efectivo, tenes varias opciones , el paquete "solodescuento" te suma un 10%
// al descuento , si el paquete es "todoincluido" te suma un 15% y para el resto de los
// paquete no tiene descuento adicional
// {var dia
// 	dia=prompt("el dia?", " ");
// switch(dia)
// {case "lunes":
// case "martes":
// case "miercoles":
// case "jueves":
// case "viernes":
// alert("a trabajar");
// break;
// case "sabado":
// case "domingo":
// alert("buen finde");
// break;
// default:
// {alert("no es un dia valido");
// }
// }
// }
function mostrar()
{

var precio
var medio
var tipo
var mensaje
precio=prompt("cual es el precio de la habitacion?", " ");
precio=parseFloat(precio);
medio=prompt("cual es el medio por la que pagas?", " ");
tipo=promp("solo descuento o todo incluido?" , " ");
switch(medio)
	{
	case "tarjetavisa":
	case "mercadolibre":
	mensaje=precio*9/10;
	break;
	case "paypal":
	switch(tipo)
		{case "todoincluido":
		mensaje=(precio*75/100);
		break;
		default:
		mensaje=(precio*85/100);
		}
	break;
	case "efectivo":
	switch(tipo)
		{case "solodescuento":
		mensaje=(precio*70/100);
		break;
		case "todoincluido":
		mensaje=(precio*65/100);
		break;
		default:
		mensaje=(precio*4/5);
		}
	break;

	}
alert("el precio final es: " + mensaje);
}
