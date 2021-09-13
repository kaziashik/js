
//1.using object literal
const student = { name: 'sakib al hasan', jov: 'crirketer' };

//2.constructor
const person = new Object();




//3.
const human = Object.create(student)
// console.log(human.jov);


class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
}

const peop = new People('Manus', 12);

console.log(peop)


