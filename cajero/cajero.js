let saldo = 0

function consignar(valor){
    if(valor < 500){
        return false
    } 
    saldo += valor //tambien se puede saldo = saldo + valor lo que significa que esta diciendo toma el valor que tiene y sumale el valor javascript lo permite y algunos otros lenguajes //
    return true
}

function retirar(valor){
    if (valor > saldo){
        return false
    }
        saldo -= valor //tambien se puede saldo = saldo - valor
        return true
}

function realizar_Accion(accion){
    if(accion === "1"){
        let valor = parseInt(prompt("digite el valor a consignar"))
        return consignar(valor)
    }
    if(accion === "2"){
        let valor = parseInt(prompt("digite el valor a retirar"))
        return retirar(valor)
    }

    return false
}
alert("Bienvenido a su cajero el saldo de cuenta es: " + saldo);
function main(){
    
    while(true){
        let accion = prompt("1. consignar, 2. retirar, 3. salir")
        if(accion === "3"){
            alert("Hasta luego")
            break
        }
        let resultado = realizar_Accion(accion)
        if(resultado === false){
            alert("Acción fallida")
        }else{
            alert("Acción extitosa, Nuevo Saldo: " + saldo )
        }
    }
}

main()