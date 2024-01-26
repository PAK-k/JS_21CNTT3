// toán tử ba ngôi (rút gọn cấu trúc if, else)
var x = 500;
var kq = (x < 1000) ? console.log("bé hơn 1000") : console.log("lớn hơn hoặc bằng 1000");

// shorthand evaluated
var vl2, vl1=1;
if (vl1 !== null || vl1 !== undefined || vl1 !== '') {
    vl2 = vl1;
    console.log(vl2);
} else {
    vl2 = "";
    console.log(vl2);
}
// ==>
var variable1;
var variable2 = variable1 || console.log("");

// variable declaration - if comparison
let t,y,z=3;
var variable = true;
if (variable) {
    console.log("hello");
} else {
    console.log("goodbye");
}

// for loop - for loop with decimal base
    for (var i = 0; i < sampleArr.length; i++){}
    for (var i in sampleArr){}

    for (var i = 0; i < 100000; i++) {}
    for (var i = 0; i < le5; i++) {}
// giá trị các biểu thức sau đều là true
// le0 = 1;
// le1 = 10;
// le2 = 100;
// le3 = 1000;
// le4 = 10000;
// le5 = 100000;

// object property
const a = 1, b = 2;
const obj = {a, b};

// rút gọn định nghĩa function (sử dụng arrow function)
sayHello = name => console.log('Hello',name);

setTimeout(() => console.log('loaded'), 2000);

var list = ["kiệt","hiền"]
list.forEach(item => console.log(item));

getValue = ratio => ratio * 6.9;

// Set default value for parameter in function
getValue1 = (a, b = 3, c = 4) => (a * b + c);

// Template list
const welcom = 'you have logged in as ${first} ${last} .';
console.log(welcom);

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.'
console.log(lorem);

// Destructuring Assignment
    import { action, service } from 'lib';
    const { form, errors, entity, controller, component } = this.props;

//// Spead Operator
// joining arrays
const odd = [1, 3, 5];
const nums = [2, 4, 6].concat(odd);

// cloning arrays
const arr = [1, 2, 3, 4];
const arr2 = arr.slice();

// joining arrays
const odd1 = [1, 3, 5];
const nums1 = [2, 4, 6, ...odd];

// cloning arrays
const arr1 = [1, 2, 3, 4];
const arr21 = [...arr];

const add2 = [1, 3, 5];
const nums2 = [2, ...odd,4 , 6];

// Constraint Param
mandatory = () => {throw new Error('thiếu tham số!');}
sample = (param1 = mandatory()) => param1

// Find() in arrays
const name = 'Emp A'
emp = employees.find(item => item.name === name)

// Object[key]
function validate(fullName) {
    if(!fullName.firstName)
    return false;
    if(!fullName.lastName)
    return false;
    return true;
}
console.log(validate({firstName:'Kiệt', lastName:'Phạm'}));

// Object[key]
const rule = {
    firstName: {
        required: true
    },
    lastName: {
        required: true
    }
}

const validate = (rule, values) => {
    for(prop in rule) {
        if(rule[prop].required) {
            if(!validate[prop]) {
                return false;
            }
        }
    }
    return true;
}

console.log(validate(rule, {firstName:'Duy'})); //false
console.log(validate(rule, {firstName:'Kiệt', lastName:'Phạm'})); //true

// bitwise NOT double
~~6.9 === 6