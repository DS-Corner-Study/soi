import './App.css';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/Even';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // const didMountRef = useRef(false);

  const handleSetCount = (value) => {
    setCount(count + value);
  };

  const hadleChangeText = (e) => {
    setText(e.target.value);
  };

  /*
  useEffect(() => {
    if (!didMountRef.current){
      didMountRef.current = true;
      return;
    }
    else {
      console.log("컴포넌트 업데이트");
    }
  });

  useEffect(() => {
    console.log("컴포넌트 마운트");
  }, []);

  useEffect(() => { 
    const intervalID = setInterval(() => {
      console.log("깜빡");
    }, 1000);

    return () => {  // 클린업 - 콜백함수 실행 전 or 컴포넌트 언마운트 시점에 실행
      console.log("클린업");
      clearInterval(intervalID);
    }
  });
  */

  return (
    <div>
      <div className='App'>
        <h1>Simple Counter</h1>
        <section>
          <input value={text} onChange={hadleChangeText} />
        </section>
        <section>
          <Viewer count={count} /> 
          { count % 2 === 0 && <Even /> }
        </section>
        <section>
          <Controller handleSetCount={handleSetCount} />
        </section>
      </div>
    </div>
  );
}

export default App;
