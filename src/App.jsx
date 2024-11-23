import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";

export default function App() {
  let [count, setCount] = useState(0);

  const addCounter = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const minusCounter = () => {
    setCount((prevCount) => prevCount - 1);
  };

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <Header />
      <button onClick={addCounter}>+</button>
      <h2>{count}</h2>
      <button onClick={minusCounter}>-</button>
      <Footer />
    </div>
  );
}
