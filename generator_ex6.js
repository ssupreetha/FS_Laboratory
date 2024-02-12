// generator function
function* generatorFunc() {
    yield 100;
    yield 200;
}

// returns generator object
const generator = generatorFunc();

console.log(generator.next());

// throws an error
// terminates the generator
console.log(generator.throw(new Error('Error occurred.')));
console.log(generator.next());
