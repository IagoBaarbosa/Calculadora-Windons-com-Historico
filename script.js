
const resultado = document.querySelector('.result')
const confirmar = document.querySelector('.igual')
const historico = []





function insert(valor) {
    resultado.innerHTML += valor
}

function clean() {
    resultado.innerHTML = ''
}

function backspace() {
    if (resultado.innerHTML) {
        let result = document.getElementById('resultado').innerHTML
        resultado.innerHTML = result.substring(0, result.length - 1)

    }
}

function confirma() {
    if (resultado.textContent != 'Erro') {
        document.getElementById('resultado').innerHTML = eval(resultado.innerHTML)
        historico.push (eval(resultado.innerHTML))
        document.getElementById('branco').innerHTML = historico.join('<br>')
    }
}



document.querySelector('body').addEventListener('keydown', function (event) {

    const tecla = event.keyCode


    if (event.shiftKey) {
        switch (tecla) {
            case 56: insert('*'); break;
            case 187: insert('+'); break;
        }

        return null;
    }


    switch (tecla) {
        case 49: insert('1'); break;
        case 50: insert('2'); break;
        case 51: insert('3'); break;
        case 52: insert('4'); break;
        case 53: insert('5'); break;
        case 54: insert('6'); break;
        case 55: insert('7'); break;
        case 56: insert('8'); break;
        case 57: insert('9'); break;
        case 48: insert('0'); break;
        case 193: insert('/'); break;
        case 8: backspace(); break;
        case 13: confirma(); break;
    }


})

