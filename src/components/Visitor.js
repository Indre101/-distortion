import React, { useRef, useEffect } from "react";

export default function Visitor(props) {
  const bar = useRef(null);

  useEffect(() => {
    const height = props.count[0] ? props.count[0].inQueue : 0;
    bar.current.style.setProperty("--height", height);
    bar.current.style.background = "red";
    bar.current.style.width = "20px";
    return () => {};
  }, [props]);

  return <div ref={bar} className="visitor"></div>;
}
