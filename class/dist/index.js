"use strict";
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
    constructor(nickname, age) {
        this.nickname = nickname;
        this.age = age;
        // readonly nickname: string;
        // age: number;
        this.score = 0;
        this.awards = 0;
    }
    // constructor(nickname: string, age: number) {
    //     this.nickname = nickname;
    //     this.age = age;
    // }
    get fullInfo() {
        return `nickname: ${this.nickname}, age: ${this.age}, awards: ${this.awards}`;
    }
    secretMethod() {
        console.log('Yoooohoooo!');
    }
}
const lovie = new Dog('lovie', 2);
lovie.nickname = 'dog';
// lovie.awards = 123;
// lovie.secretMethod();
lovie.fullInfo;
class Employee {
    constructor(name, age, isAtWork) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log('hello');
    }
}
class FullTimeEmployee extends Employee {
    constructor(name, age, isAtWork, salary) {
        super(name, age, isAtWork);
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(name, age, isAtWork, rate, hours) {
        super(name, age, isAtWork);
        this.name = name;
        this.age = age;
        this.rate = rate;
        this.hours = hours;
    }
    getPay() {
        return this.rate * this.hours;
    }
}
const penny = new PartTimeEmployee('penny', 27, true, 23, 2000);
console.log(penny.getPay());
