class Character {
    constructor(pseudo, classe, health, attack){
        this.pseudo = pseudo;
        this.classe = classe;
        this.health = health;
        this.attack = attack;
        this.level = 1;
    }

    get stats() {
        return this.pseudo + " (" + this.classe + ") has " + this.health + 
        " life and the level is " + this.level + ".";
    }

    evolve() {
        this.level++;
        console.log(this.pseudo + ' go level ' + this.level + ' !' );
    }

    checkHealth() {
        if(this.health <= 0) {
            this.health == 0;
            console.log(this.pseudo + " has lost!");
        }
    }
}

class Witcher extends Character {
    constructor(pseudo){
        super(pseudo, "witcher", 170, 90);
    }
    attacking(character) {
        character.health -= this.attack;
        console.log(this.pseudo + ' attacks ' + character.pseudo +
         ' by casting a spell (' + this.attack + ' damages)');

         this.evolve();
         character.checkHealth();
    }

    specialHit(character) {
        character.health -= this.attack * 5;
        console.log(this.pseudo + ' attacks with special hit Acane Power' + character.pseudo + 
        ' (' + this.attack * 5 + ' damages');

         this.evolve();
         character.checkHealth();
    }
}

class Warrior extends Character {
    constructor(pseudo){
        super(pseudo, "warrior", 350, 50);
    }
    attacking(character) {
        character.health -= this.attack;
        console.log(this.pseudo + ' attacks ' + character.pseudo +
         ' with his sword (' + this.attack + ' damages)');

         this.evolve();
         character.checkHealth();
    }

    specialHit(character) {
        character.health -= this.attack * 5;
        console.log(this.pseudo + ' attack with master swords' + character.pseudo + 
        ' (' + this.attack * 5 + ' damages');

         this.evolve();
         character.checkHealth();
    }
}


var gandalf = new Witcher('Gandalf');
var thor    = new Warrior('Thor');

console.log(thor.stats);
console.log(gandalf.stats);
gandalf.attacking(thor);
console.log(thor.stats);
thor.attacking(gandalf);
console.log(gandalf.stats);
gandalf.specialHit(thor);