new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 100,
        monsterLife: 100,
    },
    computed: {
        hasResult(){
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods: {
        startGame(){
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
        },
        attack(especial){
            this.hurt('playerLife',7, 12, especial) // A aleatoriedade do player é maior
            this.hurt('monsterLife',3, 17, false)
        },
        hurt(atr, min, max, especial){
            let plus = especial ? 5 : 0
            let hurt = this.getRandom(min + plus, max + plus)
            this[atr] = Math.max(this[atr] - hurt, 0) // faz com que o Life não passe para menos de 0
        },
        healAndHurt(){
            this.heal(10, 15)
            this.hurt('playerLife', 7, 12, false)
        },
        heal(max, min){
            let heal = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100) // Limita a cura
        },
        getRandom(min, max){
            let value = Math.random() * (max - min) + min
            return Math.round(value)
        }
    },
    watch: {
        hasResult(value){
            if(value) this.running = false
        }
    }
})