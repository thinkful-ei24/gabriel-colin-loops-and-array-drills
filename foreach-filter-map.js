const turtleSteps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
function logTotalSteps(arr) {
  arr
    .filter(steps => steps[0] >= 0 && steps[1] >= 0)
    .map(steps => steps[0] + steps[1])
    .forEach(steps => console.log(steps));
}

logTotalSteps(turtleSteps);
