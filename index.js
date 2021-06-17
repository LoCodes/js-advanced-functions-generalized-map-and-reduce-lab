// Add your functions here
// my own map-like methods
//     map returns an array with all values made negative
//       ✓ transforms correctly
//       map returns an array with the original values
//         ✓ transforms correctly
//       map returns an array with the original values multiplied by 2
//         ✓ transforms correctly
//       map returns an array with the original values squared
//         ✓ transforms correctly


function map (array, callback) {
    const returnArray = []
    for (let i = 0; i < array.length; i++) {
      returnArray.push(callback(array[i]))
    }
    return returnArray
}


//   my own reduce-like methods
//     reduce returns a running total when not given a starting point
//       ✓ reduces correctly
//     reduce returns a running total when given a starting point
//       ✓ reduces correctly
//     reduce returns true when all values are true
//       ✓ reduces correctly
//     reduce returns false when any value is false
//       ✓ reduces correctly
//     reduce returns true when a true value is present
//       ✓ reduces correctly
//     reduce returns false when no true value is present
//       ✓ reduces correctly

  function reduce (array, cb, startValue) {
    let runningTotal
    if (startValue) {
      runningTotal = startValue
      for (let i = 0; i < array.length; i++) {
        runningTotal = cb(array[i], runningTotal)
      }
    } else {
      runningTotal = array[0]
      for (let i = 1; i < array.length; i++) {
        runningTotal = cb(array[i], runningTotal)
      }
    }
    return runningTotal
}