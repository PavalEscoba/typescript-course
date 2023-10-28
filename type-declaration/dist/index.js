"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const lodash_1 = __importDefault(require("lodash"));
axios_1.default
    .get('https://jsonplaceholder.typicode.com/users/10')
    .then((res) => {
    printUser(res.data);
})
    .catch((error) => {
    console.log('Error!: ', error);
});
axios_1.default
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
    // res.data.forEach(printUser);
})
    .catch((error) => {
    console.log('Error!: ', error);
});
const printUser = (user) => {
    console.log('user name', user.name);
    console.log('user username', user.username);
    console.log('user email', user.email);
    console.log('user phone', user.phone);
};
const a = lodash_1.default.sample([123, 321, 234, 432, 345, 543, 456, 654, 567, 765]);
console.log('a', a);
