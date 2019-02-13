
function mostrar()
{var nom1;
 var nom2;
 var edad1;
 var edad2;
 
 nom1=prompt("su nombre?" ,  " ");
 nom2=prompt("su nombre?", " ");
 edad1=prompt("su edad?" , " ");
 edad1=parseFloat(edad1);
 edad2=prompt("su edad?", " ");
 edad2=parseFloat(edad2);
 var suma;
 suma=(edad1 + edad2);
 alert("ustedes son " + nom1 + " y " + nom2 + " sus edades son " + edad1 + " y " + edad2 + " ,y la suma de sus edades es " + suma);

}
