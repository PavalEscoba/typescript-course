import { type User as UserType, Colors } from './types.js';

export default class User implements UserType {
  constructor(
    public username: string,
    public email: string,
    public color: Colors
  ) {}
  logOut() {
    console.log(`${this.username} is logged out`);
  }
}

export function userHelper() {
  console.log("I've just helped you! What else do you want me to do?");
}
