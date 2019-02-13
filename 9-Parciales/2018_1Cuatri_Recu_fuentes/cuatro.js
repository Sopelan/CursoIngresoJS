function mostrar()
{
var num1;
var num2;
var ent1;
var ent2;
<<<<<<< HEAD
var resultado;
num1=prompt("numero 1?", " ");
num2=prompt("numero 2?", " ");
ent1=parseFloat(num1);
ent2=parseFloat(num2);
resultado=ent1+ent2
resultado=parseFloat(resultado)
if (ent1==ent2)
 {alert(num1+num2);
=======
var ent3;
var ent4;
var suma;
num1=prompt("numero1?"," ");
ent1=parseFloat(num1);
num2=prompt("numero2?"," ");
ent2=parseFloat(num2);
ent3=num1;
ent3=parseFloat(num1);
ent4=num2;
ent4=parseFloat(num2);

suma=ent3+ent4

if (ent1==ent2) 
{alert(num1+num2);	
}
else if (ent1>ent2) 
{alert(ent1/ent2);	
}
else if(suma<50)
{alert("la suma es " + suma + " y es menor a 50");
}






>>>>>>> 1c1a85c182a08f0a29e1bc0580ef51d182f390b2
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