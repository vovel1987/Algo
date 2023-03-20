let arr;
let size;
function createArray(arrayLenght) {
  arr = Array(arrayLenght);
  size = 0;
}
function resizearray() {
  let len = arr.length;
  if (len === 0) {
    len = 1;
  } else {
    len *= 2;
  }
  let temp = Array(len);
  for (let i = 0; i < len; i++) {
    temp[i] = arr[i];
  }
  arr = temp;
}
function growSize(n) {
  let len = arr.length;
  if (len === 0) {
    len = 1;
  } else {
    len *= n;
  }
  let temp = Array(len);
  for (let i = 0; i < len; i++) {
    temp[i] = arr[i];
  }
  arr = temp;
  console.log(arr);
}

function append(item) {
  if (arr.lenght <= size) {
    resizearray();
  }
  arr[size] = item;
  size++;
}
function printArray() {
  document.write(arr + "<br>");
}

function remove() {
  //   arr[size - 1] = undefined;
  //   size--;
  if (arr.lenght === undefined) {
    arr.lenght--;
  }
  console.log(arr.lenght);
  return arr;
}

function removeWithIndex(index) {
  for (let i = index; i < size; i++) {
    arr[i] = arr[i + 1];
  }
  size--;
}
function pop() {
  if (!arr.length) return undefined;

  //   const el = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return arr;
}
function clean() {
  arr.length = 0;
}

function set(index, item) {
  arr[index] = item;
}

function contains(elem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == elem) {
      return document.write(true + "<br>");
    }
  }
  return document.write(false + "<br>");
}
function isEmpty() {
  if (!arr.length) {
    return document.write(true + "<br>");
  }
  return document.write(false + "<br>");
}

createArray(0);
for (let i = 0; i < 14; i++) {
  append(i);
}
for (let i = 0; i < 5; i++) {
  pop();
}
// removeWithIndex(1);
growSize(2);
set(1, 9);
contains(5);
// clean();
isEmpty();
printArray();
// createArray();
// append(1);
// append(2);
// append(54)
// printArray();
// document.write(`size =${size} arr.lenght= ${arr.lenght}`);
