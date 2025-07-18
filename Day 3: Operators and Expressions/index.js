/*
post increment vs pre increment:
    1. post increment: variable++ or variable = variable + 1;
    2. pre increment: ++variable or variable = variable + 1;
    3. post increment returns the value before incrementing, while pre increment returns the value after incrementing.
    4. post increment is used when you want to use the value before incrementing, while pre increment is used when you want to use the value after incrementing.
*/

let a = 10;
let b = a++; // post increment, b = 10, a = 11
console.log(a); // 11
console.log(b); // 10

let c = 10;
let d = ++c; // pre increment, c = 11, d = 11
console.log(c); // 11
console.log(d); // 11

// Comparison Operators
console.log(null === null); // true
console.log(undefined === undefined); // true
console.log(null === undefined); // false
console.log(null == undefined); // true, because both are falsy values

let obj1 = { name: "Alice" };
let obj2 = { name: "Alice" };
console.log(obj1 === obj2); // false, duita obj er value same holew. era memory address alada, ekhane memory address compare kortese tai false.

/*
Truthy and Falsy Values in JavaScript:
    Falsy: false, 0, '  ', null, undefined, NaN
    ei 6 ta holo falsy baki shob truthy

Logical AND `&&`
- If the first operand is falsy, return it.
- Otherwise, return the second operand.
- main kotha logical AND shurute falsy paile oita return korbe, otherwise second ta return korbe.
 
Logical OR `||`
- Returns the first truthy value.
- If both are falsy, returns the last value.
- main kotha logical OR shurute truthy paile oita return korbe, otherwise last ta return korbe.

Nullish Coalescing (koalesing) `??`
- Returns the left-hand value if it is not `null` or `undefined`.
- Returns the right-hand value only if the left-hand is `null` or `undefined`.
- Does not consider `0`, `false`, or '' as nullish.


* logical AND, logical OR returns true or false. but nullish coalescing operator returns the value. 
*/

console.log(false && false); // false
console.log(true && false); // false
console.log(false && true); // false
console.log(true && true); // true

console.log("cow" && "dog"); // dog
console.log("cow" && ""); // ''
console.log(4 > 5 && 4 === 6); //false

// nullish coalescing operator ekta important operator. always first value ta return korbe if the first value is not null or undefined. db connection er khetre use hoy. if db connection is not established, then it will return null or undefined, otherwise it will return the value of the db connection.
let dbConnection = null;
let db = dbConnection ?? "No DB Connection";
console.log(db); // No DB Connection
