

function getArea(r){
    return PI *r*r;
}

const PI = 3.14;
let result = getArea(3);
console.log(result);



let book = {
    name : "나",
    author : "리액트 어쩌고",
    price : 10000
}

let valueArr = Object.values(book);

for(values of valueArr){  
    console.log(values);
}



