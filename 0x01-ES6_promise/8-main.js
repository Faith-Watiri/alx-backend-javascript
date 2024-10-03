// 8-main.js

import { divideFunction } from './8-try';

try {
  console.log(divideFunction(10, 2)); // This should work fine
  console.log(divideFunction(10, 0)); // This will throw an error
} catch (error) {
  console.error(error.message); // Handle the error and display the error message
}

