new Vue({
    el:'#desafio',
    data: {
        nome: 'Vinicius Oliveira',
        idade: 22,
        img: 'AnimeC.webp'
    },
    methods: {
        geraAleatorio(){
            return Math.random()
        }
    }
})