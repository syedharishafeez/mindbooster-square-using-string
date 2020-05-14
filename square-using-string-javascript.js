let inputString = "acd";

console.time("Total Execution Time = ");

let startTime = new Date().getTime();
function repeatedCharacters(wholeString) {
  var obj = {};
  for (x = 0; x < wholeString.length; x++) {
    var l = wholeString.charAt(x);
    obj[l] = isNaN(obj[l]) ? 1 : obj[l] + 1;
  }
  return obj;
}

function comparing_method(inputStringMethod, outputStringMethod) {
  if (inputStringMethod.length !== outputStringMethod.length) {
    return false;
  }
  for (
    let matchingIndex = 0;
    matchingIndex < inputStringMethod.length;
    matchingIndex++
  ) {
    if (
      inputStringMethod[matchingIndex] !== outputStringMethod[matchingIndex]
    ) {
      return false;
    }
  }
  return true;
}

if (inputString.length >= 1 && inputString.length < 10) {
  let inputStringArray = Object.values(repeatedCharacters(inputString)).sort();
  let maximum_value = Math.ceil(Math.sqrt(10 ** inputString.length - 1));
  let minimum_value = Math.ceil(Math.sqrt(10 ** (inputString.length - 1) - 1));

  let finalResult = -1;
  for (let i = maximum_value; i > minimum_value; i--) {
    let outputStringArray = Object.values(
      repeatedCharacters(`${i ** 2}`)
    ).sort();
    if (comparing_method(inputStringArray, outputStringArray)) {
      finalResult = i ** 2;
      break;
    } else {
      continue;
    }
  }

  console.log("finalResult = ", finalResult);
} else {
  console.log("The length of input should be in between 0 - 10");
}

console.timeEnd("Total Execution Time = ");
