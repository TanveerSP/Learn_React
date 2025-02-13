import React, { useEffect, useState } from "react";

const ResizeComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    console.log("Event listener added");
    window.addEventListener("resize", handleResize);

    return () => {
        window.removeEventListener("resize", handleResize);
        console.log("Event listener remove");
    };
  }, []);
  // it will run only on first render

  return (
    <div className="  ">
      <h1>Window Width: {windowWidth} px</h1>
    </div>
  );
};

export default ResizeComponent;
