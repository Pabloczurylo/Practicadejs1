/*Crea script para generar pirámide siguiente con los números del 1 al número
que indique el usuario (no mayor de 50)
1 12
123
1234
12345
123456
…… */
var numrepe = prompt("Introduce un número de repeticiónes que no supere las 50");
if(Number(numrepe) == numrepe){
    if(numrepe > 0 && numrepe <= 50){
        var rep, i;
        for(i = 0; i <= numrepe; i++){
            for(rep = 1; rep <= i; rep++){
                document.write(rep);
            }
            document.write("<br>");
        }
    }else{
        alert("El número que ingresó no es valido")
    }
}else{
    alert("No ingresó un número")
}