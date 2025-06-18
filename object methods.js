//Object.assign()

let target = { a: 1, b: 2};
let source = { b: 4, c: 5};

let returnTarget = Object.assign(target, source);

console.log(target);

console.log(returnTarget === target);

//object.create()

let animal = {
    sound : "roar"
};

let lion = Object.create(animal);
console.log(lion.sound);


//Object.defineProperties()

let object1 = {};

Object.defineProperties(object1, {
    property1: {
        value: 42,
        writable: true,
    },
    property2: {},
});

console.log(object1.property1);
