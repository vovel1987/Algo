const arr1 = [1, 2, 5, 4, 0];
const arr2 = [0, 4, 5, 2, 1];
// const arr2 = [1, 2, 5, 4, 0];

function isEqual(a, b) {
  return JSON.stringify(a) !== JSON.stringify(b) ? false : true;
}

function isEqual2(a, b) {
  if (a.length !== b.length) {
    return false;
  }
const a1 =[...a].sort()
const b1 =[...b].sort()

  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== b1[i]) {
      return false;
    }
    return true;
  }
}

function isEqual3(a,b){
 return a.length === b.length && a.every((value,index) => value === b[index]) ? true : false
}

console.log(isEqual(arr1, arr2));
console.log(isEqual2(arr1, arr2));
console.log(isEqual3(arr1,arr2));

