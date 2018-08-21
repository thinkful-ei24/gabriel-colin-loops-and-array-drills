function fizzBuzz(countTo) {
  // your code here
  let i = 0;
  let arrOfFizzBuzz = [];

  while (i < countTo) {
    i++;
    console.log(i);
    console.log(countTo);
    if (i % 3 === 0 && i % 5 === 0) {
      arrOfFizzBuzz.push('fizzbuzz');
    } else if (i % 3 === 0) {
      arrOfFizzBuzz.push('fizz');
    } else if (i % 5 === 0) {
      arrOfFizzBuzz.push('buzz');
    } else {
      arrOfFizzBuzz.push(i);
    }
  }
  return arrOfFizzBuzz;
}

/* From here down, you are not expected to
   understand.... for now :)


   Nothing to see here!

*/

// tests
(function testFizzBuzz() {
  // we'll use the variables in our test cases
  const countTo = 16;
  const expected = [
    1,
    2,
    'fizz',
    4,
    'buzz',
    'fizz',
    7,
    8,
    'fizz',
    'buzz',
    11,
    'fizz',
    13,
    14,
    'fizzbuzz',
    16
  ];

  const actual = fizzBuzz(countTo) || [];

  if (
    expected.length === actual.length &&
    expected.every(function(item, index) {
      return actual[index] === item;
    })
  ) {
    console.log('SUCCESS: fizzBuzz is working');
  } else {
    console.log('FAILURE: fizzBuzz is not working');
  }
})();
