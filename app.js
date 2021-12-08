let btnPls = document.getElementById('btnPls')
let btnMns = document.getElementById('btnMns')
let btnMltpl = document.getElementById('btnMltpl')
let btnDvd = document.getElementById('btnDvd')

let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')

function getNumber1() {
    return Number(input1.value)
}
function getNumber2() {
    return Number(input2.value)
}

function makeOperation(operator) {
    if (operator === '+') {
        var result = getNumber1() + getNumber2()
    } else if (operator === '-') {
        var result = getNumber1() - getNumber2()
    } else if (operator === '*') {
        var result = getNumber1() * getNumber2()
    } else if (operator === '/') {
        var result = getNumber1() / getNumber2()
    } else {
        window.alert('operation is unknown')
    }
    window.alert(result)
}

function onBtnPlsClick() {
    makeOperation('+')
}

function onBtnMnsClick() {
    makeOperation('-')
}

function onBtnMltplClick() {
    makeOperation('*')
}

function onBbtnDvdClick() {
    makeOperation('/')
}

btnPls.addEventListener('click', onBtnPlsClick)
btnMns.addEventListener('click', onBtnMnsClick)
btnMltpl.addEventListener('click', onBtnMltplClick)
btnDvd.addEventListener('click', onBbtnDvdClick)

