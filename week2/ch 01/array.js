// js의 배열은 길이가 고정되어 있지 않음
let arrA = new Array(); //배열 생성자
let arrB = []; //배열 리터럴


let food=['짜장','피자','치킨',1]

console.log(food[0]); //인덱스 (객체는 key)

// 수정, 추가
food[2]="파스타";
food[3]='레몬'

console.log(food);