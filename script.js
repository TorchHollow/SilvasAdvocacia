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

//Iniciado o mapa

function iniciarMapa(){
    const uluru = { lat: -23.467611318855617, lng: -46.53409768363273}

    const mapa = new google.maps.Map(document.getElementById("mapa"), {
        zoom: 15,
        center: uluru,
    })

    const marcador = new google.maps.Marker({
        position: uluru,
        map: mapa,
    })
}

window.iniciarMapa = iniciarMapa