import { sum, sub } from './calc.js';
console.log('The Sum is', sum(2,3));
console.log('The Sub is', sub(5,3));

// calc.js
export const sum = (a, b) => {
    return a + b;
};
export const sub = (a,b) => {
    return a - b;
};
