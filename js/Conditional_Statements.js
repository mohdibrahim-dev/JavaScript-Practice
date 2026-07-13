let a = prompt("Hey Whats your age?");
a = Number.parseInt(a);                       // convert the string to a number.
// console.log(typeof a)                     // it tels about type of a.

if(a>0){
    alert("This is a Valid age");
}
// it work when condition is true , if condition is fals it doesn't work.
else{
    alert("This is an invalid age");
}
// if condition is false then else block is run.