import React from "react";

export const Child = React.memo(({ name, age }) => {
  console.log('자녀 렌더링 !');

  return (
    <div style={{ border: '2px solid powderblue', padding: '10px' }}>
      <h3>자녀 입니다.</h3>
      <p>name: {name}</p>
      <p>age: {age}</p>
    </div>
  );
});
