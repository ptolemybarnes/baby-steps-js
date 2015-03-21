require('../src/fizzBuzz')

describe('fizzBuzz', function() {

  it('Can return the number passed to it', function() {
    expect(fizzBuzz(2)).toEqual(2);
    
  });

  it('Returns Fizz when number is divisible by 3', function() {
    expect(fizzBuzz(3)).toEqual('Fizz');

  })

  it('Returns Buzz when number is divisible by 5' , function() {
    expect(fizzBuzz(5)).toEqual('Buzz');

  })

  it('Returns FizzBuzz when number is divisible by 15', function() {
    expect(fizzBuzz(15)).toEqual('FizzBuzz');

  })
})
