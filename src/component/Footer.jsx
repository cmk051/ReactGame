import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const Footer = () => {
  /** props 사용하지 않고 useContext로 createContext 정보를 받아온다 */
  const { isDark,setIsDark } = useContext(ThemeContext);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: isDark? 'black' : 'lightgray',
      }}
    >
      <button className="button" onClick={toggleTheme}>
        Dark Mode
      </button>
    </footer>
  );
};