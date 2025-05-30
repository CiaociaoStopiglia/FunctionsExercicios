function inverterpalavra(palavra) {
    let inverter = ""
    for(let i = palavra.length - 1; i >= 0; i--) {
        inverter = inverter + palavra[i]
    }
    return inverter
}

console.log(inverterpalavra("Eduardo"))