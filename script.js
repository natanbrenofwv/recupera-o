class Personagem {
    #vida;

    constructor(mana, vida, forca) {
        this.mana = mana;
        this.forca = forca;
        this.#vida = vida;
    }

    getVida() {
        return this.#vida;
    }

    setVida(novaVida) {
        this.#vida = novaVida;
    }

    Usarmagia() {
        console.log("magia");
    }

    atacar() {
        console.log("ataque");
    }

    defender() {
        console.log("defender");
    }
}

class Mago extends Personagem {
    constructor(mana, vida, forca) {
        super(mana, vida, forca);
    }

    
    Usarmagia() {
        console.log("usando magia");
    }

    atacar() {
        console.log("bola de fogo");
    }

    defender() {
        console.log("escudo de magia");
    }
}

class Guerreiro extends Personagem {
    constructor(mana, vida, forca) {
        super(mana, vida, forca);
    }

    defender() {
        console.log("defendendo");
    }

    atacar() {
        console.log("atacar com a espada");
    }
}

class Arqueiro extends Personagem {
    constructor(mana, vida, forca) {
        super(mana, vida, forca);
    }

    atacar() {
        console.log("atacando");
    }

    Usarmagia() {
        console.log("flecha de fogo");
    }
}