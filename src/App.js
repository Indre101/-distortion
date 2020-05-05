import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      getData(setCount);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return <div className="App">hi</div>;
}

export default App;

const getData = async (setCount) => {
  const data = await fetch("https://kea-alt-del.dk/kata-distortion/");
  const response = await data.json();
  setCount((prevCount) => [response, ...prevCount]);
};
