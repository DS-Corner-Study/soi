// 호이스팅 X
function greeting(){   // 함수 선언
    console.log("안녕하세요");
}

greeting(); // 함수 호출

// 호이스팅 : 선언하기도 전에 호출 가능 > 함수 선언의 위치 유연성
// 함수 표현식은 선언이 아닌 값으로 취급하므로 호이스팅 불가
func();

function func(){   
    console.log("hello");
}

// 콜백함수 - 익명함수
function repeat(count, callBack){
    for(let i = 0; i< count; i++){
        callBack(i+1);
    }
}

repeat(5, function(count){
    console.log(count*2)
});