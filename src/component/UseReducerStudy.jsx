import React, { useReducer, useState } from "react";
import Student from "./Student";

const reducer = (state, action) => {
  switch (action.type) {
    case 'add-student':
      const name = action.payload.name
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent]
      };
    case 'delete-student':
      return {
        count: state.count - 1,
        students: state.students.filter(student => student.id !== action.payload.id)
      }
    default:
      return state;
  }
};

const initialState = {
  count: 0,
  students: [],
}

export const UseReducerTest = () => {
  const [name, setName] = useState('');
  /**
   * const [변수, 함수] = useReducer(함수, 변수) 
   * Dispatch :: state 업데이트를 위한 요구
   * Action :: 요구 내용
   * Reducer :: state 를 업데이트 하는 역할
   * 
  */
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);
  console.log('studentsInfo :: ', studentsInfo);
  console.log('initialState :: ', initialState);
  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생 수 : {studentsInfo.count}</p>
      <input
        type="text"
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => {
        dispatch({ type: 'add-student', payload: { name } })
      }}>추가</button>
      {studentsInfo.students.map((student) => {
        return <Student name={student.name} key={student.id} dispatch={dispatch} id={student.id} />;
      })}
    </div>
  )
}