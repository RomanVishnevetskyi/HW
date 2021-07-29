function order(str) {
  try {
    if (typeof str !== "string") {
      throw Error("incorrect arguments");
    }
    if (str.length === 0) {
      return "";
    }

    return str
      .split(" ")
      .sort(function (a, b) {
        return a.match(/[1-9]/) - b.match(/[1-9]/);
      })
      .join(" ");
  } catch (error) {
    return error;
  }
}

console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
