var fname = "tanapat";
var lname = 'radsamafoo'

var num1 = 123
var num2 = 45.978

var bol = false



if (bol) {
    console.log("yes")
}

// window.alert(fname)
// document.getElementById("divname").innerText = fname + ' ' + lname
// console.log(fname + ' ' + lname)
// console.log(num1 + num2)
// console.log(fname + num1)
// console.log(arr[0] + " " + arr[1])

var arr = ["tanapat", "radsamafoo", 16, true]
console.log("arr:", arr[0])

var stdObj = {
    fname: "tanapat",
    lname: "radsamafoo",
    id: 660410023
}
console.log("obj:", stdObj.fname)

//global variable
const x = "tanapat"
console.log(x)

function showName(name) {
    console.log("hey " + name)
}

showName("tanapat")


function addNumber(num) {
    let result = 1 + num
    return result
}


let res = addNumber(8)
console.log(res)

// arrow function
let addNumber2 = (num) => {
    let result = 1 + num
    return result
}

let res2 = addNumber2(5)
console.log(res2)

//function  xxxx.loddfefeffe(){}

var score = 80
if (score <= 50) {
    console.log("f")
} else if (score <= 70) {
    console.log("B")
} else if (score <= 70) {
    console.log("A")
} else {
    console.log("S")
}
//for loop
for (let i = 0; i < 10; i += 2) {
    console.log(i)
}

var arr2 = ["tanapat", "radsamafoo", 16, true]

arr2.forEach((x) => { 
    console.log(x) })

arr2.forEach(function (x) { console.log(x) })

