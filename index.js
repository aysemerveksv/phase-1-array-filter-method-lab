// Code your solution here
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
  }
  
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
  }
  
  function matchName(drivers, query) {
    return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
  }
  const drivers = ["John", "Jane", "Jessica", "Mark", "Mike"];

console.log(findMatching(drivers, "john")); // Output: ["John"]
console.log(fuzzyMatch(drivers, "ja")); // Output: ["Jane", "Jessica"]
console.log(matchName([{ name: "John", hometown: "New York" }, { name: "Jane", hometown: "Los Angeles" }], "john")); // Output: [{ name: "John", hometown: "New York" }]

