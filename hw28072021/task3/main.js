function meeting(office, neededChairs) {
  try {
    if (!Array.isArray(office) || !Number.isInteger(neededChairs)) {
      throw Error("incorrect arguments");
    }

    if (neededChairs === 0) return "Game On";

    const freeСhairs = office.map(([people, countChairs]) => {
      const possibleСhairs = countChairs - people.length;
      return possibleСhairs >= 0 ? possibleСhairs : 0;
    });

    const takenChairs = freeСhairs.reduce((alreadyTakenChairs, freeСhair) => {
      const alreadyTakenChairsSum = alreadyTakenChairs.reduce(
        (a, b) => a + b,
        0
      );
      const possibleСhairs = neededChairs - alreadyTakenChairsSum - freeСhair;
      const takenChairs = possibleСhairs >= 0 ? freeСhair : 0;

      alreadyTakenChairs.push(takenChairs);
      return alreadyTakenChairs;
    }, []);

    const sumTakenChairs = takenChairs.reduce((a, b) => a + b, 0);
    return sumTakenChairs === neededChairs ? takenChairs : "Недостаточно!";
  } catch (error) {
    return error;
  }
}

console.log(
  meeting(
    [
      ["XXX", 3],
      ["XXXXX", 6],
      ["XXXXXX", 9],
    ],
    4
  )
);

console.log(
  meeting(
    [
      ["XXX", 1],
      ["XXXXXX", 6],
      ["X", 2],
      ["XXXXXX", 8],
      ["X", 3],
      ["XXX", 1],
    ],
    5
  )
);
console.log(
  meeting(
    [
      ["XX", 2],
      ["XXXX", 6],
      ["XXXXX", 4],
    ],
    0
  )
);
console.log(
  meeting(
    [
      ["XX", 2],
      ["XXXX", 6],
      ["XXXXX", 4],
    ],
    4
  )
);
