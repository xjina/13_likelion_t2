let k1 = "Hello"; // let 재선언이 불가능한 변수
console.log(k1);

function A() {
    var k = "hello";
    console.log(k);
}

A();

let n = 123;
console.log(n);
console.log(1 / 0); //infinity
console.log("숫자가 아님" / 2); //NaN

let str = "hello";
let str2 = 'single quates are ok too';
let phrase = `can embed another ${str}`;
console.log(str);
console.log(str2);
console.log(phrase);

//js에서 null은 비어있는 값
//undefined는 존재하지 않는 값

let age;
console.log(age);

let user = {
    name: "John",
    age: 30
}
console.log(user.name);
user["name"] = "딴이름";
console.log(user.name);

let obj = {};
