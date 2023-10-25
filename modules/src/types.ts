export interface User {
  username: string;
  email: string;
  logOut(): void;
}

export type Colors = 'red' | 'green' | 'blue';
