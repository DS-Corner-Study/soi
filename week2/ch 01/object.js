//객체생성
let objA={}; //리터럴(빈 중괄호)
let objB=new Object(); //생성자 

//프로퍼티(속성): 빈 객체가 아닌 데이터가 있는 객체 생성 -> key(문자형), value
let person={
    name: "이정환",
    age: 25, 
    age: 30, //키 중복시 마지막 프로퍼티 생존
    "like cat": true //복수 단어 따옴표
}

//프로퍼티 접근
const personName = person.name; // 점 표기법
const personAge = person["age"]; // 괄호 표기법

//프로퍼티 추가
person.gender="male";   // 고정적인 key
person["nickname"] = "winterlood"  // 유동적

//프로퍼티 수정
person.name="소이";

//프로퍼티 삭제
delete person.gender;

//in 연산자: 프로퍼티 존재 여부
let isNameExist="name" in person;
console.log(isNameExist);

//메서드: 값이 함수인 프로퍼티 -> 객체의 동작 정의
let cat={
    name: "nabi",
    sayHi: function(){
        console.log("안녕");
    }
};
cat.sayHi();