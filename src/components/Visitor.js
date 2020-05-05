import React, { useRef, useEffect, useState } from "react";
import { ReactComponent as ReactLogo } from "../images/speed-1.svg";

export default function Visitor(props) {
  const bar = useRef(null);

  useEffect(() => {
    const R = props.count !== undefined ? rotation(props.count.inQueue) : -110;
    bar.current.style.setProperty("--rotation", -110 + R);
  }, [props]);

  return (
    <div ref={bar} className="visitor">
      <ReactLogo />
      <div className="needle"></div>
    </div>
  );
}

function rotation(count) {
  const rotate = (count * 930) / 100;
  return rotate;
}
