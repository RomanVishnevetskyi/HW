function luckyTickets() {
  ////
}

mocha.setup("bdd");
const assert = chai.assert;
const expect = chai.expect;

describe("Lucky Tickets", function () {
  it(`Function with correct data.`, function () {
    assert.deepEqual(luckyTickets({ min: 1, max: 10 }), { min: 1, max: 10 });
  });

  it(`Show result if winner hard.`, function () {
    assert.equal(luckyTickets({ min: 5000, max: 9000 }));
  });

  it(`Show result if winner simple.`, function () {
    assert.equal(luckyTickets({ min: 100000, max: 200000 }), "WINNER: simple");
  });

  it(`Failed  when all fields are empty`, function () {
    assert.deepEqual(luckyTickets({ min: null, max: null }), {
      status: "Failed",
      reason: "All fields are empty, value cannot be a null",
    });
  });
  it(`Failed  when one of the fields is a negative number`, function () {
    assert.deepEqual(luckyTickets({ min: -5, max: 5 }), {
      status: "Failed",
      reason:
        "Incorrectly entered min and / or max. It must be only a positive number",
    });
  });
  it(`Failed  when min field is empty`, function () {
    assert.deepEqual(luckyTickets({ min: null, max: 6 }), {
      status: "Failed",
      reason: "Min field is empty",
    });
  });
  it(`Failed  when max field is empty`, function () {
    assert.deepEqual(luckyTickets({ min: 8, max: null }), {
      status: "Failed",
      reason: "Max field is empty",
    });
  });
  it(`Failed  when the minimum value higher than the maximum value.`, function () {
    assert.deepEqual(luckyTickets({ min: 15, max: 2 }), {
      status: "Failed",
      reason: "The minimum value must be less than the maximum value.",
    });
  });
  it(`Failed  when the maximum value exceed 999999.`, function () {
    assert.deepEqual(luckyTickets({ min: 1, max: 1000000 }), {
      status: "Failed",
      reason: "The possible maximum value cannot be 999999.",
    });
  });
});

mocha.run();
