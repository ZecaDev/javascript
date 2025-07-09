function verificador() {
    var ano = window.document.getElementById('ano')
    var data = new Date()
    var anoAtual = data.getFullYear()

    if (Number.parseInt(ano.value) > anoAtual) {
        window.alert('ERRO!!! digite uma data valida!!!')
    } else {
        var idade = anoAtual - Number.parseInt(ano.value) 

        var sexo = window.document.getElementsByName('radsex')
        var genero
        if (sexo[0].checked) {
            genero = 'homem'
        } else {
            genero = 'mulher'
        }


        var msg = window.document.getElementById('msg')

        var img = window.document.getElementById('img')

        if (genero == 'homem') {
           if (idade >= 0 && idade <= 12) {
                // Criança
                img.src = 'imagem/crianca-homem.png'
           } else if (idade < 21) {
                // Jovem
                img.src = 'imagem/jovem-homem.png'
           } else if (idade < 50) {
                // Adulto
                img.src = 'imagem/adulto-homem.png'
           } else {
                // Idoso
                img.src = 'imagem/idoso-homem.png'
           }
        } 

        if (genero == 'mulher') {
           if (idade >= 0 && idade <= 12) {
                // Criança
                img.src = 'imagem/crianca-mulher.png'
           } else if (idade < 21) {
                // Jovem
                img.src = 'imagem/jovem-mulher.png'
           } else if (idade < 50) {
                // Adulto
                img.src = 'imagem/adulto-mulher.png'
           } else {
                // Idoso
                img.src = 'imagem/idoso-mulher.png'
           }
        }
    

        msg.innerHTML = `Detectamos ${genero} com ${idade} anos`
        
    }
}
