/* 
* Merge sort
*
* Runtime: n * log(n)
* Space: o(n)
*/

const mergeSortedArrays = (array: number[], leftStart, rightEnd, helperArray) => {
  const leftEnd = Math.floor((rightEnd + leftStart) / 2);
  const rightStart = leftEnd + 1;

  let li = leftStart;
  let ri = rightStart;
  let i = leftStart;

  
  while (li <= leftEnd && ri <= rightEnd) {
    if (array[li] <= array[ri]) {
      helperArray[i] = array[li];
      li++;
      i++;
    }
    else {
      helperArray[i] = array[ri];
      ri++;
      i++;
    }
  }
  
  // Copy remaining, uncopied items into helperArray
  const leftLength = leftStart + leftEnd;
  if (li < leftLength - 1) {
    helperArray.splice(leftStart + li, leftLength - li, ...array.slice(li, leftEnd));
  }
  const rightLength = rightEnd - rightStart;
  if (ri < rightLength - 1) {
    helperArray.splice(ri + rightStart, rightLength - ri, ...array.slice(ri, rightEnd));
  }
  return helperArray;
}

const mergeSort = (array, start, end, helperArray) => {
  if (start >= end) {
    return;
  }
  const middle = Math.floor((start + end) / 2);
  mergeSort(array, start, middle, helperArray);
  mergeSort(array, middle + 1, end, helperArray);
  return mergeSortedArrays(array, start, end, new Array(array.length));
};


/* 
* Quick sort
*
* Runtime: n * log(n) 
* Space: o(n)
*/

const swap = (array, lefti, righti) => {
  const tempL = array[lefti]
  const tempR = array[righti]
  array[lefti] = tempR;
  array[righti] = tempL;
}

const performSwapsAndReturnLeftIndex = (array, lefti, righti, pivot) => {  
  while (lefti <= righti) {
    while(array[lefti] < pivot) {
      lefti++;
    }
    while(array[righti] > pivot) {
      righti--;
    }
    if (lefti <= righti) {
      swap(array, lefti, righti);
      lefti++;
      righti--;
    }
  }
  return lefti;
};

const quickSort = (array, lefti, righti) => {
    if (lefti >= righti) {
      return;
    }
    const pivotVal = array[lefti];
    var pivoti = performSwapsAndReturnLeftIndex(array, lefti, righti, pivotVal);
    if (lefti < pivoti - 1) {
      quickSort(array, lefti, pivoti - 1);
    }
    if (righti > pivoti) {
      quickSort(array, pivoti, righti);
    }

    return array;
};



// Run the functions
const testArray = [55, 5, 1, 9, 10, 666, 2, 7, 5, 8]; // Length of 10

console.log('Starting merge sort with input:', testArray);
console.log('Answer:', mergeSort(testArray, 0, testArray.length, new Array(testArray.length)));

// console.log('Starting quick sort with input:', testArray);
// console.log(quickSort(testArray, 0, testArray.length - 1));