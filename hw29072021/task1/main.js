function ipsBetween(start, end) {
  start = start.split(".");

  return end.split(".").reduce(function (sum, cur, i) {
    return (sum << 8) + Number(cur) - Number(start[i]);
  }, 0);
}

console.log(ipsBetween("10.0.0.0", "10.0.0.50")); // === 50
console.log(ipsBetween("10.0.0.0", "10.0.1.0")); // === 256
console.log(ipsBetween("20.0.0.10", "20.0.1.0")); // === 246
console.log(ipsBetween("20.0.0.0", "20.1.0.0")); // 65536
console.log(ipsBetween("20.0.2.0", "20.33.0.0")); //
