// mengubah Javascript ke json
let jsonString = '{"name": "Zilong", "role": "Fighter"}';
let heroObj = JSON.parse(jsonString);

console.log(heroObj.name); // Zilong
console.log(heroObj.role); // Fighter
console.log(heroObj); // { name: 'Zilong', role: 'Fighter' }

// mengubah json ke javascript
let hero = {
    name: "Lesley",
    role: "Marksman"
};

let jsonData = JSON.stringify(hero);
    console.log(jsonData); // '{"name":"Lesley","role":"Marksman"}'
    console.log(typeof jsonData); // string  