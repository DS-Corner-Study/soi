// import React from "react";
//import "./Body.css";
import {useRef, useState} from "react";

function Body() {
    const [text, setText] = useState("");
    const textRef = useRef();

    const hadleOnChange = (e) => {
        setText(e.target.value);
    };

    const hadleOnClick = () => {
        if(text.length <  5){
            textRef.current.focus();
        } else {
            alert(text);
            setText("");
        }
    };

    return (
        <div>  
            <input ref={textRef} value={text} onChange={hadleOnChange} />
            <button onClick={hadleOnClick}>작성 완료</button>
        </div>
    );
}

export default Body;


/*
function Body({name, location, favorList}) {
    console.log(name, location, favorList);
    return (
        <div className="body">
            {name}은 {location}에 거주합니다.
            <br />
            {favorList.length}개의 음식을 좋아합니다. 
        </div>
    );
}

Body.defaultProps = {
    favorList: [],
};


function Body({children}) {
    console.log(children);
    return (
        <div className="body">
            {children} 
        </div>
    );
}

*/