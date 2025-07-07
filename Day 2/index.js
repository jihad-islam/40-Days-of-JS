/*
    primitive data types:
        1. They are immutable, meaning their value cannot be changed after creation.
        2. actual data or value store kore.
        3. string, integer, boolean, null, Undefined, etc basic data types.
        4. it stores value in the stack memory.

    non primitive data types or reference data types:
        1. They are mutable, meaning their value can be changed after creation.
        2. era actual value ta store kore na, reference store kore.
        3. object, array, function, etc.
        4. it stores reference in the stack memory and actual value in the heap memory.

        reference stores the memory address of a value, but it does not enclose the adress to programmer. reference has been used in high level programming language.
        pointer is a variable which stores the memory address of another variable. it encloses the memory address to programmer. pointer has been used in low level programming language.

    now another confusion. array in js and array in c++: array in js are non primitive data types which stores reference of a value rather than stores direct value. but array in c++ stores value directly in contiguous memory location. array in c++ follows primitve data structure.

*/

/*
let vs const vs var:
    1. let and const are block scoped, meaning they are only accessible within the block
    2. var is function scoped, meaning it is accessible within the function it is declared
    3. var: can be redeclared and reassigned
       let: can be reassigned but cannot be redeclared
       const: cannot be reassigned or redeclared
*/

// var
var a = 10;
var a = 20; // redeclared and reassigned
a = 30; // can reassign
console.log(a); // 30

// let
let b = 10;
// let b = 20; // it can reassign but cannot redeclare, will throw an error
b = 20; // can reassign
console.log(b); // 20

// const
const c = 10;
// const c = 20; // it cannot reassign or redeclare, will throw an error
// c = 20; // it cannot reassign, will throw an error
console.log(c); // 10

/*
null vs undefined:
    1. null is an intentional absence of any value, it is a primitive value.
    2. undefined is a variable that has been declared but has not been assigned a value, it is also a primitive value.
    3. null is an object type, while undefined is of type undefined.
    4. null is used to indicate that a variable should have no value, while undefined indicates that a variable has not been assigned a value.

    5. that means null e value assign kora hocche but it is nothing, while undefine e kono value assign kora hoyna.
*/
let x = null; // intentional absence of value
let y; // declared but not assigned a value
