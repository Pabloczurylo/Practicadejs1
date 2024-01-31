/*3- Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un
guión -. */

var cadenas = ""

do{
    var nuevaCadena = prompt("Ingresa una cadena de texto");
    if( cadenas == ""){
        cadenas = cadenas + nuevaCadena;
    }else{
        cadenas = cadenas + "-" + nuevaCadena;    
    }

}while (confirm("Desea continuar?"));
document.write(cadenas);
