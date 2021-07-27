function normalizeNum(num) {
  let str = String(num);

  if (str.length == 5) {
    str = "0" + str;
  }
  if (str.length == 4) {
    str = "00" + str;
  }
  if (str.length == 3) {
    str = "000" + str;
  }
  if (str.length == 2) {
    str = "0000" + str;
  }
  if (str.length == 1) {
    str = "00000" + str;
  }

  return str;
}

function luckyTicket(num) {
  try {
    if (!Number.isInteger(num) || num >= 1000000) {
      throw Error("incorrect arguments");
    }

    let str = normalizeNum(num);

    // let sumOfThreeFirstNumb = Number(str[0]) + Number(str[1]) + Number(str[2]);
    // let sumOfThreeLastNumb = Number(str[3]) + Number(str[4]) + Number(str[5]);
    // if (sumOfThreeFirstNumb === sumOfThreeLastNumb) {
    //   return "YES";
    // } else {
    //   return "NO";
    // }
    let sumOfThreeFirstNumb = str
      .split("")
      .slice(0, 3)
      .reduce((acc, current) => {
        return (acc += Number(current));
      }, 0);
    let sumOfThreeLastNumb = str
      .split("")
      .slice(3)
      .reduce((acc, current) => {
        return (acc += Number(current));
      }, 0);

    return sumOfThreeFirstNumb === sumOfThreeLastNumb ? "YES" : "NO";
  } catch (error) {
    return error;
  }
}

console.log(luckyTicket(555915));
