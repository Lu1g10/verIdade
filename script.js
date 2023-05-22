function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoNasc = document.getElementById('nasc')
    var idade = anoAtual - (anoNasc.value)
    var sexo = document.getElementsByName('sexo')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (anoNasc.value.length == 0 || anoNasc.value > anoAtual) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        if (sexo[0].checked) {
            sexo = 'homem'
            if(idade >= 0 && idade <= 2){
                img.setAttribute('src', 'Imagens/bebe.jpg')
            }else if(idade <= 6){
                img.setAttribute('src', 'Imagens/bMasc.png')
            }else if(idade <= 11){
                img.setAttribute('src', 'Imagens/cMasc.jpg')
            }else if(idade <= 16){
                img.setAttribute('src', 'Imagens/dMasc.jpg')
            }else if(idade <= 26){
                img.setAttribute('src', 'Imagens/jMasc.jpg')
            }else if(idade <= 50){ 
                img.setAttribute('src', 'Imagens/aMasc.jpg')
            }else if(idade <= 65){ 
                img.setAttribute('src', 'Imagens/mMasc.jpg')
            }else{
                img.setAttribute('src', 'Imagens/iMasc.jpg')
            }
        }else{
            sexo = 'mulher'
            if(idade >= 0 && idade <= 2){
                img.setAttribute('src', 'Imagens/bebe.jpg')
            }else if(idade <= 6){
                img.setAttribute('src', 'Imagens/bFem.png')
            }else if(idade <= 11){
                img.setAttribute('src', 'Imagens/cFem.png')
            }else if(idade <= 16){
                img.setAttribute('src', 'Imagens/dFem.jpg')
            }else if(idade <= 26){
                img.setAttribute('src', 'Imagens/jFem.png')
            }else if(idade <= 50){ 
                img.setAttribute('src', 'Imagens/aFem.jpg')
            }else if(idade <= 65){ 
                img.setAttribute('src', 'Imagens/mFem.png')
            }else{
                img.setAttribute('src', 'Imagens/iFem.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
        res.appendChild(img)
    }
}