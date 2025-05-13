let a = 1;
console.log(a); // 1 출력

// 함수 설정
function alpha() {
    var k = "hello"; // 한번 할당하면 변경 불가
    console.log(k);
}

alpha(); // 사용

let n = 123;
console.log(n);
n = 12.345;
console.log(n);
console.log(1 / 0); // Infinity 출력
console.log("숫자가 아님" / 2); // NaN 출력
// NaN은 Not a Number의 약자
// Infinity는 무한대라는 뜻
// NaN은 숫자가 아닌 것을 숫자로 나누려고 할 때 발생함
// Infinity는 0으로 나누려고 할 때 발생함

// BigInt는 정수형 숫자보다 더 큰 숫자를 표현하기 위해 존재함
// BigInt는 숫자 뒤에 n을 붙여서 표현함
const bigInt = 1234567890123456789012345678901234567890n;

let str = "hello"; // 문자열 - 큰따옴표
let str2 = 'single quotes are ok too'; // 문자열 - 작은따옴표
let phrase = `can embed another ${str}`; // 문자열 - 백틱
// 백틱은 문자열을 여러 줄로 나눌 수 있음

console.log(str); // hello 출력
console.log(str2); // single quotes are ok too 출력
console.log(phrase); // can embed another hello 출력
// 문자열은 큰따옴표, 작은따옴표, 백틱으로 표현할 수 있음

let age; // 아무 값도 없음
console.log(age); // undefined 출력
// undefined는 변수가 선언되었지만 값이 할당되지 않았을 때 사용됨
// null은 변수가 선언되었고 값이 null로 할당되었을 때 사용됨
// null은 의도적으로 비어있음을 나타내는 값

/* console.clear(); // 콘솔 초기화 */

// 등호 사용함
let user = {
    name: "John",
    age: 30,
};
// 객체는 중괄호로 감싸고, 키와 값을 콜론으로 구분함
// 객체는 여러 개의 값을 하나의 변수에 저장할 수 있음
console.log(user.name); // John 출력
user["name"]; // John 출력
// 대괄호로도 접근 가능

// 빈 객체를 선언할 때는 중괄호만 사용함
let empty = {}; // 빈 객체

