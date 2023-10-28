// console.log('works');

// class Dog {
//     #breed = 'boxer';
//     #favMeal = 'mices';
//     constructor(nickname, age) {
//         this.nickname = nickname;
//         this.age = age;
//         this.#walkaDog();
//     }

//     getBreed() {
//         return this.#breed;
//     }

//     setBreed(name) {
//         this.#breed = name;
//     }

//     #walkaDog() {
//         console.log(`${this.nickname} let's go!`);
//     }

//     get favMeal() {
//         return this.#favMeal;
//     }

//     set favMeal(name) {
//         this.#favMeal = name;
//     }
//     bark() {
//         console.log(
//             `Woof-woof, I'm ${this.nickname} and I'm ${this.age} years old`
//         );
//     }
// }

// const spickey = new Dog('Spickey', 3);

// spickey.bark();
// console.log(spickey.getBreed());
// spickey.setBreed('German Shepherd');
// console.log(spickey.getBreed());

// console.log(spickey.favMeal);
// spickey.favMeal = 'moles';
// console.log(spickey.favMeal);

// class GermanShepherd extends Dog {
//     constructor(nickname, age, location) {
//         super(nickname, age);
//         this.location = location;
//     }

//     herdSheeps() {
//         console.log('Hearding sheeps in ' + this.location);
//     }
// }

// const jack = new GermanShepherd('jack', 4, 'Radashkovichy');

// jack.herdSheeps();

class Dog {
    // readonly nickname: string;
    // age: number;
    score = 0;
    private awards: number = 0;
    constructor(public nickname: string, public age: number) {}

    // constructor(nickname: string, age: number) {
    //     this.nickname = nickname;
    //     this.age = age;
    // }

    get fullInfo(): string {
        return `nickname: ${this.nickname}, age: ${this.age}, awards: ${this.awards}`;
    }

    private secretMethod(): void {
        console.log('Yoooohoooo!');
    }
}

const lovie = new Dog('lovie', 2);

lovie.nickname = 'dog';
// lovie.awards = 123;

// lovie.secretMethod();

lovie.fullInfo;

abstract class Employee {
    constructor(public name: string, public age: number, isAtWork: boolean) {}
    abstract getPay(): number;
    greet() {
        console.log('hello');
    }
}

class FullTimeEmployee extends Employee {
    constructor(
        public name: string,
        public age: number,
        isAtWork: boolean,
        private salary: number
    ) {
        super(name, age, isAtWork);
    }
    getPay() {
        return this.salary;
    }
}

class PartTimeEmployee extends Employee {
    constructor(
        public name: string,
        public age: number,
        isAtWork: boolean,
        private rate: number,
        private hours: number
    ) {
        super(name, age, isAtWork);
    }

    getPay() {
        return this.rate * this.hours;
    }
}

const penny = new PartTimeEmployee('penny', 27, true, 23, 2000);

console.log(penny.getPay());
