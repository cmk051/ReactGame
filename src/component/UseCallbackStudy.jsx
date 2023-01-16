import React, { useState, useCallback } from "react";
import { Box } from "./Box";

export const UseCallbackTest = () => {
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  /** 
   * useCallback을 사용안하고 그냥 함수를 정의하면 useState가 변경될때마다 렌더링이 되서 전체 함수가 호출이된다.
   * Change Theme(배경색 변경) 을 변경해도 박스 스타일 함수가 호출되는 것은 비 효율적이다. 
   * useCallback 함수를 사용하면 Change Theme이 아닌 사이즈가 변경될때만 호출이 된다.
   * useMemo 와 useCallback의 차이는 useMemo는 값이 반환된다. useCallback은 함수 자체를 반환한다.
  */
  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor : 'pink',
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);

  return (
    <div
      style={{
        background: isDark ? 'black' : 'white',
      }}
    >
      <input 
        type="number"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />
      <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
      <Box createBoxStyle={createBoxStyle} />
    </div>
  )
}