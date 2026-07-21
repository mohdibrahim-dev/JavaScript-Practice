// For Loop 

for(let i = 0 ; i < 5 ; i++){
    console.log(i);
}                                       // it print counting to 0 to n-1, n= 5 that is in 2nd condition. it means it pint number 0,1,2,3,4 only. 5 is not include in it.

let sum = 0
let n = prompt("Enter the value of n")
n= Number.parseInt(n);
for(let j = 0; j < n; j++){
    sum += (j + 1)
}
console.log("Sum of first " + n + " 11natural number is " + sum)



// For in Loop

let obj = {
    harry: 90,
    shubh: 45,
    shivika:56,
    ritika:57,
    shiv: 23
}
for(let a in obj){
    console.log("Marks of " + a + " are " + obj[a])
}
