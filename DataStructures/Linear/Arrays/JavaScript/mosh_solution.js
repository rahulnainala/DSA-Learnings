let arr = [];

// Function to add values at specific indexes
let insertAt = (value, index) => {
  arr[index] = value;
};

// Function to remove an element at a specific index
let removeAt = (index) => {
  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.pop();
};

//Function to find Index of an element of array
let indexOf = (value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
};

//Function to find Max Value in an Array
let arrayMax = () => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

//Function to reverse an array
let arrayReverse = () => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    //Swap Elements at start and end
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    //move towards the middle
    start++;
    end--;
  }
};

// Insert values
insertAt(10, 0);
insertAt(29, 1);
insertAt(22, 2);
insertAt(12, 3);
insertAt(33, 4);

console.log("Array is :", arr);

// Remove element at index 2
let val = 2;
removeAt(val);
console.log(`Array after removing the  ${val} Index :`, arr);

let value = 12;
console.log(`The Value ${value} is located at the Index :`, indexOf(value));

console.log("The max value in the Array is :", arrayMax());

arrayReverse();
console.log("Array Reverse :", arr);
