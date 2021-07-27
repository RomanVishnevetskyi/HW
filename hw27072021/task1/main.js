function sumMin(arr) {
  try {
    if (!Array.isArray(arr) || arr.length === 0) {
      throw Error("incorrect arguments");
    }
    return arr.reduce((acc, el) => {
      const minValue = Math.min(...el);
      return acc + minValue;
    }, 0);
  } catch (error) {
    return error;
  }
}

// function sumMin(arr) {
//   let sumMin = 0;
//   for (let subArr of arr) {
//     subArr.sort((a, b) => {
//       return a - b;
//     });
//     sumMin += subArr[0];
//   }
//   return sumMin;
// }

console.log(
  sumMin([
    [1, 2, 3],
    [33, 22, 55],
    [16, 42, 345, 79, 1],
  ])
); // 1 + 22 + 1 = 24

console.log(
  sumMin([
    [11, 2],
    [323, 2, 55],
  ])
); // 2 + 2 = 4

console.log(
  sumMin([
    [13, 11, 2],
    [3, 23, 23, 55],
    [23, 55, 3, 77],
    [39, 7, 89, 94],
  ])
); // 2 + 3 + 3 + 7 = 15
