// src/components/WindowResizeLogger.jsx
import React, { useState, useEffect } from "react";

function WindowResizeLogger() {
  const [width, setWidth] = useState(window.innerWidth);
  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;
  console.log(window);
  console.log("Touch Support:", isTouchDevice);
  useEffect(() => {
    let resizeCount = 0;

    const handleResize = () => {
      setWidth(window.innerWidth);
      resizeCount++;

      if (resizeCount >= 5) {
        console.clear();
        resizeCount = 0;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isTouchDevice]);

  const containerStyle = `container ${
    width < 900 ? "small-screen" : "large-screen"
  }`;

  return (
    <div className={containerStyle}>
      <p>Width: {width}px</p>
      <p>Screen Width: {width}px</p>
    </div>
  );
}

export default WindowResizeLogger;
