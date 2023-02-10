function revelacao(){
    const revelacoes = document.querySelectorAll(".revelacao")
    for (let i = 0; i < revelacoes.length; i++){
        let windowHeight = window.innerHeight
        let elementoDoTopo = revelacoes[i].getBoundingClientRect().top
        let elementoVisivel = 150
        if (elementoDoTopo < windowHeight - elementoVisivel){
            revelacoes[i].classList.add("ativo")
        }else {
            revelacoes[i].classList.remove("ativo")
        }
    }
}

window.addEventListener("scroll", revelacao)

revelacao()