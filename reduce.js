
const words = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

const reduceDecoder = function(str){
  const wordsArray = str.split(' ');   //array of original string
  const reducedArray = wordsArray.reduce((x='', amount, index, array) =>{ 
      if (wordsArray[index].length === 3) {
      x = x + ' ';
      }
      else {
      x = x + array[index].charAt(array[index.length - 1]).toUpperCase();
      }
      console.log(x);
      } )
  return reducedArray;
}
console.log(words);
console.log(reduceDecoder(words));
