import React, { useEffect, useState } from "react";
import "./css/App.css";
import Visitor from "./components/Visitor";

function App() {
  const [count, setCount] = useState({});

  useEffect(() => {
    const intervalId = setInterval(() => {
      getData(setCount);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [count, count.length]);

  return (
    <div className="App">
      <div>
        <h1>Students in the que </h1>

        <Visitor count={count} />
      </div>
    </div>
  );
}

export default App;

const getData = async (setCount) => {
  const data = await fetch("https://kea-alt-del.dk/kata-distortion/");
  const response = await data.json();
  setCount(response);
};
