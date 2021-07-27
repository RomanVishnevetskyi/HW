function getRoomArea(h, w, l) {
  return 2 * (h * w + l * w);
}

function countAmountPaint(areaRoom, volumeOneJar) {
  return areaRoom / volumeOneJar;
}

function countPaintJar(h, w, l) {
  try {
    Array.from(arguments).forEach((item) => {
      if (!Number.isInteger(item) || item >= 1000) {
        throw Error("incorrect arguments");
      }
    });

    const volumeOneJar = 16;
    const roomArea = getRoomArea(h, w, l);
    const amountPaint = countAmountPaint(roomArea, volumeOneJar);

    return `Необходимо ${Math.ceil(amountPaint)} банок краски`;
  } catch (error) {
    return error;
  }
}

console.log(countPaintJar(15, 17, 10));
