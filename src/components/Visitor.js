import React, { useRef, useEffect, useState } from "react";
import { ReactComponent as ReactLogo } from "../static/images/speed-1.svg";

export default function Visitor(props) {
  const bar = useRef(null);

  useEffect(() => {
    const R =
      props.count.inQueue !== undefined ? rotation(props.count.inQueue) : 0;
    bar.current.style.setProperty("--rotation", -110 + R);
  }, [props]);

  const showGif = props.count.inQueue >= 24 ? "block" : "none";

  return (
    <div className="container">
      <div ref={bar} className="visitor">
        <ReactLogo />
        <div className="needle"></div>
      </div>
      <div className="numbers">
        <div className="count">
          {props.count.inQueue ? props.count.inQueue : 0}
        </div>
        <div className="gifContainer" style={{ display: showGif }}>
          <h1>Run there's too many people!</h1>
          <img src={require("../static/images/exp.gif")} alt="Bye" />
        </div>
      </div>
    </div>
  );
}

function rotation(count) {
  const rotate = (count * 930) / 100;
  return rotate;
}
