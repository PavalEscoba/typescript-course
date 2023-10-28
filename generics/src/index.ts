const inpEl = document.querySelector<HTMLInputElement>('#inp')!;
// if (inpEl !== null) inpEl.value = 'Hey!';
inpEl.value = 'Hey!';

function identity<T>(item: T): T {
    return item;
}

function getItem<T>(arr: T[]): T {
    return arr[2];
}

getItem([1, 2, 3, 4, 5, 6]);
getItem(['a', 'b', 'c', 'd']);

function merge<T extends object, U extends object>(obj1: T, obj2: U) {
    return {
        ...obj1,
        ...obj2,
    };
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

interface Agie {
    length: number;
}

function printDouble<T extends Agie>(obj: T): number {
    return obj.length * 2;
}

function printDouble1(obj: Agie): number {
    return obj.length * 2;
}

printDouble('asdfe');