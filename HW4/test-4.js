function palindrome() {
  ////
}

function showInfo(status, reason) {
  return {
    status,
    reason,
  };
}

mocha.setup("bdd");
const assert = chai.assert;
const expect = chai.expect;

//тесты

describe("Palindrome", function () {
  it('Enter correct value. Expect type of result "Number"', function () {
    assert.isNumber(palindrome(), "number");
  });
  it("Function palindrome with parameter 548258859 return 5885", function () {
    assert.equal(palindrome(548258859), 5885);
  });

  it('Enter correct value. Expect type of result "Number"', function () {
    assert.isNotNumber(palindrome("55"), "not number");
  });

  it(`Failed  when field are empty`, function () {
    assert.deepEqual(palindrome(), {
      status: "Failed",
      reason: "Sent field is empty",
    });
  });

  it(`Failed when a submitted palindrome lower than 10!`, function () {
    assert.deepEqual(palindrome(126747474), {
      status: "Failed",
      reason: "The submitted palindrome should be more than 9!",
    });
  });
  it(`Failed when a submitted palindrome longer than 9007199254740991!`, function () {
    assert.deepEqual(palindrome(9007199254740991), {
      status: "Failed",
      reason:
        "The submitted palindrome should be no longer than 9007199254740991!",
    });
  });
  it("Failed when accepts incorrect parameter - string '63879432' ", function () {
    assert.equal(palindrome("63879432"), {
      status: "Failed",
      reason: "Parameter must be a number, '63879432' is not a number",
    });
  });
  it("Failed  input number >=10", function () {
    assert.deepEqual(palindrome(9), {
      status: "Failed",
      reason: "Parameter must be a number>=10,",
    });
  });
  it(`Failed  when sending a negative number!`, function () {
    assert.deepEqual(palindrome(-5), {
      status: "Failed",
      reason: "The submitted palindrome should only contain positive numbers!",
    });
  });
});

mocha.run();
