import _ from "lodash"; //this will cause an error in the browser!
export function add(x: number, y: number): number {
  return _.add(x, y);
}

export function multiply(x: number, y: number): number {
  return x * y;
}

export function divide(x: number, y: number): number {
  return x / y;
}
