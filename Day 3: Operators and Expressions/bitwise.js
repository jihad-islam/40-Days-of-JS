/*
Bitwise operators perform operations on binary representations of numbers.
The bitwise operators in JavaScript are:
    1. AND (&) : &&(logical AND), &(bitwise AND)
    2. OR (|) : ||(logical OR), |(bitwise OR)
    3. XOR (^) : 
    4. NOT (~)
    5. Left Shift (<<)
    6. Right Shift (>>)
    7. Unsigned Right Shift (>>>)
    8. Bitwise AND Assignment (&=)
    9. Bitwise OR Assignment (|=)
    10. Bitwise XOR Assignment (^=)
*/

// bitwise AND
/*
bitwise AND returns 1 only if both bits are 1, otherwise returns 0.

✅ Example
Let’s take two numbers:
5  (in binary) = 0101  
3  (in binary) = 0011  

Now apply bitwise AND (`&`):
   0101   (5)
&  0011   (3)
--------
   0001   = 1

So, `5 & 3 = 1`

Bitwise AND is used in:
    * Checking if a specific bit is **on or off**
    * Masking bits
    * Optimizing performance in low-level code (like games, hardware)
*/
let a = 15; // 1111 in binary
let b = 9; // 1001 in binary
let resultAnd = a & b; // 1001 in binary, which is 9
console.log(`Bitwise AND of ${a} and ${b} is: ${resultAnd}`);

// bitwise OR
/*
bitwise OR returns 1 if at least one of the bits is 1, otherwise returns 0.

✅ Example
Let’s take two numbers:
5  (in binary) = 0101  
3  (in binary) = 0011  

Now apply bitwise OR (`|`):
   0101   (5)
|  0011   (3)
--------
   0111   = 7

So, `5 | 3 = 7`

Bitwise OR is used in:
    * Combining flags
    * Setting specific bits to 1
    * Optimizing performance in low-level code (like games, hardware)
*/
let resultOr = a | b; // 1111 in binary, which is 15
console.log(`Bitwise OR of ${a} and ${b} is: ${resultOr}`);

// bitwise XOR
/*
bitwise XOR returns 1 if the bits are different, otherwise returns 0.

✅ Example
Let’s take two numbers:
5  (in binary) = 0101  
3  (in binary) = 0011

Now apply bitwise XOR (`^`):
   0101   (5)
^  0011   (3)
--------
   0110   = 6

So, `5 ^ 3 = 6`

Bitwise XOR is used in:
    * Toggling bits
    * Finding differences between two numbers
    * Optimizing performance in low-level code (like games, hardware)
*/
let resultXor = a ^ b; // 0110 in binary, which is 6
console.log(`Bitwise XOR of ${a} and ${b} is: ${resultXor}`);

// left shift
/*
Left shift (`<<`) shifts the bits of a number to the left by a specified number of positions.
Each left shift effectively multiplies the number by 2.

✅ Example
Let’s take a number:
9  (in binary) = 1001

Now apply left shift (`<<`) by 2 position:
   1001   (9)
<< 2
--------
    100100 = 36

So, `9 << 2 = 36`

Left shift is used in:
    * Multiplying by powers of 2
    * Optimizing performance in low-level code (like games, hardware)
*/
let leftShiftResult = a << 2; // 100100 in binary, which is 36
console.log(`Left shift of ${a} by 2 positions is: ${leftShiftResult}`);

// right shift
/*
Right shift (`>>`) shifts the bits of a number to the right by a specified number of positions.
Each right shift effectively divides the number by 2.

✅ Example
Let’s take a number:
9  (in binary) = 1001

Now apply right shift (`>>`) by 2 positions:
   1001   (9)
>> 2
--------
   0010   = 2

So, `9 >> 2 = 2`

Right shift is used in:
    * Dividing by powers of 2
    * Optimizing performance in low-level code (like games, hardware)
*/
let rightShiftResult = a >> 2; // 0010 in binary, which is 3
console.log(`Right shift of ${a} by 2 positions is: ${rightShiftResult}`);
