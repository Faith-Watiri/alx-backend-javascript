// 0-promise.js

export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const apiWorks = false; // Simulating that the API is not working

    if (apiWorks) {
      resolve("Success");
    } else {
      reject(new Error("The fake API is not working currently"));
    }
  });
}

