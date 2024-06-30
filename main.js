let input = 'Hello! How are you?';
input = input.toLowerCase();
const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (i = 0; i < input.length; i++) {
  // console.log(i);
  for (v = 0; v < vowels.length; v++) {
    // console.log(v);
    if (input[i] === vowels[v]) {
      // console.log(input[i])
      resultArray.push(input[i]);

      if (input[i] === 'e') {
        resultArray.push(input[i]);
      }  
        if (input[i] === 'u') {
          resultArray.push(input[i]);
      }
    }
  }
}

  // console.log(resultArray);

let resultString = resultArray.join('');

console.log(resultString.toUpperCase());
