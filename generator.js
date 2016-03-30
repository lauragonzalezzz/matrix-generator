var matrixGenerator = function(num1, num2){
  var total = (num1 * num2);
  var outputArray = [];

// Populates array with random numbers between 1-100
  for (var i = 0; i < total; i++) {
    outputArray.push(Math.floor(Math.random()* 100));
  }

// Sorts numbers numerically
  outputArray.sort(function(a,b){
    return a - b;
  });

// Creates new arrays with specified numbers (num 1) for each column specified (num2)
// Populates output array with new column arrays containing sorted random numbers
  function createBabyArrays(){
    for (var k = 0; k < num1; k++) {
    tempArray = null;
    tempArray = outputArray.splice(k, num1);
    outputArray.unshift(tempArray);
    };
  };
  createBabyArrays();
  outputArray = outputArray.reverse();
  return outputArray;

}; //End of matrixGenerator

console.log(matrixGenerator(4,4));