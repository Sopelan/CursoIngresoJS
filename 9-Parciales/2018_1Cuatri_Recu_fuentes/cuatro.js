function mostrar()

//importar  4 importes decir cual es el mayor
// sumarlos y si dan mas de 100 darle 10% si supera 50 pesos descuento 5%
//en caso ser <50 sumarle 15%
{
var num1;
var num2;
var num3;
var num4;
var suma;
var porcentaje;
var sumatotal
var mensaje
num1=prompt("ingresar el primer numero?", " ");
num2=prompt("ingresar el segundo numero?", " ");
num3=prompt("ingresar el tercer numero?", " ");
num4=prompt("ingresa el cuarto numero?", " ");
num1=parseInt(num1);
num2=parseInt(num2);
num3=parseInt(num3);
num4=parseInt(num4);
suma=num1+num2+num3+num4;

if (num1>num2 && num1>num3 && num1>num4)
{
mensaje=(num1+ " es el mayor");
}
else 
{
	if (num2>num1 && num2>num3 && num2>num4)
	{
	mensaje=(num2+ " es el mayor");
	} 
	else
	{
		if (num3>num1 && num3>num2 && num3>num4)
		{
		mensaje=(num3+ " es el mayor");
		}
		else
		{
		mensaje=(num4+ " es el mayor");
		}
	}
}
if(suma>=100)
{
porcentaje=9/10;	
}
else
{
	if (suma>=50 && suma<100)
	{
	porcentaje=19/20;
	}
	else
	{
	porcentaje=115/100;
	}
}
alert(mensaje);
alert("tiene que pagar " + suma*porcentaje);
}
// {
// var num1;
// var num2;
// var ent1;
// var ent2;
// var ent3;
// var ent4;
// var suma;
// num1=prompt("numero1?"," ");
// ent1=parseFloat(num1);
// num2=prompt("numero2?"," ");
// ent2=parseFloat(num2);
// ent3=num1;
// ent3=parseFloat(num1);
// ent4=num2;
// ent4=parseFloat(num2);

// suma=ent3+ent4

// if (ent1==ent2) 
// {alert(num1+num2);	
// }
// else if (ent1>ent2) 
// {alert(ent1/ent2);	
// }
// else if(suma<50)
// {alert("la suma es " + suma + " y es menor a 50");
// }