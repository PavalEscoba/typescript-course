function printName(person: { firstName: string; lastName: string }): void {
    console.log('Name ', person.firstName);
}

// printName({ firstName: 2 });
// printName({ firstName: 'Pavel' });
printName({ firstName: 'Pavel', lastName: 'Miatlitski' });

let coordinates: { x: number; y: number } = { x: 7, y: 9 };

function randomCoords(): { x: number; y: string } {
    return { x: Math.random(), y: Math.random() * 10 };
}

// not fine
// printName({
//     firstName: 'Pavel',
//     lastName: 'Miatlitski',
//     age: 37,
//     isFather: true,
// });

const me = {
    firstName: 'Pavel',
    lastName: 'Miatlitski',
    age: 37,
    isFather: true,
};

// fine with parameter
printName(me);

// TYPE ALIASES

type Point = {
    x: number;
    y: number;
    z?: number;
};

let coordinatesNew: Point = { x: 7, y: 9 };

function doublePoint(point: Point): Point {
    return { x: point.x * 2, y: point.y * 2 };
}

type City = {
    foundationYear: number;
    currentPopulation: number | string;
    name: string;
    distrits: {
        districtNumber: number;
        districtNames: string[];
    };
};

function printCity(city: City): void {
    console.log(
        `City ${city.name} was found at ${city.foundationYear} now has a population of ${city.currentPopulation} and has ${city.distrits.districtNumber} disctricts`
    );
}

printCity({
    foundationYear: 1067,
    name: 'Miensk',
    currentPopulation: 'more than 2 billion people',
    distrits: {
        districtNames: ['Sov', 'Kastr', 'Frunz'],
        districtNumber: 9,
    },
});
