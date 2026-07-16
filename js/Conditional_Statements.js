let a = prompt("Hey Whats your age?");
a = Number.parseInt(a);                       // convert the string to a number.
// console.log(typeof a)                     // it tels about type of a.

// If Statement and If- else Statement.

if(a>0){
    alert("This is a Valid age");
}
// it work when condition is true , if condition is fals it doesn't work.
else{
    alert("This is an invalid age");
}
// if condition is false then else block is run.


// if-else if Statement.

let age = Number(prompt("Let's check your age. What is your age?"));

if (age < 0) {
    alert("This is an invalid age.");           
} 
else if (age <= 17) {
    alert("You cannot drive yet.");
} 
else if (age === 18) {
    alert("You are eligible to drive a vehicle, but first apply for a license.");
} 
else {
    alert("Congratulations! You can drive, but follow the traffic rules.");
}



// Ternary Operator 

console.log("You can", (age<18? "Not Drive" : "Drive"));