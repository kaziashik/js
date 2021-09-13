const bottle = { color: 'yellow', hold: 'water', price: 50, isCleaned: true };
const keys = Object.keys(bottle);

console.log(keys)

const valus = Object.values(bottle);
console.log(valus)

const pairs = Object.entries(bottle)
console.log(pairs)


Object.seal(bottle)
Object.freeze(bottle)


delete bottle.isCleaned;
console.log(bottle)

bottle.color = 'red'
console.log(bottle)
Object.freeze(bottle)
console.log(bottle)



