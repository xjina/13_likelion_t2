let k = "Hello";
console.log(k);

// function aaa(){
//     var a ="hello";
// }
// console.log(a); //함수 내의 지역변수라고 생각. 따라서 함수 밖에서 사용 불가
// aaa();

let n = 123;
console.log(n);

n = 123.123;
console.log(n);

console.log(1/0);
console.log("ad"/2); //타입에 유연해서 NaN이나 infinity로 출력(디버그 오류로 감지X)

let str = "Hello";
let str2 = 'Single quotes';
let phrase = `can embed ${str}`;

console.log(phrase,"\n",str);
let age;
console.log(age);

let user={
    name:"John",
    age:30
};

console.log(user);
console.log(user["name"]); // .과 [""]이 같은 역할을 수행함(?)
console.log(user.age);

