
const hazardWarning = function(typeOfWarning) {
  let warningCounter = 0;
  return function(location) {
    warningCounter++;
    console.log(`Danger! There is ${typeOfWarning} hazard at ${location}`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  }
}

const rocksWarning = hazardWarning('rocks');
rocksWarning('1st street');

const fireWarning = hazardWarning('fire'); 
fireWarning('california');

const smokeWarning = hazardWarning('smoke');
smokeWarning('seattle');

smokeWarning('Spokane');
