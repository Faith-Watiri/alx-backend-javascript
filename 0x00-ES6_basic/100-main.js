export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const employee of reportWithIterator) {
    result += `${employee} | `;
  }
  // Remove the trailing ' | ' if there is any
  return result.slice(0, -3);
}

