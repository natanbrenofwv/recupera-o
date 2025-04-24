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
}

class guerreiro extends Personagem{
    constructor(mana, forca, vida){
        super (mana, vida, forca)
    }
}

class arqueiro extends Personagem{
    constructor(mana, forca, vida){
        super(mana, forca, vida)
    }
}