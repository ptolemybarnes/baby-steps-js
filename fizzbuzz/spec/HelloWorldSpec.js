function helloWorld() {
  return "Hello, World!";
}

describe("Hello World", function() {
  it("says hello", function() {expect(helloWorld()).toEqual('Hello, World!');});
});

function fizz(number){
  if(number%3==0) {
    return true;
  }
  return false;
}

function buzz(number){
  if(number%5==0) {
    return true;
  }
  return false;
}

function fizzBuzz(number){
  if(number%15==0) {
    return true;
  }
  return false;
}

function Game(range){
  for (i=0;i<range.length;i++){
    if ( fizzBuzz(range[i]) ) {
      range[i] = "FizzBuzz";
    }
    else { 
      if ( fizz(range[i]) ) 
        range[i] = "Fizz";
      else if ( buzz(range[i]) ) 
        range[i] = "Buzz";
    }
  }
  return range;
}


describe("When passed a nr", function() {
  it("should return Fizz if number is div by 3", function() {
    expect(fizz(3)).toEqual(true);
  });

  it("should not return Fizz if number not div by 3", function() {
    expect(fizz(2)).toEqual(false);
  });

  it("should return Buzz if number not div by 5", function() {
    expect(buzz(5)).toEqual(true);
  });

  it("should not return Buzz if number not div by 5", function() {
    expect(buzz(6)).toEqual(false);
  });

  it("should return FizzBuzz if number div by 15", function() {
    expect(buzz(15)).toEqual(true);
  });


  it("should not return FizzBuzz if number not div by 15", function() {
    expect(buzz(16)).toEqual(false);
  });

});