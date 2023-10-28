import axios from 'axios';
import _ from 'lodash';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

axios
  .get<User>('https://jsonplaceholder.typicode.com/users/10')
  .then((res) => {
    printUser(res.data);
  })

  .catch((error) => {
    console.log('Error!: ', error);
  });

axios
  .get<User[]>('https://jsonplaceholder.typicode.com/users')
  .then((res) => {
    res.data.forEach(printUser);
  })

  .catch((error) => {
    console.log('Error!: ', error);
  });

const printUser = (user: User) => {
  console.log('user name', user.name);
  console.log('user username', user.username);
  console.log('user email', user.email);
  console.log('user phone', user.phone);
};

const a = _.sample([123, 321, 234, 432, 345, 543, 456, 654, 567, 765]);
console.log('a', a);
