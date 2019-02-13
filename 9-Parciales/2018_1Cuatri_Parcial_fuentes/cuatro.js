function mostrar()
{
<<<<<<< HEAD
var num1;
var num2;
var ent1;
var ent2;
num1=prompt("numero 1?", " ");
num2=prompt("numero 2?", " ");
ent1=parseFloat(num1);
ent2=parseFloat(num2);
var resultado;
resultado=ent1+ent2;
resultado=parseFloat(resultado);
if (num1==num2) 
{alert(num1+num2);
}
else if(ent1>ent2)
{alert(ent1-ent2);
}
else{alert(ent1+ent2);
}
if (resultado>10)
{alert("la suma es " + resultado + " supero el 10");
}

=======
var como;
var compra;
var precio;
var cuantosale;
var descuento10;
var descuento25;
var recargo10;
var tarefe;
var recargo10b;
compra=prompt("cuantos productos", " ");
compra=parseFloat(compra);
precio=prompt("cuanto sale?");
precio=parseFloat(precio);
tarefe=prompt("en tarjeta o en efectivo?", "");
cuantosale=compra*precio;
cuantosale=parseFloat(cuantosale);
descuento10=cuantosale-(cuantosale/10);
descuento10=parseFloat(descuento10);
descuento25=(descuento10-(descuento10/4));
descuento25=parseFloat(descuento25);
recargo10=descuento10+(descuento10/10);
recargo10b=descuento25+(descuento25/10);
if (compra>2 && cuantosale>2000 && tarefe=="efectivo")
{alert(descuento25);
}

 
 else if (compra>2 && tarefe=="efectivo") 
	{alert(descuento10);
}

if (compra>2 && cuantosale>2000 && tarefe=="tarjeta")
{alert(recargo10b);
}

 
 else if (compra>2 && tarefe=="tarjeta") 
	{alert(recargo10);
}
if (compra<3 && tarefe=="tarjeta") 
	{alert(cuantosale+(cuantosale/10));
}
if (compra<3 && tarefe=="efectivo") 
	{alert(cuantosale);
>>>>>>> 1c1a85c182a08f0a29e1bc0580ef51d182f390b2

}
}