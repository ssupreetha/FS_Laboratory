// generator function
function* generatorFunc() {

    // returns 'hello' at first next()
    let x = yield 'hello';
    
    // returns passed argument on the second next()
    console.log(x);
    console.log('some code');

    // returns 5 on second next()
    yield 5;
    
}

const generator = generatorFunc();

console.log(generator.next());
console.log(generator.next(6));
console.log(generator.next());

