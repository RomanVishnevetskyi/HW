function decodeMorse(str) {
  try {
    if (!typeof str === "string") {
      throw Error("incorrect arguments");
    }

    let morseCode = {
      ".-": "a",
      "-...": "b",
      "-.-.": "c",
      "-..": "d",
      ".": "e",
      "..-.": "f",
      "--.": "g",
      "....": "h",
      "..": "i",
      ".---": "j",
      "-.-": "k",
      ".-..": "l",
      "--": "m",
      "-.": "n",
      "---": "o",
      ".--.": "p",
      "--.-": "q",
      ".-.": "r",
      "...": "s",
      "-": "t",
      "..-": "u",
      "...-": "v",
      ".--": "w",
      "-..-": "x",
      "-.--": "y",
      "--..": "z",
      ".----": "1",
      "..---": "2",
      "...--": "3",
      "....-": "4",
      ".....": "5",
      "-....": "6",
      "--...": "7",
      "---..": "8",
      "----.": "9",
      "-----": "0",
    };
    let result = str
      .split(" ")
      .map((el) => morseCode[el])
      .join("");

    return result;
  } catch (error) {
    return error;
  }
}

console.log(decodeMorse("..... -.-- .--- ..- - ..."));
