// generator function
function* generatorFunc() {
    yield 100;
   return 123;
   console.log("2. some code before second yield");
    yield 200;
}

// returns generator object
const generator = generatorFunc();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

