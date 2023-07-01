// parameter is 'any'

function square(num) {
    num();
    num.thing;
    num.toUpperCase();
    return num * num;
}

square('Live');

// declare parameter

function cubiding(num: number): number {
    num();
    return num * num * num;
}

cubiding(4);
cubiding('two');

function greet(name: string): string {
    return `Hello ${name}`;
}

function smthDone(name: string = 'Paul'): string {
    return `Hello ${name}`;
}

function rando(num: number): string | number {
    if (Math.random() > 0.5) return num.toString();
    else return num;
}
