var toWeirdCase = require('../src/toWeirdCase.js');

describe("toWeirdCase", function() {

  it('converts a single word to weird case', function() {
    expect(toWeirdCase("hello")).toEqual("HeLlO");
  });

  it('converts a sentence to weird case', function() {
    expect(toWeirdCase("consider that a divorce")).toEqual(
      "CoNsIdEr ThAt A DiVoRcE");
  });
});

  
