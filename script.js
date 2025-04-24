class Personagem {
    constructor(mana, vida, forca) {
       
        this.mana = mana,
        this.forca = forca,
        this.vida = vida
        
    }
}

class mago extends Personagem{
    constructor(mana, vida, forca){
        super(mana, vida, forca)
    }
    Usarmagia(){
        console.log("usando magia")
    
    }
    
}

class guerreiro extends Personagem{
    constructor(mana, forca, vida){
        super (mana, vida, forca)
    }
    defender(){
        console.log ("defendendo")
    }
}

class arqueiro extends Personagem{
    constructor(mana, forca, vida){
        super(mana, forca, vida)
    }
    atacar(){
    console.log("atacando")
}

}