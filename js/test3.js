// Expected Result : [false, true]
// Direction :
// The first value : If all of arr2 has bigger value than the biggest value of arr1;
// The second value : If some of arr2 has smaller value than the smallest value of arr1;
const arr1 = [4, 6, 2, 3, 5];
const arr2 = [1, 3, 4, 7, 9, 10];

function result(arr1, arr2) {

  let firstValue = Boolean;
  let biggestOnArr1 = Math.max(...arr1);

  for(let i = 0; i < arr2.length; i++){

    if(arr2[i] > biggestOnArr1){

      firstValue = true;
    } else{

      firstValue = false;
      break;
    }
  }

  let secondValue = Boolean;
  let smallestOnArr1 = Math.min(...arr1);

  for(let i = 0; i < arr2.length; i++){

    if (arr2[i] < smallestOnArr1) {
      
      secondValue = true;
      break;

    } else{

      secondValue = false;
    }
  }

  const res = [firstValue, secondValue];

  return res;

}

console.log(result(arr1, arr2));