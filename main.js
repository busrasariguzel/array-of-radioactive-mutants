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

function oddOrEven(arr) {
  let i = 0
  while(i < arr.length){
  if (arr[i] % 2 === 0){
    r[i] = 'even'
  } else{
    r[i] = 'odd'
  }
  i = i + 1
}
}

function changeNextThreeToValue(start, arr, num) {
  let i = start;
  while ( i < start + 3 ){
    arr [i] = num;
    i = i + 1
  }
  
}

module.exports = {
  changeLast,
  addMeToEnd,
  addMeToStart,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}