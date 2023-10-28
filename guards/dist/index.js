"use strict";
// typeof guards
function triple(value) {
    if (typeof value === 'string') {
        return value.repeat(3);
    }
    return value * 3;
}
// truthiness guard
const splitingWord = (word) => {
    if (word) {
        for (let char of word) {
            console.log('letter: ', char);
        }
    }
    else {
        console.log("you didn't pass any word ");
    }
};
const getDuration = (item) => {
    if ('duration' in item) {
        return item.duration;
    }
    return item.numOfEpisodes * item.episodeDuration;
};
const movie = {
    title: 'Saving Private Ryan',
    duration: 169,
};
const tvShow = {
    title: 'From',
    numOfEpisodes: 20,
    episodeDuration: 48,
};
getDuration(movie);
getDuration(tvShow);
// instanceof guard
function getFullDate(date) {
    if (date instanceof Date) {
        console.log('date: ', date.toUTCString());
    }
    else {
        console.log('date: ', new Date(date).toUTCString());
    }
}
class Dog {
    constructor(nickname, breed, age, isBreedy) {
        this.nickname = nickname;
        this.breed = breed;
    }
}
class Cat {
    constructor(nickname, breed, age, isBreedy) {
        this.nickname = nickname;
        this.breed = breed;
    }
}
function printData(entity) {
    if (entity instanceof Dog) {
        console.log(`"Here's a puppy ${entity.nickname}`);
    }
    else {
        console.log(`Hey, kitty-kitty-kitty ${entity.nickname}`);
    }
}
const mitty = new Cat('mitty', 'british', 7, true);
const jack = new Dog('Jack', 'German Shepherd', 4, true);
printData(mitty);
printData(jack);
function isBike(vehicle) {
    return vehicle.twoWheeled !== undefined;
}
function makeNoise(vehicle) {
    if (isBike(vehicle)) {
        // vehicle
        return 'brrrrr';
    }
    else {
        // vehicle
        return 'Wroom-wroom';
    }
}
function makeFarmAnimalSound(animal) {
    switch (animal.kind) {
        case 'pig':
            console.log(`Pig ${animal.name} says: Oink!`);
            break;
        case 'rooster':
            console.log(`Rooster ${animal.name} says: Cock-a-doodle-do!`);
            break;
        case 'cow':
            console.log(`Cow ${animal.name} says: Mooooo`);
            break;
        default:
            const _exhaustiveCheck = animal;
            console.log('_exhaustiveCheck', _exhaustiveCheck);
            throw new Error(`Aninal ${animal.name} is not handled right`);
    }
}
const peunik = {
    name: 'Pecia',
    weight: 5,
    age: 2,
    kind: 'rooster',
};
const swini = {
    name: 'Misza',
    weight: 33,
    age: 2,
    kind: 'pig',
};
const zorka = {
    name: 'Zorka',
    weight: 250,
    age: 4,
    kind: 'cow',
};
const lela = {
    name: 'Lela',
    weight: 60,
    age: 3,
    kind: 'sheep',
};
makeFarmAnimalSound(zorka);
makeFarmAnimalSound(swini);
makeFarmAnimalSound(peunik);
makeFarmAnimalSound(lela);
