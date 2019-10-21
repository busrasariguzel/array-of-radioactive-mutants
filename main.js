function changeLast(arr , item) {
  arr[arr.length - 1] = item;
}


function addMeToEnd(arr) {
  arr.push('Colin');
}

function addMeToStart(arr) {
  arr.unshift('Colin');
}

function changeAllValuesTo(arr, item) {
  return arr.fill(item);
}



// function changeAllValuesTo(arr, item) {
//   let i = 0;
//   while( i < arr.length){
//     arr[i] = value;
//     i++
//   }
// }

function oddOrEven(arr) {
  let i = 0
  while(i < arr.length){
  if (arr[i] % 2 === 0){
    arr[i] = 'even'
  } else{
    arr[i] = 'odd'
  }
  i = i + 1
}
}
//  ternary version;
// ar[i] = arr[i] % 2 === 1 ? 'odd' : 'even':





function changeNextThreeToValue(start, arr, num) {
  let i = start;
  while ( i < start + 3 ){
    arr [i] = num;
    i = i + 1
  }
  
}

// function changeNextThreeToValue(start, arr, num) {
//   let i = start;
//   let count = 0;
//   while ( i < arr.length && count<= 2){
//     arr [i] = num;
//     i = i + 1
//     count ++;
//   }
  
// }

module.exports = {
  changeLast,
  addMeToEnd,
  addMeToStart,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}