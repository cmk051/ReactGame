import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

export const Header = () => {
  /** props 사용하지 않고 useContext로 createContext 정보를 받아온다 */
  /** 오브젝트 형식으로 묶어서 보냈으니까 { isDark } 로 표시 */
  const { isDark } = useContext(ThemeContext);
  /** 단건만 보냈으니까 user로 표기 */
  const user = useContext(UserContext);

  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark? 'black' : 'lightgray',
        color: isDark? 'white' : 'black'
      }}
    >
      <h1>WelCome {user}!</h1>
    </header>
  );
};