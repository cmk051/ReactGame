import React, { useState, useRef } from "react";

export const UseRefStudy = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  // console.log(countRef); // countRef.current로 값을 확인한다.

  const increaseCountState = () => {
    setCount(count + 1);
  };
  /**userState는 바뀌면 렌더링이 되지만 useRef는 값을 저장하지만 렌더링이 되지 않는다 ! ! ! */
  const increaseRefState = () => {
    countRef.current = countRef.current + 1;
  }

  return (
    <div>
      <p>----------------------------------------</p>
      <p> State: {count} </p>
      <p> Ref : {countRef.current}</p>
      <button onClick={increaseCountState}> State를 올려라 !!!!!</button>
      <button onClick={increaseRefState}> Ref를 올리거라 !!!</button>
    </div>
  )
};

export const CountRefStudy = () => {
  const [randerer, setRenderer] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const updateRef = () => {
    countRef.current = countRef.current + 1;
    console.log('ref :: ', countRef.current);
  }

  const updateVar = () => {
    countVar = countVar + 1;
    console.log('var :: ', countVar);
  }
  /**렌더링을 진행할 경우 
   * ref는 값이 저장되어 있어서 업데이트가 되지만 
   * var 같은 경우는 함수에서 다시 초기화 해주기 때문에 0이 나온다.
   */
  return(
    <div>
      <p>----------------------------------------</p>
      <p>Ref : {countRef.current}</p>
      <p>Var : {countVar}</p>
      <button onClick={() => {setRenderer(randerer + 1)}}>렌더링을 부탁해 !!</button>
      <button onClick={updateRef}>Ref 올려라 !</button>
      <button onClick={updateVar}>Var 올려라 !</button>
    </div>
  )
};

// export const RefTest = () => {
//   const [count, setCount] = useState(0);
//   const renderCount = useRef(1);

//   useEffect(() => {
//     renderCount.current = renderCount.current + 1;
//     console.log('렌더링 수 :: ', renderCount.current);
//   });

//   return (
//     <div>
//       <p>Count : {count}</p>
//       <button onClick={setCount(count + 1)}>Count를 올려라</button>
//     </div>
//   )
// };