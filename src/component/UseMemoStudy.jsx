import React, { useEffect, useMemo, useState } from "react";

export const UseMemoStudy = () => {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  /** 객체형식은 원시 타입이 아니라서 할당될 때마다 주소값이 바뀐다. 한마디로 렌더링될때마다 주소값이 바뀐다. 
   *  useMemo는 느낌이 useEffect 랑 비슷하다고 생각을 했다. 차이점은 캐시에 저장을 한다는 점이 있다.
   */

  const location = useMemo(() => {
    return {
      country: isKorea ? '한국' : '북한'
    };
  }, [isKorea]);

  // const location = {
  //   country: isKorea ? '한국' : '북한'
  // };

  /** useEffect는 3가지 종류가 있다. 빈배열이면 마운트될때 한번, 콜백함수만 있으면 렌더링될때마다 호출
   *  배열에 값이 있으면 바뀔때마다 호출 !
   *  여기서는 location 이 바꼈을때만 호출된다.
   */
  useEffect(() => {
    console.log('useEffect가 호출 ! !');
  }, [location]);

  return(
    <div>
      <h2>원하는 숫자를 입력해보세요!</h2>
      <input 
        type="number" 
        value={number} 
        onChange={(e) => {setNumber(e.target.value)}}
      />
      <hr />
      <h2>어느 나라에 거주중인가요?</h2>
      <p>나라 : {location.country}</p>
      <button onClick={() => {setIsKorea(!isKorea)}}> 다른 곳으로 떠나자 </button>
    </div>
  )
}