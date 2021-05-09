import React, { createContext, useContext } from "react";
import "../styles.css";

const ThemeContext = createContext();

function Button() {
  const theme = useContext(ThemeContext);

  return <button>{theme.mode}</button>;
}

export default function App() {
  return (
    <div className="App">
      <h1>UseContext</h1>
      <ThemeContext.Provider value={{ mode: "white" }}>
        <Button />
      </ThemeContext.Provider>
      <br />
      <ThemeContext.Provider value={{ mode: "dark" }}>
        <Button />
      </ThemeContext.Provider>
    </div>
  );
}
