function mostrar()
{
var num1;
var num2;
var ent1;
var ent2;
var resultado;
num1=prompt("numero 1?", " ");
num2=prompt("numero 2?", " ");
ent1=parseFloat(num1);
ent2=parseFloat(num2);
resultado=ent1+ent2
resultado=parseFloat(resultado)
if (ent1==ent2)
 {alert(num1+num2);
}
else if(ent1>ent2)
{alert(ent1/ent2);
}
else{alert(resultado);
}
if (resultado<50) 
{alert("la suma es " + resultado + " y es menor a 50");
}
}