function tabuada() {
    var n = window.document.getElementById('num')
    var tab = window.document.getElementById('tab')
    var num = Number.parseInt(n.value)
    

    tab.innerHTML = ``

    for(c = 1; c <= 10; c++) {
        let item = document.createElement('option')
        item.text = `${num} x ${c} = ${num * c}`
        item.value =  `tab${c}`
        tab.appendChild(item)
    }
}