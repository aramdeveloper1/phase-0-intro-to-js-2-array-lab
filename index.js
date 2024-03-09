// Function to destructively append a cat to the end of the array
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Function to destructively prepend a cat to the beginning of the array
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Function to destructively remove the last cat from the array
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Function to destructively remove the first cat from the array
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Function to append a cat to the end of the array without modifying the original array
function appendCat(name) {
  return cats.concat(name);
}

// Function to prepend a cat to the beginning of the array without modifying the original array
function prependCat(name) {
  return [name].concat(cats);
}

// Function to remove the last cat from the array without modifying the original array
function removeLastCat() {
  return cats.slice(0, -1);
}

// Function to remove the first cat from the array without modifying the original array
function removeFirstCat() {
  return cats.slice(1);
}
