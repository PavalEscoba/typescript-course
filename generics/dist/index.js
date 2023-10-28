"use strict";
const inpEl = document.querySelector('#inp');
// if (inpEl !== null) inpEl.value = 'Hey!';
inpEl.value = 'Hey!';
function identity(item) {
    return item;
}
function getItem(arr) {
    return arr[2];
}
getItem([1, 2, 3, 4, 5, 6]);
getItem(['a', 'b', 'c', 'd']);
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const a = {
    name: 'Pavel',
    surname: ['Miatlitski', 'Barysenka'],
};
var b = {
    children: 3,
    child1: {
        name: 'Leu Tadevush',
        age: 7,
    },
    child2: {
        name: 'Nil Matsei',
        age: 5,
    },
    child3: {
        name: 'Uladzislau',
        age: 13,
    },
};
const c = merge(a, b);
const d = merge(a, 9);
console.log('c', c);
function printDouble(obj) {
    return obj.age * 2;
}
function printDouble1(obj) {
    return obj.age * 2;
}
