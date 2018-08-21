const words =
  'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

const reduceDecoder = function(str) {
  const wordsArray = str.split(' '); //array of original string
  const reducedArray = wordsArray.reduce((x, amount) => {
    // console.log(`${index} is index`);
    if (amount.length === 3) {
      // console.log('word is 3 chars');
      return x + ' ';
    } else {
      // console.log('adding last char');
      return x + amount.charAt(amount.length - 1).toUpperCase();
    }
    // console.log(x);
    // return x;
  }, '');
  return reducedArray;
};
// console.log(words);
console.log(reduceDecoder(words));

// noggin, oreo
