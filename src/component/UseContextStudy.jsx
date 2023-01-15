import { useState } from "react";
import { Page } from "./Page";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";
export const UseContextTest = () => {
  const [isDark, setIsDark] = useState(false);

  /**createContext는 value로 전달한다 */
  return (
    <UserContext.Provider value={'사용자'}>
      <ThemeContext.Provider value={{isDark, setIsDark}}>
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  )
}