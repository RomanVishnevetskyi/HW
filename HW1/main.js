function createChessBoard(length, width, symbol) {
  /* Здесь будет реализация функции, пока пусто */

  if (
    !Number.isInteger(length) ||
    !Number.isInteger(width) ||
    typeof symbol !== "string"
  ) {
    return showInfo(
      "failed",
      "please,check your arguments 'length' and 'width' must be an integer number' and 'symbol' must be a string"
    );
  }
  if (symbol.length === 0) {
    return showInfo("failed", "symbol length cannot be empty string");
  }
  if (symbol.length > 1) {
    return showInfo("failed", "symbol length must be 1 symbol");
  }
  if (length == 0 || width == 0) {
    return showInfo("failed", "length or width cant be 0");
  }
  // return "*";
}

// Insrtuction if incorrect data
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

describe("createChessBoard", function () {
  it("function was call without arguments", function () {
    expect(createChessBoard()).to.deep.equal(
      showInfo(
        "failed",
        "please,check your arguments 'length' and 'width' must be a number' and 'symbol' must be a string"
      )
    );
  });
  it("function was call with not integer numbers of arguments", function () {
    expect(createChessBoard(4.6, 12.4, "*")).to.deep.equal(
      showInfo(
        "failed",
        "please,check your arguments 'length' and 'width' must be an integer number"
      )
    );
  });
  it("function was call with empty string of symbol", function () {
    expect(createChessBoard(6, 12, "")).to.deep.equal(
      showInfo("failed", "please,check your arguments symbol cant be empty")
    );
  });
  it("function was call with symbol.length >1", function () {
    expect(createChessBoard(6, 12, "***")).to.deep.equal(
      showInfo(
        "failed",
        "please,check your arguments 'symbol' length can't be >1"
      )
    );
  });
  it("function was call with not integer numbers of arguments", function () {
    expect(createChessBoard(0, 12, "*")).to.deep.equal(
      showInfo(
        "failed",
        "please,check your arguments 'length' and 'width' cannot be 0"
      )
    );
  });
});

mocha.run();
