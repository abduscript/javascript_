// constructor function / prototype example
function HeroFighter(name, health, damage) {
    this.name = name;
    this.health = health;
    this.damage = damage;
}

HeroFighter.prototype.power = function() {
    console.log(`${this.name} attacks with power ${this.damage}`);
}

const hero1 = new HeroFighter('Alpha', 100, 50);
const hero2 = new HeroFighter('Sun', 80, 40);

hero1.power(); // Alpha attacks with power 50
hero2.power(); // Sun attacks with power 40















// Object.create example
const turretHero = {
    basicAttack() {
        console.log(`${this.name} basic attack`);
    }
}

const hero = Object.create(turretHero);
hero.name = 'Aulus';
hero.basicAttack(); // Aulus basic attack


















// class 
class heroType {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    basicAttack() {
        console.log(`${this.name} menyerang menggunakan ${this.weapon}`);
    }
}

const heroAssasin = new heroType('Zilong', 'tombak naga');
heroAssasin.basicAttack(); // Zilong menyerang menggunakan tombak naga

console.log(Object.getPrototypeOf(hero1, hero2));    // Hero.prototype
console.log(Object.getPrototypeOf(hero));   // baseHero
console.log(Object.getPrototypeOf(heroAssasin)); // heroType.prototyp

document.getElementById('p').innerHTML = heroAssasin.name + ' menyerang menggunakan ' + heroAssasin.weapon;