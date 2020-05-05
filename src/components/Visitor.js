import React, { useRef, useEffect, useState } from "react";
import { ReactComponent as ReactLogo } from "../images/speed-1.svg";

export default function Visitor(props) {
  const bar = useRef(null);

  useEffect(() => {
    // const height = props.count ? props.count.inQueue : 0;
    // bar.current.style.setProperty("--height", height);
    // bar.current.style.background = "red";
    // bar.current.style.width = "20px";
    return () => {};
  }, [props]);

  return (
    <div ref={bar} className="visitor">
      <ReactLogo />
      <div className="needle"></div>
    </div>
  );
}
