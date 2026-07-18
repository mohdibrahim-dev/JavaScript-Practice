let a = prompt("Hey Whats your age?");
a = Number.parseInt(a); // convert the string to a number.
// console.log(typeof a)                     // it tels about type of a.

// If Statement and If- else Statement.

if (a > 0) {
  alert("This is a Valid age");
}
// it work when condition is true , if condition is fals it doesn't work.
else {
  alert("This is an invalid age");
}
// if condition is false then else block is run.

// if-else if Statement.

let age = Number(prompt("Let's check your age. What is your age?"));

if (age < 0) {
  alert("This is an invalid age.");
} else if (age <= 17) {
  alert("You cannot drive yet.");
} else if (age === 18) {
  alert("You are eligible to drive a vehicle, but first apply for a license.");
} else {
  alert("Congratulations! You can drive, but follow the traffic rules.");
}

// Ternary Operator

console.log("You can", age < 18 ? "Not Drive" : "Drive");

// Prectice Test Chapter 2

// Q1

let personAge = prompt("What is your age?");

if (personAge > 10 && personAge < 20) {
  console.log("Your age Lies between 10 and 20");
} else {
  console.log("Your age dosen't lies between 10 and 20");
}

// Q2

let ages = prompt("What is your age buddy?");
switch (ages) {
  case "12":
    console.log("Your age is 12");
    break;
  case "13":
    console.log("Your age is 13");
    break;
  case "14":
    console.log("Your age is 14");
    break;
  case "15":
    console.log("Your age is 15");
    break;
  default:
    console.log("Your age is not special");
}


// Q3

let num = prompt("What is you Number")
num = Number.parseInt(num)
if(num % 2 == 0 && num % 3 == 0){
    console.log("Your number is divisible by 2 and 3");
}
else{
    console.log("Your number is not divisable by 2 and 3")
}


// Q 4

let driveAge = prompt("Check Age for Driving. what is your Age? ")

console.log("You Can ", driveAge<18 ? "Not Drive" : "Drive" )