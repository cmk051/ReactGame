import React, { useEffect } from "react";

export const Timer = (props) => {
  useEffect(() => {
    const timer = setInterval(() => {
      // console.log('타이머가 돌아가는중 ! ! ! !');
    }, 1000);
    
    /**화면에서 사라질때 retrun 문이 실행 unmounted 될때 */
    return () => {
      clearInterval(timer);
      // console.log('타이머 종료');
    };
  }, []);

  return (
    <div>
      <span>타이머를 시작합니다. 콘솔을 확인하세요!</span>
    </div>
  );
};

/**파일에 모듈이 하나있으면 export default 사용 가능, 아니면 불가능 */