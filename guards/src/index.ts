// typeof guards
function triple(value: string | number) {
  if (typeof value === 'string') {
    return value.repeat(3);
  }
  return value * 3;
}

// truthiness guard
const splitingWord = (word?: string) => {
  if (word) {
    for (let char of word) {
      console.log('letter: ', char);
    }
  } else {
    console.log("you didn't pass any word ");
  }
};

// in operator

interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numOfEpisodes: number;
  episodeDuration: number;
}

const getDuration = (item: Movie | TVShow) => {
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
function getFullDate(date: string | Date) {
  if (date instanceof Date) {
    console.log('date: ', date.toUTCString());
  } else {
    console.log('date: ', new Date(date).toUTCString());
  }
}

class Dog {
  constructor(
    public nickname: string,
    public breed: string,
    age: number,
    isBreedy: boolean
  ) {}
}

class Cat {
  constructor(
    public nickname: string,
    public breed: string,
    age: number,
    isBreedy: boolean
  ) {}
}

function printData(entity: Dog | Cat) {
  if (entity instanceof Dog) {
    console.log(`"Here's a puppy ${entity.nickname}`);
  } else {
    console.log(`Hey, kitty-kitty-kitty ${entity.nickname}`);
  }
}

const mitty = new Cat('mitty', 'british', 7, true);
const jack = new Dog('Jack', 'German Shepherd', 4, true);

printData(mitty);
printData(jack);

// Type predicate
interface Car {
  brand: string;
  mileage: number;
}

interface Bike {
  brand: string;
  mileage: number;
  twoWheeled: boolean;
}

function isBike(vehicle: Car | Bike): vehicle is Bike {
  return (vehicle as Bike).twoWheeled !== undefined;
}

function makeNoise(vehicle: Car | Bike) {
  if (isBike(vehicle)) {
    // vehicle
    return 'brrrrr';
  } else {
    // vehicle

    return 'Wroom-wroom';
  }
}

// discriminated unions
interface Pig {
  name: string;
  age: number;
  weight: number;
  kind: 'pig';
}

interface Rooster {
  name: string;
  age: number;
  weight: number;
  kind: 'rooster';
}

interface Cow {
  name: string;
  age: number;
  weight: number;
  kind: 'cow';
}

interface Sheep {
  name: string;
  age: number;
  weight: number;
  kind: 'sheep';
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;

function makeFarmAnimalSound(animal: FarmAnimal) {
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
      const _exhaustiveCheck: never = animal;
      console.log('_exhaustiveCheck', _exhaustiveCheck);
      throw new Error(`Aninal ${animal.name} is not handled right`);
  }
}

const peunik: Rooster = {
  name: 'Pecia',
  weight: 5,
  age: 2,
  kind: 'rooster',
};

const swini: Pig = {
  name: 'Misza',
  weight: 33,
  age: 2,
  kind: 'pig',
};

const zorka: Cow = {
  name: 'Zorka',
  weight: 250,
  age: 4,
  kind: 'cow',
};

const lela: Sheep = {
  name: 'Lela',
  weight: 60,
  age: 3,
  kind: 'sheep',
};

makeFarmAnimalSound(zorka);
makeFarmAnimalSound(swini);
makeFarmAnimalSound(peunik);
makeFarmAnimalSound(lela);
