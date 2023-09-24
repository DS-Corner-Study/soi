//배열 - 인덱스 이용한 순회
// *인덱스: 배열의 데이터 저장 순서

let arr = [1,2,3,4];
for(let idx = 0; idx < 4; idx++){
    console.log(arr[idx]);
}

let food = ["떡볶이","짜장","치킨"];
for(let i=0; i < food.length; i++){
    console.log(food[i]);
}

//for ...of문 이용 (lengh 사용X)
let food2=["라면","짜장","치킨"];
for(let item of food2){  // 배열에서 요소를 하나씩 꺼내 item에 저장
    console.log(item);
}


//객체 - Object.keys를 이용한 key 순회 : key를 배열로 반환
// Object.values도 가능

let person={
    name: "정환",
    age: 25,
    location: "전주"
};

const keyArr=Object.keys(person);

for(let key of keyArr){
    let value=person[key];
    console.log(key,value);
}

//for...in문 이용한 순회
let person2={
    name: "소이",
    age: 22,
    location: "전주"
};

for(let key in person2){
    const value=person2[key];
    console.log(key, value);
}