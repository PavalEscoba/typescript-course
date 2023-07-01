interface Person {
    readonly id: number;
    name: string;
    lastName: string;
    nickName: string;
    // sayHi(): string;
    sayHi: () => string;
}

const pavel: Person = {
    id: 124,
    name: 'Pavel',
    lastName: 'Miatlitski',
    nickName: 'Miatla',
    sayHi: () => 'Hello!',
};

interface Product {
    name: string;
    price: number;
    applyDiscount: (discount: number) => number;
}

// doesn't work because TS compoles this into _this
const shoes: Product = {
    name: 'New Balance',
    price: 100,
    applyDiscount: (amount) => {
        console.log('this', this);
        return this.price * (1 - amount);
    },
};

console.log('shoes price with discount', shoes.applyDiscount(0.3));

// interfaces can merge

interface Book {
    name: string;
    date: string;
}

// ... some code ...

interface Book {
    author: string;
    read: () => string;
}

const bible: Book = {
    name: 'Bible',
    date: '1200 BC - 120 AD',
    author: 'actually God',
    read() {
        return "I'm reading it everyday";
    },
};

// interface can be extended

interface Magazine extends Book {
    color: 'black and white' | 'color';
    topic: string;
}

const nationalGeografic: Magazine = {
    name: 'National Geografic',
    author: 'National Geographic Partners',
    date: '1888',
    color: 'color',
    topic: 'geography',
    read() {
        return 'Have never read it';
    },
};

// also it can extend several interfaces

interface Brochure extends Book, Magazine {
    numberOfPages: number;
}

const antiCovid: Brochure = {
    name: 'antiCovid',
    author: 'antiCovid Inc',
    date: '2020',
    color: 'color',
    topic: 'medicine',
    numberOfPages: 18,
    read() {
        return 'Have never read it';
    },
};
