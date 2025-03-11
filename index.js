// Write your solution in this file!
// Declare customerName in global scope
var customerName = "bob";

// Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to set bestCustomer
function setBestCustomer() {
  bestCustomer = "not bob";
}

// Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

// Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = "someone";

// Function to attempt to change leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "anyone"; // This should fail
}