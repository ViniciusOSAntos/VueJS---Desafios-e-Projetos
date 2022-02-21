new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 100,
        monsterLife: 100,
        logs: []
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
            this.logs = []
        },
        attack(especial){
            this.hurt('monsterLife',7, 12, especial, 'Jogador', 'Monstro', 'player') // A aleatoriedade do player é maior
            //if(this.monsterLife > 0){
                this.hurt('playerLife',3, 17, false, 'Monstro', 'Jogador', 'monster')
            //}
        },
        hurt(atr, min, max, especial, source, target, cls){
            let plus = especial ? 5 : 0
            let hurt = this.getRandom(min + plus, max + plus)
            this[atr] = Math.max(this[atr] - hurt, 0) // faz com que o Life não passe para menos de 0
            this.registerLog(`${source} atingiu ${target} com ${hurt}.`, cls)
        },
        healAndHurt(){
            this.heal(10, 15)
            this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')
        },
        heal(max, min){
            let heal = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100) // Limita a cura
            this.registerLog(`Jogador ganhou cura de ${heal}.`, 'player')
        },
        getRandom(min, max){
            let value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        registerLog(text, cls) {
            this.logs.unshift({ text, cls })
        }
    },
    watch: {
        hasResult(value){
            if(value) this.running = false
        }
    }
})