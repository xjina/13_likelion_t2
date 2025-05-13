////변수
// let k;
// k = "hello";
// console.log(k);

////함수
// function test() {
//   var k = "hello2";
//   console.log(k);
// }

// console.log(k);
// test();

////자료형
// let n = 123;
// console.log(n);
// n = 12.345;
// console.log(n);

// console.log(1 / 0);    // Infinity
// console.log("숫자가 아님" / 2); // NaN

////bigint 자료형
// let k =
//   129818274891278391273891273981728937182937891273891273891273891723891723891723n;
// console.log(k);

////문자열
// let str = "Hello";
// let str2 = "Single quotes are ok too";
// let phrase = `can embed another ${str2}`;

// console.log(str + str2);
// console.log(str2);
// console.log(phrase);

// let age;
// console.log(age);

////오브젝트
let user = {
  name: "john",
  age: 30,
};

console.log(user);
console.log(user.name);
console.log(user["name"]);
console.log(user.age);
console.log(user["age"]);

user.name = "Pete";
console.log(user.name);
user["name"] = "Mary";
console.log(user.name);

let obj = {};
console.log(obj);
