
// alert("Hi Abhishek welcome in js")
// console.log("Chalo bhai dubara better hoga")
// console.log("Mey be ",5+8," error ")

//3.javaScript Variable
var number1 = 34;
var number2 = 56;
// console.log(number1+number2)

//4.DataType in javascript
var num1 = 455;
var num2 = 45.25;
var str1 = "This is a way to gone continue up";
var str2 = 'okay it is a way';
// console.log(num1,num2,str1,str2);

//Objects
var marks = {
    AbhishekRana: 90,
    AbhijeetRana: 91,
    ShivaniRana: 90

}

//Booleans
var a = true;
var b = false;
// console.log(a,b);

//undefined
var val;
// console.log(val)

//null
var num = null;
// console.log(num);

// At a very high level, there are two types of data types in javascript 
// 1. Primitive data types : undefined,null,number,string,boolean,symbol
// 2. References data types : Arrays and Objects

var arr = [1, 2, 3, 4, 5, "bablu"]
// console.log(arr)

//Comparision operators
var x = 34;
var y = 56;
console.log(x == y);

//Logical operators
console.log(true || true);
console.log(false || false)
console.log(true || false)

//function in javascript
function avg(a, b) {
    return (a / b) / 2;
}
var c1 = avg(10, 20);
var c2 = avg(50, 45);
console.log(c1, c2);

//Conditional statements
var age = 24;
if (age <= 20) {
    console.log("you are in a good age");
} else if (age >= 20 && age < 30) {
    console.log("you should focus on your carrier and bussiness")
} else {
    console.log("you can improve here what you have chosen")
}

//for loop in array
var arr = [1, 2, 3, 4, 5, 6]
for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i]+" ");
}

let j = 0;
while (j < arr.length) {
    console.log(arr[j++]);
}

//push and pop in array
let myArr = ["Fan","Camera",34,null,true];
// console.log(myArr.length)
myArr.push("Abhishek");
// console.log(myArr)
myArr.pop()
// console.log(myArr)
myArr.shift()
// console.log(myArr)