document.getElementById("Calcular").addEventListener("click", function () {
    event.preventDefault();

    const Valor1 = parseInt(document.getElementById("numero1").value);
    const Operador = document.getElementById("operacion").value;
    const Valor2 = parseInt(document.getElementById("numero2").value);
    let resultado;

    if (Operador === "+") {
        resultado = Valor1 + Valor2;
    } else if (Operador === "-") {
        resultado = Valor1 - Valor2;
    } else if (Operador === "*") {
        resultado = Valor1 * Valor2;
    } else if (Operador === "/") {
        resultado = Valor2 !== 0 ? Valor1 / Valor2 : "Error: No se puede dividir por cero.";
    }else if (Operador === "**") {
        resultado = Valor1 ** Valor2;
    } else if (Operador === "%") {
        resultado = Valor2 !== 0 ? Valor1 % Valor2 : "Error: No se puede sacar porcentaje por cero.";
    }
    else {
        resultado = "ERROR: Operador No Válido!";
    }
    
    


    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
});



   


