
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
        this.#vida = novaVida < 0 ? 0 : novaVida; 
    }

    Usarmagia() {
        console.log("magia");
    }

    atacar(oponente) {

        const dano = this.forca;
        const vidaAtual = oponente.getVida();
        oponente.setVida(vidaAtual - dano);
        console.log(`${this.constructor.name} atacou causando ${dano} de dano. Vida do oponente agora é ${oponente.getVida()}.`);
    }


}
class mago extends Personagem{
    constructor(mana, vida, forca){
        super(mana, vida, forca);
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