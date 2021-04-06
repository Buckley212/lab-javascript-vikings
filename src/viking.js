// Soldier
class Soldier {
    constructor(health, strength){
        this._health = health
        this._strength = strength
    }
    attack() {
        return this._strength;
    }
    receiveDamage(damage){
        this._health -= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        this._name = name
        super(health, strength);
    }
    receiveDamage(damage){
        this._health -= damage;
        if (this._health > 0){
            return `${this._name} has received ${damage} points of damage`
        }
        else {
            return `${this._name} has died in an act of combat`
        }
    }
    battleCry(){
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        if (this._health > 0){
            return `A Saxxon has received ${damage} points of damage`
        }
        else {
            return `A Saxxon has died in combat`
        }
    }
}

// War
class War {

    vikingArmy = []
    saxonArmy = []

    addViking(viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        let saxonSoldier = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let vikingSoldier = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        if (saxonSoldier.health <= vikingSoldier.strength) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(saxonSoldier), 1)
        }
        return saxonSoldier.receiveDamage(vikingSoldier.attack())
    }
    saxonAttack(){
        let saxonSoldier = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let vikingSoldier = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        if (vikingSoldier.health <= saxonSoldier.strength) { 
            this.saxonArmy.splice(this.vikingArmy.indexOf(vikingSoldier), 1)
        }
        return vikingSoldier.receiveDamage(saxonSoldier.attack())
    }
    showStatus(){
        if (this.saxonArmy.length === 0){
            return `Vikings have won the war of the century!`
        }
        if (this.vikingArmy.length === 0){
            return `Saxons have fought for their lives and survived another day...`
        }
        else{
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}
