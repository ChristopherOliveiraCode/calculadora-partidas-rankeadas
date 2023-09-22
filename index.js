calcularSaldo(parseInt(prompt("Digite o número de vitórias do herói: ")), parseInt(prompt("Digite o número de derrotas do herói: ")))

function calcularSaldo(vitorias, derrotas){
    let saldo = vitorias - derrotas
    let nivel = ""
    if(saldo <= 0 && saldo <= 10){
        nivel = "Ferro"
    }else if(saldo >= 11 && saldo <= 20){
        nivel = "Bronze"
    }else if(saldo >= 21 && saldo <= 30){
        nivel = "Prata"
    }else if(saldo >= 31 && saldo <= 40){
        nivel = "Ouro"
    }else if(saldo >= 41 && saldo <= 50){
        nivel = "Platina"
    } else if(saldo >= 51 && saldo <= 60){
        nivel = "Diamante"
    }else if(saldo >= 61 && saldo <= 70){
        nivel = "Ascendente"
    }else if(saldo >= 71 && saldo <= 80){
        nivel = "Imortal"
    }else{
        nivel = Radiante}

        console.log("O Herói tem saldo de vitórias de " + saldo + " e está no nível de " + nivel)
}