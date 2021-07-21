function fibonacci() {
  ///
}

mocha.setup("bdd");
const assert = chai.assert;
const expect = chai.expect;

describe("Fibonacci number range", function () {
  it(`Show result from 1 numbers to 45.`, function () {
    assert.equal(
      fibonacci({ min: 1, max: 45 }),
      [1, 1, 2, 3, 5, 8, 13, 21, 34]
    );
  });
  it("Show result with {length: 4 } return array [ 0, 1, 1, 2,]", function () {
    assert.isArray(
      Fibonacci({ length: 4 }),
      "return correct typeof data  [ 0, 1, 1, 2] is array"
    );
  });
  it(`Show result from 20 numbers to 300.`, function () {
    assert.equal(fibonacci({ min: 20, max: 300 }), [21, 34, 55, 89, 144, 233]);
  });
  it(`Show result from 0 numbers to 50.`, function () {
    assert.equal(
      fibonacci({ min: 0, max: 50 }),
      [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
    );
  });

  it(`Show result with context {length: 5}.`, function () {
    assert.equal(fibonacci({ length: 2 }), [0, 1, 1, 2, 3]);
  });

  it(`Failed  when length 0`, function () {
    assert.deepEqual(fibonacci({ length: 0 }), {
      status: "Failed",
      reason: "Passed numbers must be >0",
    });
  });

  it(`Failed  when length invalid, not a number`, function () {
    assert.deepEqual(fibonacci({ length: "er2" }), {
      status: "Failed",
      reason: "Incorrectly type of length It must be number ",
    });
  });
  it(`Failed  when length is negative number`, function () {
    assert.deepEqual(fibonacci({ length: -5 }), {
      status: "Failed",
      reason: "Amount of length  smaller then 0",
    });
  });

  it(`Failed  when minimum greater then maximum`, function () {
    assert.deepEqual(fibonacci({ min: 50, max: 1 }), {
      status: "Failed",
      reason: "The maximum value must be greater than the minimum",
    });
  });
  it(`Failed  when minimum not a namber`, function () {
    assert.deepEqual(fibonacci({ min: "5k0", max: 19 }), {
      status: "Failed",
      reason: "Incorrectly entered minimum It must be number ",
    });
  });
  it(`Failed  when maximum not a number`, function () {
    assert.deepEqual(fibonacci({ min: "50", max: "1r5" }), {
      status: "Failed",
      reason: "Incorrectly entered maximum It must be number ",
    });
  });
});

mocha.run();
