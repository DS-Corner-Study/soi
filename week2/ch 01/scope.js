// 변수나 함수의 제약 범위 
// 전역 스코프 -> 전역 변수, 지역 스코프 -> 지역 변수
// 지역 스코프: 함수 내부에서 선언, 블록 내부 선언(조건문, 반복문) + 카운터 변수
let a=1;
function foo(){
    console.log(a);
}

function bar(){
    console.log(a);
}

foo(); 
bar();
console.log(a);

//블록 스코프(let, const), 함수 스코프(var)
if(true){
    var b=1; //전역스코프 -> 함수 내부 선언 변수만 지역 스코프를 갖는 함수 스코프
}

console.log(b);


function foo(){
    var c=1; //지역스코프 : 함수 스코프
}

console.log(c); //오류