class Personagem {
    constructor(mana, vida, forca) {
       
        this.mana = mana,
        this.forca = forca,
        this.vida = vida
        
    }
    Usarmagia(){
        console.log("magia")
    }
    
    atacar(){
        console.log("ataque")
}
    defender(){
    console.log("defender")
}

}

class mago extends Personagem{
    constructor(mana, vida, forca){
        super(mana, vida, forca)
    }
    Usarmagia(){
        console.log("usando magia")
    
    }
    atacar(){
        console.log('bola de fogo')

    }

    defender(){
        console.log("escudo de magia")
    }
    
}

class guerreiro extends Personagem{
    constructor(mana, forca, vida){
        super (mana, vida, forca)
    }

    defender(){
        console.log ("defendendo")
    }

    atacar(){
        console.log("atacar com a espada")
    }

}

class arqueiro extends Personagem{
    constructor(mana, forca, vida){
        super(mana, forca, vida)
    }
    atacar(){
    console.log("atacando")
}
    Usarmagia(){
    console.log("flecha de fogo")
    }
}
