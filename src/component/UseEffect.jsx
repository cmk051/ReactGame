import React, { useState, useEffect } from "react";
import { Timer } from "./Timer";
 
export const HookUseEffect = () => {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleNameUpdate = (e) => {
    setName(e.target.value);
  };

  /** mount + []가 업데이트 될때만 호출 */
//   useEffect(() => {
//     console.log('count 변화시에만 호출');
//   }, [count]);

//   useEffect(() => {
//     console.log('name 변화시에만 호출');
//   }, [name]);

//   useEffect(() => {
//     console.log('렌더링시에 호출');
//   });

  useEffect(() => {
    console.log('mounted 일때만 호출 ');
  }, []);

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span> count : {count} </span>
      <input type='text' value={name} onChange={handleNameUpdate} />
      <span> name : {name} </span>
    </div>
  );
}

export const TimerToggle = () => {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      <p>----------------------------------------</p>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  )
};