//====================== Basics of JavaScript =============================

console.log("This is my first Programing");           // its print 'This is my first Programing'.

// Variables Declaration 

let a = 6799999999;                   // a is a container Name and it store 6799999999.
console.log(a)                      // it print the value of a that is 6799999999.



// var a = 45;                    // var is old method to declare variables it give some bugs.
// var a = "p"                   // var can be re declare and can not give any error.

let b = "Mohd Ibrahim";          // let is Es6 modren way to write we re declare its value but not assign variables with same name .
b = 4                          // assign new value of b.

// block declaration    it run inside block and give its print block b assigned values.
{
    let b = 'this'
    console.log(b)
}

console.log(b)                 // it give the value of outside block assigne value.


const author = "Ibrahim" ;       // const can not be declare or cannot re assigned its value.

// let author = 5              // author is allready declared we can not assigned it again .

// author = 5                   it also give error because author is declared and can not be re declared.




//========================== Primitives and Objects ===============================

console.log("Primitives ")  
let a1 = null;                                 // Nul
let b1 = 345;                                  // Number
let c = true;  //can also be false.             // boolion
let d = BigInt("567")                           // BigInt (Integer)    
let e = "Harry";                                // String      
let f = Symbol("I am a nice symbol");            // Symbol
let g = undefined;                               // undefined 

console.log(a1, b1, c, d, e, f, g);
console.log(typeof g);                           // check the type of Primitives .


//========================== Objects ===============================

console.log("Objects");

const items = {
    "Ibrahim" : true,
    "Samar" : false,
    "Lovish" : 67,
    "Rohn" : undefined
}

console.log(items["Ibrahim"]);
console.log(items)




// ===========================================  Practice 1 ==========================================  

// Questin 1 

// method 1 
let name = "Rohan Sharma";
let addName = name + 1;

console.log(addName);

// method 2
let name1 = "Rohan";
let name3 = 5;
console.log(name1 + name3)

// Questin 2 

console.log(typeof name);

// Questin 3

const nameList = {
    name : "Ajay kumar",
    section : 1,
    isPrincipal : false
};
console.log(nameList);

// Q3 NO we can not add any thing is this Const .  

// Questin 4

nameList["friend"] = "Shubham";                       // yes it add new Key to Const Object in Questin 3.
nameList["name"] = "Ajay Sing";                       // yes it also change old key value Data to Const Object in Questin 3.
console.log(nameList)

// Questin 5

const dict = {
    appreciate: "recognize the full worth of.",
    ataraxia: "a state of freedom form emotional disturbance and anxiety.",
    yakka: "work, especially hard work."
}

console.log(dict);
console.log(dict.yakka);                          // only meaning of Single word yakka.
console.log(dict['yakka'])                        // it also print only single word meaning (both are sintax to print single key value pair in large list.)




// ===========================================  Operators is js ===========================================
console.log("Operators in js");

//Arithmetic Operators

let a4 = 45;
let b4 = 4;
console.log("a4 + b4 = " , a4+b4);                         //Add 2 number.
console.log("a4 - b4 = " , a4-b4);                         // subtract 2 number.
console.log("a4 * b4 = " , a4*b4);                         // multiply 2 number.
console.log("a4 / b4 = " , a4/b4);                         // Divide 2 number.
console.log("a4 ** b4 = " , a4**b4);                       // it give power and multiply. Eg:  45⁴.
console.log("a4 % b4 = " , a4%b4);                         // it divide 2 number and give Remander of this 2 nomber.

console.log("a4 ++  = " , a4++);                            // it print the actual number then increase the number with 1 and save increase number.
console.log("real value after ++", a4);                    // it print real number after increment .
console.log("a4 --  = " , a4--);                          // it print the actual number then Decrease the number with 1 and save decrease number.
console.log("real value after --", a4);                  //  it print real number after decrease.

console.log("++a4  = " , ++a4);                         // it increase the number by 1 then print it .
console.log("--a4  = " , --a4);                        // it Decrease the number by 1 then print it .




// Assignment Operators


let assignment = 1;
assignment += 5                      // same as assignment = assignment + 5

console.log("a is now =", assignment);
assignment -= 5                     //  same as assignment = assignment - 5
console.log("a is now =", assignment);

assignment *= 5                     // same as assignment = assignment * 5
console.log("a is now = ", assignment);

assignment /= 5                     // same as assignment = assignment / 5
console.log("a is now = ", assignment);



// ===================================== Comparison operators ===================================== 

console.log("Comparison operators");

let comp1 = 6;
let comp2 = "6";
console.log("comp1 == comp2 is ", comp1 == comp2);
console.log("comp1 != comp2 is ", comp1 != comp2);
console.log("comp1 === comp2 is ", comp1 == comp2);
console.log("comp1 !== comp2 is ", comp1 != comp2);



// ===================================== Comparison operators ===================================== 

console.log("Logical Operator");

let x = 5;
let y = 6;
console.log(x<y && x==5);                       // it check LHS and RHS is true then it return True .
console.log(x<y || x==5);