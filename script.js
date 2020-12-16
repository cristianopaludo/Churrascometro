function calcular() {
    let adultos = document.getElementById("adultos")
    let criancas = document.getElementById("criancas")
    let tempo = document.getElementById("tempo")
    let result = document.getElementById("result")
    let inputs = document.getElementsByClassName("inpt")

    let a = Number(adultos.value)
    let c = Number(criancas.value)
    let t = Number(tempo.value)
    let pessoas = a + c / 2

    // verificador de dados inseridos
    let erro = 0
    for (i of inputs) {
        if (i.value.length < 1 || i.value < 0) {
            window.alert("[ERRO] Insira os dados corretamente")
            erro ++
            break
        } 
    }

    if (erro < 1) { // se todos os dados foram inseridos corretamente

        // calcular as quantidades
        let carne = t < 6 ? 0.4 * pessoas : 0.65 * pessoas
        let cerveja = t < 6 ? 1.2 * a : 2 * a
        let refrigerante = t < 6 ? 1 * pessoas : 1.5 * pessoas
        
        // arredondar para sobrar ao invés de faltar
        cerveja = Math.ceil(cerveja / 0.350)
        refrigerante = Math.ceil(refrigerante / 2)

        // mostrar resultados
        result.innerHTML =  `<h2>Você irá precisar:</h2>
                            <p>${carne.toFixed(3)}kg de carne</p>
                            <p>${cerveja} latas de 350ml de cerveja</p>
                            <p>${refrigerante} garrafas de 2L de refrigerante</p>`
    } else {
        result.innerHTML =  `<h2>Tente novamente!</h2>
                            <p>Algum errou ocorreu por que você não preencheu algum campo
                            ou utilizou algum número negativo.</p>`
    }
}