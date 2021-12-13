// Expected Result : 6
// Direction : Get the total of "1" in binary value of number input
const number = 221;

function result(num) {
  
  let x = num.toString(2);
  let y = x.split(1).length - 1;

  return y;
}

console.log(result(number));