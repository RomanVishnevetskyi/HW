function envelopAnalys(envelop1, envelop2) {
  /* Здесь будет реализация функции, пока пусто */
  if (envelop1 == null || envelop2 == null) {
    return showInfo(
      "failed",
      "please,check your arguments must be obj{a:n,b:n} with 'height:number' and 'width:number'"
    );
  }
  if (
    !isFloat(envelop1.height) ||
    !isFloat(envelop1.width) ||
    !isFloat(envelop2.height) ||
    !isFloat(envelop2.width)
  ) {
    return showInfo("falied", "one of 4 side is not float");
  }
  if (
    (envelop1.height < envelop2.height && envelop1.width < envelop2.width) ||
    (envelop1.height < envelop2.width && envelop1.width < envelop2.height)
  ) {
    return 1;
  } else if (
    (envelop1.height > envelop2.height && envelop1.width > envelop2.width) ||
    (envelop1.height > envelop2.width && envelop1.width > envelop2.height)
  ) {
    return 2;
  } else {
    return 0;
  }
}

function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
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

describe("envelopAnalys", function () {
  it("function was call without arguments", function () {
    expect(envelopAnalys(null, null)).to.deep.equal(
      showInfo(
        "failed",
        "please,check your arguments must be obj with 'height:number' and 'width:number'"
      )
    );
  });
  it("function was call with not float numbers of arguments", function () {
    expect(
      envelopAnalys({ height: 8, width: 14.5 }, { height: 4.5, width: 9.5 })
    ).to.deep.equal(showInfo("falied", "one of 4 side is not float"));
  });

  it("envelop1 can put in envelop2", function () {
    expect(
      envelopAnalys({ height: 5.5, width: 8.5 }, { height: 9.5, width: 15.5 })
    ).to.equal(1);
  });
  it("envelop2 can put in envelop1", function () {
    expect(
      envelopAnalys({ height: 32.5, width: 42.6 }, { height: 8.6, width: 5.2 })
    ).to.equal(2);
  });

  it("envelop1 or envelop2 cant put in each other", function () {
    expect(
      envelopAnalys({ height: 12.5, width: 12.5 }, { height: 15.3, width: 8.5 })
    ).to.equal(0);
  });
});

console.log(
  envelopAnalys({ height: 32.5, width: 42.6 }, { height: 8.6, width: 5.2 })
);

mocha.run();
