function sequence(n, m) {
  ///
}

mocha.setup("bdd");
const assert = chai.assert;
const expect = chai.expect;

describe("sequence", function () {
  it(`Show result of 3 numbers if square 36.`, function () {
    assert.equal(sequence(3, 36), "Your result : 6, 7, 8");
  });
  it(`Show result of 1 numbers if square 25.`, function () {
    assert.equal(sequence(1, 25), "5");
  });
  it(`It returns  result in string .`, function () {
    assert.equal(typeof sequence(1, 25), "string");
  });

  it(`Failed  when all fields are empty`, function () {
    assert.deepEqual(sequence("", ""), {
      status: "failed",
      reason: "All fields are empty, value cannot be a zero",
    });
  });

  it(`Failed  when length field are empty`, function () {
    assert.deepEqual(sequence("", 36), {
      status: "failed",
      reason: "Length field is empty",
    });
  });

  it(`Failed  when square field are empty`, function () {
    assert.deepEqual(sequence(5, ""), {
      status: "failed",
      reason: "Square field is empty",
    });
  });

  it(`Failed incorrectly entered length and / or square.`, function () {
    assert.deepEqual(sequence("5t", 25), {
      status: "failed",
      reason:
        "Incorrectly entered length and / or square. It must be only a positive number",
    });
  });
  it("Failed   length can't be a negative return Error ", function () {
    assert.equal(sequence(-5, 256), {
      status: "failed",
      reason:
        "Incorrectly entered length and / or square. It must be only a positive number",
    });
  });
});

mocha.run();
