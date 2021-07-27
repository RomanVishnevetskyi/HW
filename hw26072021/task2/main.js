function getPriceForSand(a1, a2, a3, b1, b2, b3) {
  try {
    Array.from(arguments).forEach((item) => {
      if (!Number.isInteger(item) || item >= 100) {
        throw Error("incorrect arguments");
      }
    });

    let priceSort = Array.from(arguments)
      .slice(0, 3)
      .sort((a, b) => {
        return b - a;
      });
    let weightSort = Array.from(arguments)
      .slice(3)
      .sort((a, b) => {
        return b - a;
      });
    let price = 0;
    for (let i = 0; i < priceSort.length; i++) {
      price += priceSort[i] * weightSort[i];
    }
    return price;
    // return priceSort.reduce((acc, item, i) => acc + item * weightSort[i], 0);
  } catch (error) {
    return error;
  }
}
console.log(getPriceForSand(22, 5, 16, 9, 8, 22));
