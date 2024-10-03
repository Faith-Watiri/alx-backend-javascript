// 0-main.js

import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();

response
  .then((data) => {
    console.log("Promise resolved:", data);
  })
  .catch((error) => {
    console.error("Promise rejected:", error.message);
  });

