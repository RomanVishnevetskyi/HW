function twoOldestAges(arr) {
  try {
    if (!Array.isArray(arr) || arr.length === 0) {
      throw Error("incorrect arguments");
    }
    let twoAgesArr = arr.sort((a, b) => a - b).slice(-2);
    // .reverse();
    return twoAgesArr;
  } catch (error) {
    return error;
  }
}
console.log(twoOldestAges([1, 2, 10, 8]));
// console.log(twoOldestAges([]));
// console.log(twoOldestAges({}));
