//구조 분해 할당
let array =[1,2,3,4,5,6,7];
let [a1,a2,a3,...other]=array;

console.log(a1,a2,a3);
console.log(other);

let user={
    id:"test01",
    password:"pass",
    name:"테스트"
}

let {id, password,name}=user
console.log(id,password,name);

let(id,...user2)