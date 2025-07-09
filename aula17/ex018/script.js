let n = window.document.getElementById('num')
let tab = window.document.getElementById('tab')
let res = window.document.getElementById('res')
let valores = []


function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}



function analisar() {
    if (isNumero(n.value) && !inLista(n.value, valores)) {
        valores.push(Number(n.value))
        let text = window.document.createElement('option')
        for(let n in valores) {
            text.text = `Valor ${valores[n]} adicionado`
        }
        tab.appendChild(text)    
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    n.value = ''
    n.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let menor = 100
        res.innerHTML = `Ao todo temos ${valores.length} números cadastrados.<br>`
        for(let n in valores) {
            if (menor > valores[n]) {
                menor = valores[n]
            }
        }
        res.innerHTML += `O menor valor informado foi ${menor}.<br>`

        let soma = 0
        for(let n in valores) {
            soma += valores[n]
        }
        res.innerHTML += `Somando todos os valores, temos ${soma}.<br>`

        
        res.innerHTML += `A média dos valores digitados é ${soma / valores.length}.<br>`
    }
}