// Add your functions here
function map (array, callback) {
    const returnArray = []
    for (let i = 0; i < array.length; i++) {
      returnArray.push(callback(array[i]))
    }
    return returnArray
  }


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