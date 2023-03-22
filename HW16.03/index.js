let storage = Array(10);
let size = 0;
function enqueue(item) {
  if (size < storage.length) {
    storage[size++] = item;
  }
  //   storage[size++] = item;
}
function dequeue() {
  t = storage[0];
  for (let i = 0; i < size; i++) {
    storage[i] = storage[i + 1];
  }

  return t;
}
function isEmpty() {
  return size === 0;
}
function maxItemInQueue() {
  let max = storage[0];
  for (let i = 1; i < size; i++) {
    if (storage[i] > max) {
      max = storage[i];
    }
  }
  return max;
}
function peek() {
  
  return storage[size - 1];
}

enqueue(1);
enqueue(2);
enqueue(3);
enqueue(-1);
enqueue(10);

document.write(`${storage.join(" ")}<br>`);
// document.write(`pop -> ${dequeue()} <br>`);

// document.write(`${storage.join(" ")}<br>`);
// document.write(`pop -> ${dequeue()} <br>`);
document.write(`maxItemInQueue = ${maxItemInQueue()} <br>`);
document.write(`${storage.join(" ")}<br>`);
document.write(`peek = ${peek()} <br>`);
