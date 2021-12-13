// Expected result : [7, 3, 1, 2, 5, 6, 9, 10, 4, 8]
// Direction : Mutate arr1 to return combined array with arr2. The conditions are :
// 1. odd number at beginning 
// 2. even number at the end of array 
// 3. Original arr1 at the middle

const arr1 = [1, 2, 5, 6, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(arr1, arr2) {

  let x = new Set(arr2.concat(arr1));

  for(let i = 0; i < arr1.length; i++){

    x.delete(arr1[i]);
  }

  let arr3 = Array.from(x);


  for(let i = 0; i < arr3.length; i++){

    if(arr3[i] & 1){
      arr3[i] *= -1;
    }

  }

  arr3.sort((a, b) => a -b);

  for(let i = -3; i < arr3.length; i++){

    if(arr3[i] & 1){
      arr3[i] *= -1;
    }
  }


  k = 0;
  let newArray = [];

  for(let j = 0; j < arr3.length; j++){

    if(j == arr3.length / 2){

      for(let i = 0; i < arr1.length; i++){

        newArray[k++] = arr1[i];
      }
    }

    newArray[k++] = arr3[j];
  }

  return newArray;
}

console.log(result(arr1, arr2));