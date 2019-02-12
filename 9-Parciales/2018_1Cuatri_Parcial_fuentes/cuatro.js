function mostrar()
{
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


}
