function getShortWord(str) {
  try {
    if (typeof str !== "string" || str.length === 0) {
      throw Error("incorrect arguments");
    }
    let strAr = str.split(" ");
    strAr.sort((a, b) => {
      return a.length - b.length;
    });

    return strAr[0].length;
  } catch (error) {
    return error;
  }
}

console.group();
console.log(
  getShortWord("bitcoin take over the world maybe who knows perhaps")
);
console.log(
  getShortWord(
    "turns out random test cases are easier than writing out basic ones"
  )
);
console.log(getShortWord("lets talk about javascript the best language"));
console.log(getShortWord("i want to travel the world writing code one day"));
console.log(getShortWord("Lets all go on holiday somewhere very cold"));
console.groupEnd();
