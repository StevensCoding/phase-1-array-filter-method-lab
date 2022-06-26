// Code your solution here
function findMatching(drivers, string){
    let person = drivers.filter(name => name.toLowerCase() === string.toLowerCase())
    return person;
}
const fuzzyMatch = (drivers, start) => {
    return drivers.filter(driver => driver.startsWith(start))
}

function matchName(drivers, name){
    let match = drivers.filter(driver => driver.name === name)
    return match;
  }
