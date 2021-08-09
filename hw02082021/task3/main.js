function tickets(peopleInLine) {
  try {
    if (!Array.isArray(peopleInLine) || peopleInLine.length === 0) {
      throw Error("incorrect arguments");
    }
    let moneyForChange = {
      25: 0,
      50: 0,
      100: 0,
    };
    for (let i = 0; i < peopleInLine.length; i++) {
      if (peopleInLine[i] === 25) {
        moneyForChange["25"] += 1;
      } else if (peopleInLine[i] === 50) {
        if (moneyForChange["25"] > 0) {
          moneyForChange["25"] -= 1;
          moneyForChange["50"] += 1;
        } else {
          return "NO";
        }
      } else {
        if (moneyForChange["50"] > 0 && moneyForChange["25"] > 0) {
          moneyForChange["50"] -= 1;
          moneyForChange["25"] -= 1;
          moneyForChange["100"] += 1;
        } else if (moneyForChange["25"] >= 3) {
          moneyForChange["25"] -= 3;
          moneyForChange["100"] += 1;
        } else {
          return "NO";
        }
      }
    }
    return "YES";
  } catch (error) {
    return error;
  }
}

console.log(tickets([25, 25, 50])); // => YES
console.log(tickets([25, 100])); // => NO.
console.log(tickets([25, 25, 50, 50, 100])); // => NO.
console.log(
  tickets([
    25, 25, 25, 100, 25, 25, 25, 100, 25, 50, 25, 100, 25, 25, 50, 100, 25, 50,
    50, 25,
  ])
); // => NO.
