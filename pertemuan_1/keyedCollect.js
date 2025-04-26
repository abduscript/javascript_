// Map
const heroes = new Map();

heroes.set("alpha", "fighter");
heroes.set("valentina", "mage");
heroes.set("bruno", "marksman");

heroes.forEach((value, key) => {
    console.log(`${key} is hero ${value}`);
});

// console.log(heroes.set(1))

// Set
const heroFighter = new Set();

heroFighter.add('alpha');
heroFighter.add('alucard');
heroFighter.add('terizla');

console.log(`user has selected:`, heroFighter)

// WeakMap

const alpha = {};
const pasifHero = new WeakMap()

pasifHero.set(alpha, { pasif: 'sustain and true damage' })

console.log(`pasif alpha:`, pasifHero.get(alpha));


// WeakSet
const suyou = { name : 'suyou' }
const lancelot = { name : 'lancelot' }

const assasinSet = new WeakSet();

assasinSet.add(suyou);
assasinSet.add(lancelot);

console.log('hero yang dipilih user : ', assasinSet.has(lancelot))