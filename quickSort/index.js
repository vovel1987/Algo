function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function pivot(arr, start, end) {
  p = arr[end];
  let i = start;
  let j;
  for (j = start; j <= end - 1; j++) {
    if (arr[j] < p) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, i, j);
  return i;
}

function quickSort(arr, start, end) {
  if (start < end) {
    let p = pivot(arr, start, end);
    quickSort(arr, start, p - 1);
    quickSort(arr, p + 1, end);
  }
}

let array = [1, -5, 8, 0, 9, 7, 5, -3];
document.write(array + "<br>");
quickSort(array, 0, array.length - 1);
document.write(array);
