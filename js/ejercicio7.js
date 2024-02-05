/*Haz un script que escriba una pirámide inversa de los números del 1 al número
que indique el usuario (no mayor de 50) de la siguiente forma : (suponiendo que
indica 30).
303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1*/
var numrepe = prompt("Introduce un número de repeticiónes que no supere las 50");
// verifico que ingresaron un número
if(Number(numrepe) == numrepe){
    if(numrepe > 0 && numrepe <= 50){
        var rep,i;
        for(i = numrepe; i >= 1 ; i--){
            for(rep = i; rep >= 1; rep--){
                document.write(i);
            }
            document.write("<br>");
        }
    }else{
        alert("Ingresó un número invalido")
    }
}else{
    alert("No ingresó un número")
}