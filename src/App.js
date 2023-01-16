import { useState } from 'react';
import { HookUseEffect, TimerToggle } from './component/UseEffect';
import { UseRefStudy, CountRefStudy, RefCount, DomRefTest } from './component/UseRefStudy';
import { UseContextTest } from './component/UseContextStudy';
import { UseMemoStudy } from './component/UseMemoStudy';
import { UseCallbackTest } from './component/UseCallbackStudy';
const App = () => {
  const [time, setTime] = useState(1);

  const handleClick = () => {
    let newTime;
    if (time >= 24) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }
    setTime(newTime);
  }

  return (
    <>
      <div>
        <span>현재 시간 : {time} 시</span>
        <button onClick={handleClick}>+1 버튼</button>
      </div>
      <Name />
      <HookUseEffect />
      <TimerToggle />
      <UseRefStudy />
      <CountRefStudy />
      <RefCount />
      <DomRefTest />
      <UseContextTest />
      <UseMemoStudy />
      <UseCallbackTest />
    </>
  );
}

const checkRander = () => {
  // console.log('계속 들어옴 !')
  return ["홍길동", "김민수"];
};

const Name = () => {
  const [names, setNames] = useState(() => 
    /* 콜백함수로 설정하면 랜더링할때마다 호출이 아닌 1번만 호출 */
    checkRander()
  );
  const [input, setInput] = useState(['']);

  const nameUpload = () => {
    setNames((prevState) => {
      /* spred 문법 기존 배열은 새로운 형태로 복사 */
      console.log('이전 배열 값 :: ', prevState)
      return([input, ...prevState]);
    });
  }

  const updateName = (e) => {
    /* input 값이 변경 될때마다 업데이트 */
    setInput(e.target.value);
  }

  return (
    <div>
      <p>----------------------------------------</p>
      <input type="text" value = {input} onChange = {updateName}/>
      <button onClick = {nameUpload}>Upload</button>
      {names.map((name, index) => {
        /** JS에서의 map은 반복문 */
        return <p key={index}>{name}</p>
      })}
    </div>
  )
}

export default App;
