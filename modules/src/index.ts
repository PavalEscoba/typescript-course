import { formatDate, getRandomNumber as randomiseNumber } from './utils.js';
import thingy, { userHelper } from './User.js';

const today: Date = new Date();
const formattedDate: string = formatDate(today);
console.log(formattedDate);

const randomNum: number = randomiseNumber(1, 100);
console.log(randomNum);

const roboUser = new thingy('RoboUser77', 'robouser@gg.gg', 'red');
roboUser.logOut();
userHelper();
