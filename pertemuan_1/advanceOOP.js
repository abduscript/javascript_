// Encapsulation
class Player {
    #score = 0; // private field

    addPoint() {
        this.#score++;
    }

    getScore() {
        return this.#score;
    }
}

const p1 = new Player();
p1.addPoint();
  console.log(p1.getScore()); // ✅ 1
//   console.log(p1.#score);     // ❌ Error, private!


// Getters and Setters
class Hero {
    constructor(name) {
        this._name = name;
    }
    
    get name() {
      return this._name.toUpperCase(); // otomatis kapital
    }
    
    set name(value) {
        if (value.length >= 3) this._name = value;
    }
}
    
const hero = new Hero('Lancelot');
  console.log(hero.name); // LANCELOT
  hero.name = 'Yi Sun shin';       // ❌ gagal set
  console.log(hero.name); // tetap LANCELOT

// static method and property
class MathHelper {
    static PI = 3.14;
    
    static square(x) {
      return x * x + x; // static method
    }
}

    console.log(MathHelper.PI);       // 3.14
    console.log(MathHelper.square(5)); // 25
    console.log(MathHelper.square(MathHelper.PI)); // 9.8596  


// Method Overriding (Polymorphism)
class Heroes {
    attack() {
        console.log("Hero attacks!");
    }
}

class Marksman extends Heroes {
    attack() {
        console.log("Marksman shoots from distance!");
    }
}

    const heroic = new Marksman();
    heroic.attack(); // Marksman shoots from distance!

    console.log(heroic instanceof Marksman); // true
    console.log(heroic instanceof Heroes);     // true
    



// Abstraction
class Vehicle {
    start() {
        this._checkSystem();
        console.log("Engine started!");
    }
    
    _checkSystem() {
        console.log("Checking all systems...");
    }
}

const car = new Vehicle();
car.start(); // Simpel, padahal di dalamnya ada proses!

// super class
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

    class Cat extends Animal {
    constructor(name) {
      super(name); // panggil constructor induk
    }

    speak() {
        super.speak(); // panggil method induk
        console.log(`${this.name} meows.`);
    }
}

const c = new Cat('Milo');
c.speak();
  // Milo makes a sound.
  // Milo meows.





