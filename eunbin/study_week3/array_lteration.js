//forEach()함수
const array1=["a","b","c"];
array1.forEach((value,index,array) =>{
    console.log(value)
});
// 전체 요소 출력
array1.forEach(console.log);


// map
const array2=[1,4,9,16];
const array3=array2.map((v,i,a)=>{
    return v*2
});
console.log(array3);


// filter
const word =["spray","elite","exuberant","destruction","present"];
const result = word.filter((word)=>word.length>6);
console.log(result);