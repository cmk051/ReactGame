import React, { useEffect, useState } from "react";

export const Box = ({ createBoxStyle }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    // console.log('박스 크기가 변경되었습니다.');
    setStyle(createBoxStyle);
  }, [createBoxStyle]);

  return <div style={style}></div>
}