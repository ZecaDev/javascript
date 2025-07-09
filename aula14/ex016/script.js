function contar() {
    var inicio = window.document.getElementById('inc')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('pas')
    var res = window.document.getElementById('res')

    if (inicio.value == '' || fim.value == '' || passo.value == '') {
        res.innerHTML = 'Impossivel contar!'
        if (Number.parseInt(passo.value) == 0) {
            res.innerHTML = 'Impossivel contar!'          
        }

    } else {
        res.innerHTML = 'Contando: '

        var n1 = Number(inicio.value)
        var n2 = Number(fim.value)
        var n3 = Number(passo.value)
        if (n1 > n2) {
            for (c = n1; c >= n2; c -= n3) {
                res.innerHTML += c + '\u{1F449}'                            
            }
        } else {
            for (c = n1; c <= n2; c += n3) {
                res.innerHTML += c + '\u{1F449}'        
            }
        }
        res.innerHTML += '\u{1F3C1}'
       
    }
}