// //Example 1 resassign values
// console.log('Example 1 resassign values')
// let arr = ["a", "b", "c"];
// arr[0] = "100";
// arr[1] = "200";

// console.log(arr); // [ '100', '200', 'c' ]

// //Example 2 Destructor
// console.log('Example 2 Destructor')
// let arr1 = ["a", "b", "c"];
// // declaring two NEW variables x and y here
// let [x, y] = arr1;

// console.log(x); //'a'
// console.log(y); // 'b'
// console.log(arr1); // [ 'a', 'b', 'c' ]

// //Example 3 reassign values with destructuring and hardcoded values
// console.log('Example 3 reassign values with destructuring ')
// let arr2 = ["a", "b", "c"]; // NOTE:need semi colon here....?

// // destructoring the values'9999', '1234132' in to position arr[0] and arr[1]
// [arr2[0], arr2[1]] = ["9999", "1234132"];

// console.log(arr2); // [ '9999', '1234132', 'c' ]

// //Example 4 reassign values with destructuring and values from array
// console.log('Example 4 reassign values with destructuring ')
// let arr3 = ["a", "b", "c"]; // NOTE:need semi colon here....?

// // destructuring the values'9999', '1234132' in to position arr[0] and arr[1]
// [arr3[0], arr3[1]] = [arr3[1], arr3[0]];

// //really just
// //[arr3[0], arr3[1]] = ['b', 'c'];

// console.log(arr3); // [ 'b', 'a', 'c' ]


// another example of array reassigning variables  with array destructuring
let x = 1;
let y = 2;

[x, y] = ["a", "b"];

console.log(x); //'a'
console.log(y); //'b'


// another example of array reassigning variables  with array destructuring
// this case would swap values
let foo = 1;
let bar = 2;

[foo, bar] = [bar, foo];

console.log(foo); //2
console.log(bar); //1
