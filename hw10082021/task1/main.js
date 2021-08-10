////////map()

//console.log(["Яблоко", "Банан", "Ананас"].map((el) => el[0]));

console.log(
  ["Яблоко", "Банан", "Ананас"].reduce((acc, el) => {
    acc.push(el[0]);
    return acc;
  }, [])
);

////////filter()
// console.log(
//   ["Яблоко", "Банан", "Ананас"].filter((el) => el[0].toLowerCase() == "а")
// );

console.log(
  ["Яблоко", "Банан", "Ананас"].reduce((acc, el) => {
    if (el[0].toLowerCase() == "а") {
      acc.push(el);
    }
    return acc;
  }, [])
);

/////////forEach()
// let a = ["Яблоко", "Банан", "Ананас"];
// a.forEach((el, i, arr) => (arr[i] = `${i + 1}:${el};`));

console.log(
  ["Яблоко", "Банан", "Ананас"].reduce((acc, el, i) => {
    acc.push(`${i + 1}:${el}`);
    return acc;
  }, [])
);
