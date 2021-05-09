import React, { useState, useEffect } from "react";
import "../styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect rodou");

    return () => {
      console.log("Vai desmontar...");
    };
  }, []);

  useEffect(() => {
    console.log("Contador");
  }, [counter]);

  useEffect(() => {
    console.log("name");
  }, [name]);

  //Exemlos de chamada de API
  //1
  /**
   * useEffect(()=>{
     fetch().then()
   },[]);
   */
  //2
  /**
   * useEffect(()=>{
    async function load(){
      await api.get('');
    }
    load();
  },[]);
   */
  //3
  /**
   * useEffect(() => {
    //IIFE -> Immediately Invoked Function Expression
    (async () => {
      await api.get("");
    })();
  }, []);
   */

  function handlePlus() {
    setCounter((prevState) => prevState + 1);
  }

  function handleMinus() {
    setCounter((prevState) => prevState - 1);
  }

  return (
    <div className="App">
      <h1>useState</h1>
      <h2>Contador</h2>
      <h1>{counter}</h1>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
      <div className="Input">
        <span>{name}</span>
        <br />
        <input onChange={(e) => setName(e.target.value)}></input>
      </div>
    </div>
  );
}
