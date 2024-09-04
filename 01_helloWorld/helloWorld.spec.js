const helloWorld = require('./helloWorld');

describe('Fuck you', function() {
  test('says "Fuck you"', function() {
    expect(helloWorld()).toEqual('Fuck you');
  });
});
