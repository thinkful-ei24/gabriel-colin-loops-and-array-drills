const words =
  'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

const reduceDecoder = function(str) {
  const wordsArray = str.split(' '); //array of original string
  const reducedArray = wordsArray.reduce((word, amount) => {
    if (amount.length === 3) {
      return word + ' ';
    } else {
      return word + amount.charAt(amount.length - 1).toUpperCase();
    }
  }, '');
  return reducedArray;
};
console.log(reduceDecoder(words));
